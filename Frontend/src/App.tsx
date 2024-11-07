import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Box } from '@mui/material'
import { Book } from './components/book'
import { data } from '../datos'
import { type PriceEntry } from '../datos'

function App () {
  const dataYPF: PriceEntry = data.YPF.at(-1) ?? data.YPF[0]
  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
    <h1>hola</h1>
    <Book Bid={dataYPF.Bid} Ask={dataYPF.Ask} Last={dataYPF.Last} Timestamp={dataYPF.Timestamp}></Book>
    </Box>
  )
}

export default App
