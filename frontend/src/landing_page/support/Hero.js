import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5" id="supportWrapper">
        <h4>Support portal</h4>
        <a href="#">track tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browser helps topics to create a ticket
          </h1>
          <input placeholder="Eg:How do I activate F&O" style={{}}></input>
          <br></br>
          <a href="#" className="mx-2">Track accoun opening</a>
          <a href="#" className="mx-2">Track segment activation</a>
          <a href="#" className="mx-2">Intraday margins</a>
          <br></br>
          <a href="#"className="mx-2">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="#">Current takeovers and Delisting - January 2024</a></li>
            <li><a href="#">Latest Intraday leverages - MTS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
