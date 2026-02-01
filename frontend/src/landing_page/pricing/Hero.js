import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom border-top text-center">
        <h1 className="mt-5 mb-4">Pricing</h1>
        <p className="mb-5">
          Free equity investment and flat ₹20 traday and F&O trades
        </p>
      </div>
      <div className="row text-center mt-5 ">
        <div className="col-4 p-4">
          <img src="/media/pricingEquity.svg"></img>
          <h1>Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4  p-4">
          <img src="/media/intradayTrades.svg"></img>
          <h1>Free equity delivery</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4  p-4">
          <img src="/media/pricingEquity.svg"></img>
          <h1>Free equity delivery</h1>
          <p className="text-muted">
            All direct mutual fund investments are a<br></br>bsolutely free — ₹
            0 commissions & DP <br></br>charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
