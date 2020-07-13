import React from "react";

export default class Chart extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 850,
      height: 450,
      symbolsGroups: [
        {
          name: "Indices",
          originalName: "Indices",
          symbols: [
            {
              name: "FOREXCOM:SPXUSD",
              displayName: "S&P 500",
            },
            {
              name: "FOREXCOM:NSXUSD",
              displayName: "Nasdaq 100",
            },
            {
              name: "FOREXCOM:DJI",
              displayName: "Dow 30",
            },
            {
              name: "INDEX:NKY",
              displayName: "Nikkei 225",
            },
            {
              name: "INDEX:DEU30",
              displayName: "DAX Index",
            },
            {
              name: "FOREXCOM:UKXGBP",
              displayName: "FTSE 100",
            },
          ],
        },
        {
          name: "Commodities",
          originalName: "Commodities",
          symbols: [
            {
              name: "CME_MINI:ES1!",
              displayName: "E-Mini S&P",
            },
            {
              name: "CME:6E1!",
              displayName: "Euro",
            },
            {
              name: "COMEX:GC1!",
              displayName: "Gold",
            },
            {
              name: "NYMEX:CL1!",
              displayName: "Crude Oil",
            },
            {
              name: "NYMEX:NG1!",
              displayName: "Natural Gas",
            },
          ],
        },
        {
          name: "Forex",
          originalName: "Forex",
          symbols: [
            {
              name: "FX:USDZAR",
            },
            {
              name: "FX:EURUSD",
            },
            {
              name: "FX:GBPUSD",
            },
            {
              name: "FX:USDJPY",
            },
            {
              name: "FX:USDCHF",
            },
            {
              name: "FX:AUDUSD",
            },
            {
              name: "FX:USDCAD",
            },
          ],
        },
      ],
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
    });
    document.getElementById("chart").appendChild(script);
  }

  render() {
    return (
      <div id="chart">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com"
              rel="noopener"
              target="_blank"
            >
              <span class="blue-text">Market Data</span>
            </a>{" "}
            by TradingView
          </div>
        </div>
      </div>
    );
  }
}
