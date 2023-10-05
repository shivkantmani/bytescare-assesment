

function Products(){
    return (
        <div className="product">
            <div className="container">
                <h3>Product & Services</h3>
            <div className="row">
                <div className="col-md">
                    <img src="\images\Pre-Piracy solutions.png" className="img-fluid" alt="" />
                </div>
                
                <div className="col-md">
                    
                    <details>
                        <summary className="text-orange">Pre-piracy services</summary>
                        <p>It is a prevention phase that comes into play before publishing the content. It helps creators to prevent their original content from piracy attacks and publish authorized, encrypted, and original content. Pre-Piracy solutions include watermarking and digital rights management, evaluating existing technologies for loopholes, implementing extra measures to stop leakages within the team, etc.</p>
                        <button type="submit" className="btn btn-outline-light">Know More <img src="\images\chevron_right_black_24dp.svg" alt="" /></button>
                    </details>
                    <hr />
                    <details>
                        <summary className="text-orange">Post-piracy services</summary>
                    </details>
                    <hr />
                    <details>
                        <summary className="text-orange">Brand & Reputation Management</summary>
                    </details>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Products;