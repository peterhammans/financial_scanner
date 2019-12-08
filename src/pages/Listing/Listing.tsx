import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Card } from "src/components/Card";
import { Text } from "src/components/Text";
import { Paper, Grid, Container } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import { Box } from "src/components/Box";
import { CompanySymbol, SymbolStats, Traded } from "src/types";
import IconButton from '@material-ui/core/IconButton';
import { Popper } from 'src/components/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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

interface State {
  activeSymbol: CompanySymbol | undefined;
  anchorEl: HTMLButtonElement | undefined;
}

class Listing extends React.Component<{}, State> {
  state = {
    activeSymbol: undefined,
    anchorEl: undefined
  };

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

    return (
      <Box padding="md">
        <Card>
          <Text marginBottom="lg">"TEST"</Text>
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

export default Listing;
