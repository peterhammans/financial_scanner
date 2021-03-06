import React from "react";
import { Card } from "src/components/Card";
import { Text } from "src/components/Text";
import { Box } from "src/components/Box";
import { Loading } from "src/components/Loading";
import { CompanySymbol, Traded, SagaCallbacks } from "src/types";
import { SymbolStats } from "./redux/types";
import { Table, Tr, Td, Th } from "src/components/Table";
import * as actions from './redux/actions';
import * as selectors from './redux/selectors';
import { connect } from 'react-redux';
import { AppState } from "src/store/types";

function createSymbol(
  symbol: CompanySymbol,
  avgPosition: number,
  volatility: number,
  currentTrend: number,
  currentSell: number,
  currentBuy: number,
  traded?: Traded
): SymbolStats {
  if (traded) {
    return {
      symbol,
      avgPosition,
      volatility,
      currentTrend,
      currentSell,
      currentBuy,
      traded
    };
  }
  return {
    symbol,
    avgPosition,
    volatility,
    currentTrend,
    currentSell,
    currentBuy
  };
}

const rows: SymbolStats[] = [
  createSymbol("AMD", 159, 6.0, 24, 10, 10, { boughtAt: 10, quantity: 5000 }),
  createSymbol("MA", 237, 9.0, 37, 10, 10)
];

interface RequiredProps {
  getSymbols(payload: SagaCallbacks): void;
  list: SymbolStats[];
}

interface State {
  activeSymbol: CompanySymbol | undefined;
  anchorEl: HTMLButtonElement | undefined;
}

export type ListingProps = RequiredProps;

class Listing extends React.Component<ListingProps, State> {
  state = {
    activeSymbol: undefined,
    anchorEl: undefined
  };

  componentDidMount() {
    const { getSymbols } = this.props;
    getSymbols({

    });
  }

  handleShowMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (companySymbol: CompanySymbol) => {
    this.setState({
      activeSymbol: companySymbol,
      anchorEl: e.currentTarget
    });
  }

  handleHideMenu = () => {
    this.setState({
      activeSymbol: undefined,
      anchorEl: undefined
    });
  }

  render() {
    const { activeSymbol, anchorEl } = this.state;
    const { list } = this.props;
    console.log('LIST', list);
    return (
      <Box padding="md">
        <Card fullWidth>
          <Table summary="Default table">
            <Tr>
              <Th><Text tagName="span">Symbol</Text></Th>
              <Th><Text tagName="span">Avg position</Text></Th>
              <Th><Text tagName="span">Volatility</Text></Th>
              <Th><Text tagName="span">Trend</Text></Th>
              <Th><Text tagName="span">Sell</Text></Th>
              <Th><Text tagName="span">Buy</Text></Th>
            </Tr>
            {
              list.map((symbolStats: SymbolStats) => {
                const { symbol, avgPosition, volatility, currentTrend, currentSell, currentBuy } = symbolStats;
                return (
                  <Tr>
                    <Td><Text tagName="span">{symbol}</Text></Td>
                    <Td><Text tagName="span">{avgPosition}</Text></Td>
                    <Td><Text tagName="span">{volatility}</Text></Td>
                    <Td><Text tagName="span">{currentTrend}</Text></Td>
                    <Td><Text tagName="span">{currentSell}</Text></Td>
                    <Td><Text tagName="span">{currentBuy}</Text></Td>
                  </Tr>
                );
              })
            }
          </Table>
          {
            !list.length && (
              <Box alignItems="center" justifyContent="center" padding="3xl">
                <Loading />
              </Box>
            )
          }
        </Card>
      </Box>
    );
  
    // return (
      // <Container>
      //   {anchorEl && <Popper
      //     onClickOut={this.handleHideMenu}
      //     open={!!activeSymbol}
      //     placement="bottom"
      //     disablePortal={false}
      //     anchorEl={anchorEl}
      //     modifiers={{
      //       flip: {
      //         enabled: true
      //       },
      //       preventOverflow: {
      //         enabled: true,
      //         boundariesElement: 'scrollParent'
      //       },
      //       arrow: {
      //         enabled: true
      //       },
      //     }}
      //     transition
      //   >
      //     <Card>
      //       <List component="nav" aria-label="main mailbox folders">
      //         <ListItem button>
      //           <Text>Trade</Text>
      //         </ListItem>
      //         <ListItem button>
      //           <Text>Trade (fake)</Text>
      //         </ListItem>
      //       </List>
      //     </Card>
      //   </Popper>}
      //   <Card>
      //     <Text>Indicate if a symbol is new and bring to top</Text>
      //   </Card>
      //   <Grid container spacing={3}>
      //     <Grid item xs={1} />
      //     <Grid item xs={10}>
      //       <Paper>
      //         <Table aria-label="simple table">
      //           <TableHead>
      //             <TableRow>
      //               <TableCell>Symbol</TableCell>
      //               <TableCell align="right">
      //                 <Box
      //                   display="flex"
      //                   alignItems="center"
      //                   justifyContent="center"
      //                 >
      //                   <Text marginRight="xs">Avg. Position</Text>
      //                   <Tooltip
      //                     title={
      //                       <div>
      //                         <Text>
      //                           Avg position = buy / sell / hold rating. Should
      //                           be weighted by:
      //                         </Text>
      //                         <ul>
      //                           <li>
      //                             <Text>
      //                               Total number of analysts (represents a more
      //                               accurate sentiment)
      //                             </Text>
      //                           </li>
      //                           <li>
      //                             <Text>Average position</Text>
      //                           </li>
      //                         </ul>
      //                       </div>
      //                     }
      //                   >
      //                     <InfoIcon fontSize="small" />
      //                   </Tooltip>
      //                 </Box>
      //               </TableCell>
      //               <TableCell align="right">
      //                 <Box
      //                   display="flex"
      //                   alignItems="center"
      //                   justifyContent="center"
      //                 >
      //                   <Text marginRight="xs">Current trend</Text>
      //                   <Tooltip
      //                     title={
      //                       <Text>
      //                         Current trend = same as chart. Bullish to bearish
      //                       </Text>
      //                     }
      //                   >
      //                     <InfoIcon fontSize="small" />
      //                   </Tooltip>
      //                 </Box>
      //               </TableCell>
      //               <TableCell align="right">
      //                 <Box
      //                   display="flex"
      //                   alignItems="center"
      //                   justifyContent="center"
      //                 >
      //                   <Text marginRight="xs">Volatility</Text>
      //                   <Tooltip
      //                     title={
      //                       <Text>Volatility = volatility by time period</Text>
      //                     }
      //                   >
      //                     <InfoIcon fontSize="small" />
      //                   </Tooltip>
      //                 </Box>
      //               </TableCell>
      //               <TableCell align="right">
      //                 <Box
      //                   display="flex"
      //                   alignItems="center"
      //                   justifyContent="center"
      //                 >
      //                   <Text marginRight="xs">Trade</Text>
      //                   <Tooltip
      //                     title={
      //                       <Text>
      //                         Trade = field to dialog buy at price then
      //                       </Text>
      //                     }
      //                   >
      //                     <InfoIcon fontSize="small" />
      //                   </Tooltip>
      //                 </Box>
      //               </TableCell>
      //               <TableCell />
      //             </TableRow>
      //           </TableHead>
      //           <TableBody>
      //             {rows.map((row: SymbolStats) => {
      //               const {
      //                 symbol,
      //                 avgPosition,
      //                 currentTrend,
      //                 volatility,
      //                 traded
      //               } = row;
      //               const menu = React.createRef<HTMLElement>();

      //               return (
      //                 <TableRow key={symbol}>
      //                   <TableCell>{symbol}</TableCell>
      //                   <TableCell align="right">{avgPosition}</TableCell>
      //                   <TableCell align="right">{currentTrend}</TableCell>
      //                   <TableCell align="right">{volatility}</TableCell>
      //                   <TableCell align="right">
      //                     {traded ? traded.boughtAt * traded.quantity : ""}
      //                   </TableCell>
      //                   <TableCell align="right">
      //                     <IconButton size="small" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { this.handleShowMenu(e)(symbol) }}>
      //                       <MoreVertIcon fontSize="small" />
      //                     </IconButton>
      //                   </TableCell>
      //                 </TableRow>
      //               );
      //             })}
      //           </TableBody>
      //         </Table>
      //       </Paper>
      //     </Grid>
      //      
      //     <Grid item xs={1} />
      //   </Grid>
      //</Container>
    // );
  }
}

export const mapStateToProps = (state: AppState) => ({
  list: selectors.selectSymbolsList(state)
});

export const mapDispatchToProps = {
  getSymbols: actions.getSymbols.request
};

export { Listing as UnwrappedManagement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);
