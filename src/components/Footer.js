import React from 'react';

const numbers =[
    {who:"West Hollywood", number:"(323) 221-1107"},
    {who:"Beverly Hills", number: "(310) 202-5428"},
    {who:"Pasadena", number: "(626) 296-2664"},
    {who:"West Hills", number:"(805) 531-5083"},
    {who:"Los Angeles", number:"(213) 389-4381"}
]
export class Footer extends React.Component {
    render(){
        return (
        <div className="footer">
            <div className="footer1">
                <div className="footer2">
                    <h3><span>C</span>HERRY Hours </h3>
                        <div className="cherryHours">
                            <div className="cherryHours2">
                                <p>We are open 24/7</p>
                                <ul>
                                    <li>Nights! Absolutely No Extra Charge</li>
                                    <li>Weekends! Absolutely No Extra Charge</li>
                                    <li>Holidays! Absolutely No Extra Charge</li>
                                </ul>
                                <p>We're in social networks: 
                                    <a href="#" className="facebook"></a> 
                                    <a href="#" className="twitter"></a>
                                    <a href="#" className="linkedin"></a> 
                                </p>
                            
                            </div>
                        </div>
                </div>
                <div className="footer2">
                    <h3>Local <span>C</span>HERRY </h3>
                   <div className="localCherry">
                        <div className="localCherry2">         
                            <ul>
                                {numbers.map((num, id)=>{
                                    return <li keys={id}>{num.who}<a href={'tel:+' + num.number.replace(/[^0-9]/g, "")}> {num.number}</a></li>
                                })}
                            </ul>
                            <p>Call Us Toll Free <a href="tel:+18002870919">1-800-287-0919</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer2">
                    <h3>Our Los Angeles Location</h3>
                    <div className="ourLocation">
                        <div className="ourLocation2">
                            <p>Steve Smith</p>
                            <p>Hi-Tech Cherry Company</p>
                            <a href="mailto:info@cherrycompany.com">info@cherrycompany.com</a>
                            <p>5104 W. Washington Blvd</p>
                            <p>Los Angeles , CA , 90016 United States</p>
                            <a href="tel:+8002870919" className="tel">(800) 287-0919</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}