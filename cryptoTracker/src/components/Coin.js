import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function Coin(props) {

  const {coin} = props;
  return (
    
      <TableRow
        key={coin.name}
        className="table-row-item"
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell>
          <img alt="crypto-coin" src={coin.image} />
        </TableCell>
        <TableCell>
          <span className="coinName">{coin.name}</span>
        </TableCell>
        <TableCell>{coin.symbol}</TableCell>
        <TableCell>${coin.current_price}</TableCell>
        <TableCell>${coin.price_change_24h}</TableCell>
      </TableRow>
    
  );
}

export default Coin;
