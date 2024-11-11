export const data: AssetDatas = {
  WTI: [
    { Bid: 69.90, Ask: 70.10, Last: 70.00, Timestamp: '2024-11-05 15:04:05.000' },
    { Bid: 69.95, Ask: 70.15, Last: 70.05, Timestamp: '2024-11-05 15:04:05.200' },
    { Bid: 69.80, Ask: 70.00, Last: 69.90, Timestamp: '2024-11-05 15:04:05.400' },
    { Bid: 69.85, Ask: 70.05, Last: 69.95, Timestamp: '2024-11-05 15:04:05.600' }
  ],
  SOY: [
    { Bid: 994.75, Ask: 995.25, Last: 995.00, Timestamp: '2024-11-05 15:04:05.000' },
    { Bid: 994.50, Ask: 995.00, Last: 994.75, Timestamp: '2024-11-05 15:04:05.200' },
    { Bid: 995.00, Ask: 995.50, Last: 995.25, Timestamp: '2024-11-05 15:04:05.400' },
    { Bid: 994.75, Ask: 995.25, Last: 995.00, Timestamp: '2024-11-05 15:04:05.600' }
  ],
  YPF: [
    { Bid: 24.50, Ask: 25.50, Last: 25.00, Timestamp: '2024-11-05 15:04:05.000' },
    { Bid: 24.75, Ask: 25.75, Last: 25.25, Timestamp: '2024-11-05 15:04:05.200' },
    { Bid: 24.60, Ask: 25.60, Last: 25.10, Timestamp: '2024-11-05 15:04:05.400' },
    { Bid: 24.65, Ask: 25.65, Last: 25.15, Timestamp: '2024-11-05 15:04:05.600' }
  ],
  SP500: [
    { Bid: 5695, Ask: 5705, Last: 5700, Timestamp: '2024-11-05 15:04:05.000' },
    { Bid: 5697, Ask: 5707, Last: 5702, Timestamp: '2024-11-05 15:04:05.200' },
    { Bid: 5690, Ask: 5700, Last: 5695, Timestamp: '2024-11-05 15:04:05.400' },
    { Bid: 5692, Ask: 5702, Last: 5697, Timestamp: '2024-11-05 15:04:05.600' }
  ]
}
// Define the structure for each price update entry
export interface PriceEntry {
  Bid: number
  Ask: number
  Last: number
  Timestamp: string
}

// Define the structure for each asset type containing multiple price entries
export interface AssetData {
  WTI: PriceEntry
  SOY: PriceEntry
  YPF: PriceEntry
  SP500: PriceEntry
}
export interface AssetDatas {
  WTI: PriceEntry[]
  SOY: PriceEntry[]
  YPF: PriceEntry[]
  SP500: PriceEntry[]
}
