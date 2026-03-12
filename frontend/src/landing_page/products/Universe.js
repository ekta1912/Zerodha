import React from "react";

function Universe() {
  return (
    <div className="container universe mt-5">

      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="row text-center">

        <div className="col-4 p-4">
          <img src="/media/smallcaselogo.png" className="universe-img" />
          <p className="text-muted small">
            Thematic investing platform
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/media/sensibullLogo.svg" className="universe-img"/>
          <p className="text-muted small">
            Options trading platform that lets you create strategies,
            analyze positions, and examine data points like open interest,
            FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-4">

  <div className="logo-box">
    <img src="/media/download.svg" className="universe-img"/>
  </div>

  <p className="text-muted small">
    Investment research platform that offers detailed insights on
    stocks, sectors, supply chains, and more.
  </p>

</div>

        <div className="col-4 p-4">
          <img src="/media/streakLogo.png" className="universe-img"/>
          <p className="text-muted small">
            Systematic trading platform that allows you to create and
            backtest strategies without coding
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/media/zerodhaFundhouse.png" className="universe-img"/>
          <p className="text-muted small">
            Our asset management venture that is creating simple and
            transparent index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="/media/dittoLogo.png" className="universe-img"/>
          <p className="text-muted small">
            Personalized advice on life and health insurance.
            No spam and no mis-selling.
          </p>
        </div>
<button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;