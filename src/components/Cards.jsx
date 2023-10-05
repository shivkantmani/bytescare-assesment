

function Cards(props){
    if(props.logoURL){
        return(
            <div className="card-container" >
            <img src={props.img} className="img-circle" alt="..." />
            <div className="sasa" ><img src={props.logoURL} alt="" /></div>            
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">{props.desc}</p>
                <p>{props.name}</p>
            </div>
        </div>
        )        
    }
    return (
        <div className="card-container" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="sasa" ><img src={props.logoURL} alt="" /></div>            
            <div className="card-body">
                <h5 className="card-title">{props.heading}</h5>
                <p className="card-text">{props.desc}</p>
                <p>{props.name}</p>
            </div>
        </div>       
    )
}

export default Cards;