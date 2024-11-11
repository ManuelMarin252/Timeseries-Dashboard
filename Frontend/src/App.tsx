import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box } from '@mui/material'
import { Book } from './components/book'
import { type AssetData as OriginalAssetData, data, type PriceEntry } from '../datos'
import { Plot } from './components/plot'
import { useEffect, useState } from 'react'
// function App () {
//   const dataYPF: PriceEntry = data.YPF.at(-1) ?? data.YPF[0]
//   const dataSP500: PriceEntry = data.SP500.at(-1) ?? data.SP500[0]
//   const dataWTI: PriceEntry = data.WTI.at(-1) ?? data.WTI[0]
//   const dataSOY: PriceEntry = data.SOY.at(-1) ?? data.SOY[0]
//   return (
//     <Box sx={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
//     <h1>hola</h1>
//     <Book priceEntry={dataYPF} title='YPF'></Book>
//     <Book priceEntry={dataSP500} title='SP500'></Book>
//     <Book priceEntry={dataWTI} title='WTI'></Book>
//     <Book priceEntry={dataSOY} title='SOY'></Book>
//     <Plot data={data.YPF} title='YPF'></Plot>
//     </Box>
//   )
// }
import socketIOClient from 'socket.io-client'

type AssetData = Record<string, PriceEntry> & OriginalAssetData

const ENDPOINT = 'http://localhost:5000'
const App = () => {
  // Estado para almacenar los datos de todos los activos
  const [prices, setPrices] = useState<AssetData>({ WTI: data.WTI[0], SOY: data.SOY[0], YPF: data.YPF[0], SP500: data.SP500[0] })
  const [dataYPF, setDataYPF] = useState<PriceEntry[]>([])
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)

    // Escuchar el evento `price_update` del WebSocket
    socket.on('price_update', (data: AssetData) => {
      setDataYPF(prevDataYPF => [...prevDataYPF, data.YPF])
      // Actualizar el estado con los nuevos datos de todos los activos
      setPrices(data)
    })

    return () => {
      socket.disconnect()
    }
  }, [])
  useEffect(() => {
    console.log('dataYPF', dataYPF)
  }, [dataYPF])
  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', wrap: 'wrap', alignItems: 'center' }}>
      <h1>Precios en Tiempo Real</h1>
      {/* Iterar sobre los precios de cada activo */}
      {Object.keys(prices).map((asset, index) => (
        <Book priceEntry={prices[asset]} title={asset} key={index} />
      ))}
      <Plot data={dataYPF} title='YPF' />
    </Box>
  )
}

export default App
