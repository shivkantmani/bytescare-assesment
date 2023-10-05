import Cards from "./Cards";
import aboutCard from "../aboutCard";


function About(){
    return (
        <div className="about-container">
            <div className="container">
            <div className="about">
                <h5>Why BYTESCARE?</h5>
                <h3>The right choice to increase your <span className="text-orange">contents security.</span></h3>
                <p>Bytescare provides a variety of fast, economical, robust, accurate, scalable, and transparent AI/ML empowered solutions that assist our customers in protecting their content from any copyright infringement and also from any pre/post piracy damages. Our smart solutions differentiate us from the other competitors in the Market.</p>
                <p>We anticipate our customers to easily protect their content and brands from any damage and thefts with our user-friendly, reliable, and 24*7 available products and services including Pre-Piracy Solutions, Post-Piracy Solutions, and Brand & Reputation Management tools.</p>
            </div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {aboutCard[0].img}
                        heading = {aboutCard[0].heading}
                        desc = {aboutCard[0].desc}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {aboutCard[1].img}
                        heading = {aboutCard[1].heading}
                        desc = {aboutCard[1].desc}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {aboutCard[2].img}
                        heading = {aboutCard[2].heading}
                        desc = {aboutCard[2].desc}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {aboutCard[3].img}
                        heading = {aboutCard[3].heading}
                        desc = {aboutCard[3].desc}
                        />
                    </div>                    
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {aboutCard[4].img}
                        heading = {aboutCard[4].heading}
                        desc = {aboutCard[4].desc}
                        />
                    </div>
                </div>
        </div>
        </div>
        </div>
        
    )
}

export default About;