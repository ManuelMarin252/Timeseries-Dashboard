import { Card, CardContent, CardHeader } from '@mui/material'
import { type PriceEntry } from '../../datos'
export const Book = ({ priceEntry, title }: { priceEntry: PriceEntry, title: string }) => {
  return (
    <Card>
        <CardHeader title={title} />
        <CardContent>
          <p>Bid: {priceEntry.Bid}</p>
          <p>Ask: {priceEntry.Ask}</p>
          <p>Last: {priceEntry.Last}</p>
          <p>Timestamp: {priceEntry.Timestamp}</p>
        </CardContent>
    </Card>
  )
}
