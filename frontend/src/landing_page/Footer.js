import React from 'react';
function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/logo.svg'style={{width:"50%"}}></img>
                    <p>&copy;2010 - 2026, Zerodha Broking Ltd.All rights reserved. </p>
                </div>
                <div className='col'>
                    <p>Company</p>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}> About</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Philosophy</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Press & media</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Careers</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}> Zerodha Cares (CSR)</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Zerodha.tech</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}> Open source</a><br></br>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}> Contact us</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Support portal</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>How to file a complaint? </a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Status of your complaints</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}>Bulletin</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Circular</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}> Z-Connect blog</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}>Downloads</a><br></br>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href="" className='text-muted' style={{ textDecoration: "none" }}> Open demat account</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Minor demat account</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>NRI demat account </a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Commodity</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}>Dematerialisation</a><br></br>
                    <a href=""className='text-muted' style={{ textDecoration: "none" }}>Fund transfer</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}> MTF</a><br></br>
                   <a href=""className='text-muted' style={{ textDecoration: "none" }}>Referral program</a><br></br>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p>
                Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p>
                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.

*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
            </p>
        </div>
        </div>
        </footer>
     );
}

export default Footer;