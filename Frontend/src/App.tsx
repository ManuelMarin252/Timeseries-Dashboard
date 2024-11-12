import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box, CssBaseline, Typography } from '@mui/material'
import { Book } from './components/book'
import { type AssetData as OriginalAssetData, data, type PriceEntry } from '../datos'
import { Plot } from './components/plot'
import { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import { ColorModeContext, tokens, useMode } from './theme'
import { ThemeProvider } from '@emotion/react'
import { Topbar } from './components/topbar'
type AssetData = Record<string, PriceEntry> & OriginalAssetData

const ENDPOINT = 'http://localhost:5000'
const App = () => {
  const [theme, colorMode] = useMode()
  const colors = tokens(theme.palette.mode)
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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Box sx={{ mt: '20px', backgroundColor: colors.primary[500], flexDirection: 'column', display: 'flex', height: '150vh', width: '100%', justifyContent: 'center', overflow: 'auto', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', pt: '400px' }}>
          {/* Iterar sobre los precios de cada activo */}
          {Object.keys(prices).map((asset, index) => (
            <Book priceEntry={prices[asset]} title={asset} key={index} />
          ))}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
          <Plot data={dataYPF} title='YPF' />
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
