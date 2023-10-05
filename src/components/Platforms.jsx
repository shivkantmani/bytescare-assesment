import Cards from "./Cards";
import platform from "../platform";

function Platform(){
    return (
        <div id="platform">
            <h3><span className="text-orange">Platforms</span> We Serve</h3>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row justify-content-md-center">
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[0].img}
                                heading = {platform[0].heading}
                                />
                            </div>
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[1].img}
                                heading = {platform[1].heading}
                                />
                            </div>
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[2].img}
                                heading = {platform[2].heading}
                                />
                            </div>
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[3].img}
                                heading = {platform[3].heading}
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-md-center">
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[4].img}
                                heading = {platform[4].heading}
                                />
                            </div>
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[5].img}
                                heading = {platform[5].heading}
                                />
                            </div>
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[6].img}
                                heading = {platform[6].heading}
                                />
                            </div>
                            <div className="col-3 d-flex align-items-stretch">
                                <Cards 
                                img = {platform[7].img}
                                heading = {platform[7].heading}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform;