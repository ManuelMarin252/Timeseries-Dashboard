import { Box, Card } from '@mui/material'
import { type PriceEntry } from '../../datos'
export const Book = ({ Bid, Ask, Last, Timestamp }: PriceEntry) => {
  return (
    <Card>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
        <h2>YPF</h2>
        <p>Bid: {Bid}</p>
        <p>Ask: {Ask}</p>
        <p>Last: {Last}</p>
        <p>Timestamp: {Timestamp}</p>
      </Box>
    </Card>
  )
}
