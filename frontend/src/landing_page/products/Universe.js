import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-5">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5 ">
          <img src="/media/smallcaseLogo.png"></img>
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/streakLogo.png" style={{ width: "40%" }}></img>
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/sensibullLogo.svg"></img>
          <p className="text-muted text-small">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/zerodhaFundhouse.png" style={{ width: "60%" }}></img>
          <p className="text-muted text-small">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/goldenpiLogo.png"></img>
          <p className="text-muted text-small">Bonds and Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/dittoLogo.png" style={{ width: "30%" }}></img>
          <p className="text-muted text-small">Insurance</p>
        </div>
        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          to={"/signup"}
        >
          SignUp Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
