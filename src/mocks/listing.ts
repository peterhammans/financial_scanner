import { SymbolStats } from "src/pages/Listing/redux/types";

const mock: { items: SymbolStats[] } = {
  items: [
    {
      symbol: 'AMD',
      avgPosition: 1,
      volatility: 1,
      currentTrend: 1,
      currentSell: 1,
      currentBuy: 1
    },
    {
      symbol: 'MA',
      avgPosition: 1,
      volatility: 1,
      currentTrend: 1,
      currentSell: 1,
      currentBuy: 1
    }
  ]
};

export default mock;