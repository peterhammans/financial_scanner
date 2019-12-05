import React from 'react';
import logo from './logo.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import { Text } from './components/Text';
import { CompanySymbol, SymbolStats, Traded } from './types';
import { ResponsiveThemeOptions } from './design-system/types';
import { Paper, Grid, Container } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import { Box } from 'src/components/Box';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    responsive: ResponsiveThemeOptions;
  }

  interface ThemeOptions {
    responsive: ResponsiveThemeOptions;
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Noto Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  palette: {
    type: 'dark'
  },
  responsive: {
    typography: {
      sizes: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
        '2xl': 20,
        '3xl': 22
      }
    },
    spacings: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      '2xl': 6,
      '3xl': 7,
      '0': 0
    }
  }
});

function createSymbol(symbol: CompanySymbol, avgPosition: number, volatility: number, currentTrend: number, currentSell: number, currentBuy: number, traded?: Traded): SymbolStats {
  if (traded) {
    return { symbol, avgPosition, volatility, currentTrend, currentSell, currentBuy, traded };
  }
  return { symbol, avgPosition, volatility, currentTrend, currentSell, currentBuy };
}

const rows: SymbolStats[] = [
  createSymbol('AMD', 159, 6.0, 24, 10, 10, { boughtAt: 10, quantity: 5000 }),
  createSymbol('MA', 237, 9.0, 37, 10, 10),
];

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Card>
        <Text>Indicate if a symbol is new and bring to top</Text>
      </Card>
      <Grid container spacing={3}>
      <Grid item xs={1}/>
        <Grid item xs={10}>
          <Paper><Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Text marginRight="xs">Avg. Position</Text>
                  <Tooltip title={
                    <div>
                      <Text>
                        Avg position = buy / sell / hold rating. Should be weighted by:
                      </Text>
                      <ul>
                        <li><Text>Total number of analysts (represents a more accurate sentiment)</Text></li>
                        <li><Text>Average position</Text></li>
                      </ul>
                    </div>
                    }
                  >
                    <InfoIcon fontSize="small" />
                  </Tooltip>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Text marginRight="xs">Current trend</Text>
                  <Tooltip title={
                    <Text>
                      Current trend = same as chart. Bullish to bearish
                    </Text>
                  }>
                    <InfoIcon fontSize="small" />
                  </Tooltip>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Text marginRight="xs">Volatility</Text>
                  <Tooltip title={
                    <Text>
                      Volatility = volatility by time period
                    </Text>
                  }>
                    <InfoIcon fontSize="small" />
                  </Tooltip>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Text marginRight="xs">Trade</Text>
                  <Tooltip title={
                    <Text>
                      Trade = field to dialog buy at price then
                    </Text>
                  }>
                    <InfoIcon fontSize="small" />
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: SymbolStats) => {
              const { symbol, avgPosition, currentTrend, volatility, traded } = row;

              return (
                <TableRow key={symbol}>
                  <TableCell>
                    {symbol}
                  </TableCell>
                  <TableCell align="right">{avgPosition}</TableCell>
                  <TableCell align="right">{currentTrend}</TableCell>
                  <TableCell align="right">{volatility}</TableCell>
                  <TableCell align="right">{traded ? traded.boughtAt * traded.quantity : ''}</TableCell>
                  <TableCell align="right"><MoreVertIcon /></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table></Paper>
        </Grid> 
        <Grid item xs={1}/>
      </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
