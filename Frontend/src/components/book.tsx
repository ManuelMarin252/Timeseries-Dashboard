import { Box, Card } from '@mui/material'
import { type PriceEntry } from '../../datos'
export const Book = ({ priceEntry, title }: { priceEntry: PriceEntry, title: string }) => {
  return (
    <Card>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 1 }}>
        <h2>{title}</h2>
        <p>Bid: {priceEntry.Bid}</p>
        <p>Ask: {priceEntry.Ask}</p>
        <p>Last: {priceEntry.Last}</p>
        <p>Timestamp: {priceEntry.Timestamp}</p>
      </Box>
    </Card>
  )
}
