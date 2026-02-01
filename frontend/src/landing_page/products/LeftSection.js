import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl}></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo →</a>
            <a href={learnMore} style={{ margin: "50px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/media/googlePlaybadge.svg" />
            </a>
            <a href={appStore}>
              <img src="/media/appstoreBadge.svg" style={{ margin: "50px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
