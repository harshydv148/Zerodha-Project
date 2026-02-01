import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5" }}
            className="text-muted f-6"
          >
            <li>
              Call and Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order
            </li>
            <li>Digital contract notes will be sent</li>
            <li>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </li>
            <li>
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </li>
            <li>
              Call and Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order
            </li>
            <li>
              Call and Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
