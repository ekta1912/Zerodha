import React from "react";

function Brokerage() {
  return (
     <div className="container">
      
        
      
        <div className="row p-5 mt-5 text-center border-top ">
        <div className="col-8 p-4 ">
          <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a>
          <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"13px"}}className="text-muted">
            <li>Call & trade:
Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
<li>Digital connect notes will be sent via e-mail.</li>
<li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
<li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
<li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
<li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
          </ul>
        </div>
         
        <div className="col-4 p-4">
         <a href=""style={{textDecoration:"none"}}><h3 className="fs-5">List of Charges</h3></a>
      </div>
      </div>
    </div>
  );
}

export default Brokerage;