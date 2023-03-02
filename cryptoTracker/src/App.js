import React, { useState, useEffect } from "react";
import "./App.css";
import CoinList from "./components/CoinList";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [coins, setCoins] = useState([]);

  const [end, setEnd] = useState(10);

  const [count] = useState(10);

  const [query, setQuery] = useState({
    query: "",
    list: [],
  });

  const [keyword, setKeyword] = useState("");

  const fetchCoins = async () => {
    try {
      const fetchedCoins = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        {
          method: "GET",
          withCredentials: true,
          crossorigin: true,
          mode: "cors",
        }
      ).then((res) => res.json());

      setCoins(getCoins(fetchedCoins));
    } catch (error) {
      console.log("API doesn't response!");
    }
  };

  const getCoins = (coins) => {
    return coins.slice(0, end);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCoins();
    }, 500);
  });

  const updateKeyword = (keyword) => {
    const filtered = coins.filter((coin) => {
      return `${coin.name.toLowerCase()}`.includes(keyword.toLowerCase());
    });
    setKeyword(keyword);
    setQuery({
      list: filtered,
    });
  };

  return coins.length === 0 ? (
    <div className="loading">Loading...</div>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 50px",
        }}
      >
        <h1 style={{ color: "#fff" }}>Kripto Borsası</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 50px",
        }}
      >
        <SearchIcon style={{ color: "#fff", marginRight: "-40px" }} />
        <input
          style={{
            margin: "0 50px",
            width: "20rem",
            background: "#F0F0F0",
            border: "none",
            padding: "0.5rem",
            borderRadius: "20px",
          }}
          className="searchBar"
          key="search-bar"
          value={keyword}
          placeholder={"Search..."}
          onChange={(e) => updateKeyword(e.target.value)}
        />
      </div>

      <CoinList coins={coins} query={query} />
      <div className="coinCounter">
        <div className="counter">
          {keyword === "" ? coins.length : query.list.length}
        </div>

        {coins.length > 0 && coins.length < 100 && keyword === "" ? (
          <div className="loadMoreBtn">
            <Button
              variant="contained"
              disableElevation
              onClick={() => setEnd(end + count)}
            >
              Load More
              <ExpandMoreIcon />
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
