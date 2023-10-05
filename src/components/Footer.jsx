

const currentYear = new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="\images\bytescarelogo (1).svg" alt="" />
                                <p>2055 Limestone Rd, STE 200-C, Wilmington, New Castle, DE 19808</p>
                                <p>Phone: +91 8756-621035</p>
                                <p>Email: contact@bytescare.com</p>
                            </div>
                            <div className="col-md-4">
                                
                                <ul className="list-unstyled">
                                    <p>Useful Links:</p>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Product & Services</li>
                                    <li>Blogs</li>
                                    <li>FAQ's</li>
                                    <li>contact Us</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="list-unstyled">
                                    <p>Key Services</p>
                                    <li>Web Monitoring</li>
                                    <li>E-commerce Monitoring</li>
                                    <li>Content security Audit</li>
                                    <li>Text maker</li>
                                    <li>Image Identifier</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <p>Join Our community</p>
                        <p>Stay up to date with our products and offerings</p>
                        <div className="custom-search">
                        <input type="text" className="custom-search-input" placeholder="Enter email address" />
                        <button className="custom-search-botton" type="submit">Join Us</button>  
                        </div>
                    </div>
                </div>
            </div>
            <p className="copyright">© Copyright {currentYear} Bytescare Inc. All rights reserved .</p>
        </footer>
    )
}
export default Footer;