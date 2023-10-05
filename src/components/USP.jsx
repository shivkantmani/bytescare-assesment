import Cards from "./Cards";
import uspCard from "../USPcards";


function USP(){
    return (
        <div id="usp">
            <h3><span className="text-orange">USP</span> & <span className="text-orange">Client</span> Satisfaction</h3>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {uspCard[0].img}
                        heading = {uspCard[0].heading}
                        desc = {uspCard[0].desc}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {uspCard[1].img}
                        heading = {uspCard[1].heading}
                        desc = {uspCard[1].desc}
                        />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {uspCard[2].img}
                        heading = {uspCard[2].heading}
                        desc = {uspCard[2].desc}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {uspCard[3].img}
                        heading = {uspCard[3].heading}
                        desc = {uspCard[3].desc}
                        />
                    </div>                    
                    <div className="col-md-4 d-flex align-items-stretch">
                        <Cards 
                        img = {uspCard[4].img}
                        heading = {uspCard[4].heading}
                        desc = {uspCard[4].desc}
                        />
                    </div>
                </div>
        </div>
        </div>
    )
}

export default USP;