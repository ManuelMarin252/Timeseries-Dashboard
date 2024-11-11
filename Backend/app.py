# app.py
from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import numpy as np
import time
import threading
import datetime
app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")


# Parámetros iniciales de cada activo
assets = {
    "WTI": {"mu": 0.06, "sigma": 0.47, "S0": 70.0, "spread": 0.1},
    "SOY": {"mu": 0.08, "sigma": 0.14, "S0": 995.0, "spread": 0.25},
    "YPF": {"mu": 0.16, "sigma": 0.46, "S0": 25.0, "spread": 0.5},
    "SP500": {"mu": 0.10, "sigma": 0.12, "S0": 5700.0, "spread": 5}
}

# Constantes
dt = 1 / 252  # Un día en un año de 252 días hábiles

def simulate_price(Si, mu, sigma):
    """Calcula el próximo precio simulado usando la fórmula dada."""
    random_component = np.random.normal(0, 1)  # N(0, 1)
    Si_next = Si * (1 + mu * dt + sigma * np.sqrt(dt) * random_component)
    return round(Si_next, 2)

def generate_data():
    """Genera y envía precios simulados de todos los activos a través del WebSocket."""
    while True:
        # Crear un diccionario para almacenar los datos de todos los activos
        prices = {}

        for asset, params in assets.items():
            # Calcular el próximo valor de 'Last' para el activo
            params["S0"] = simulate_price(params["S0"], params["mu"], params["sigma"])
            bid = round(params["S0"] - params["spread"], 2)
            ask = round(params["S0"] + params["spread"], 2)
            timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S.%f')[:-3]

            # Agregar los datos de este activo al diccionario de precios
            prices[asset] = {
                "Bid": bid,
                "Ask": ask,
                "Last": params["S0"],
                "Timestamp": timestamp
            }

        # Enviar el diccionario completo de precios al cliente
        socketio.emit('price_update', prices)
        # poner un mensaje en la consola del servidor
        # Pausa de 10 segundos antes de enviar el próximo conjunto de datos
        socketio.sleep(0.2)

# Iniciar el hilo de simulación de datos al arrancar el servidor
@socketio.on('connect')
def start_data_stream():
    """Inicia la transmisión de datos al cliente cuando se conecta."""
    if not socketio.server.eio.start_background_task(generate_data):
        print("Data streaming started.")

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
