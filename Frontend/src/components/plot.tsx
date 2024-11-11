import { Box } from '@mui/material'
import { type PriceEntry } from '../../datos'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
export const Plot = ({ data, title }: { data: PriceEntry[], title: string }) => {
  return (
    <Box width= '500px'>
      <h1>{title}</h1>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="Timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Last" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}
