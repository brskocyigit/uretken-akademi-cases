import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Coin from "./Coin";

function CoinList(props) {
  const { coins, query } = props;
  return (
    <TableContainer className="table">
      <Table sx={{ maxWidth: 650 }}>
        <TableHead>
          <TableRow className="table-head-row">
            <TableCell></TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>SYMBOL</TableCell>
            <TableCell>PRICE</TableCell>
            <TableCell>PRICE CHANGE 24H</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {query.query === ""
            ? coins.map((coin)=><Coin coin={coin}/>)
            : query.list.map((coin) => <Coin coin={coin} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CoinList;
