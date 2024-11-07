import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box } from '@mui/material'
import { Book } from './components/book'
import { data } from '../datos'
import { type PriceEntry } from '../datos'
import { Plot } from './components/plot'
function App () {
  const dataYPF: PriceEntry = data.YPF.at(-1) ?? data.YPF[0]
  const dataSP500: PriceEntry = data.SP500.at(-1) ?? data.SP500[0]
  const dataWTI: PriceEntry = data.WTI.at(-1) ?? data.WTI[0]
  const dataSOY: PriceEntry = data.SOY.at(-1) ?? data.SOY[0]
  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <h1>hola</h1>
    <Book priceEntry={dataYPF} title='YPF'></Book>
    <Book priceEntry={dataSP500} title='SP500'></Book>
    <Book priceEntry={dataWTI} title='WTI'></Book>
    <Book priceEntry={dataSOY} title='SOY'></Book>
    <Plot data={data.YPF} title='YPF'></Plot>
    </Box>
  )
}

export default App
