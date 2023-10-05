

function NavElements(props){
    if(props.name === "Login"){
        return(
            <li className="nav-item ms-4 me-1">
                <a className="nav-link text-warning" href="#">{props.name}</a>
            </li>
        )
    }
    return (
        <li className="nav-item ms-4 me-1">
            <a className="nav-link" href="#">{props.name}</a>
        </li>
    )
};

function Header(){
    return (
        <header className="container">
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
                <div className="container-fluid ms-5 me-5">
                    <a className="navbar-brand" href="#"><img src="\images\bytescarelogo.svg" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>                    
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">                            
                            <NavElements name="Home" />
                            <NavElements name="About" />
                            <li className="nav-item dropdown ms-4 me-1">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product & Service
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Pre-piracy services</a></li>
                                    <li><a class="dropdown-item" href="#">Post-piracy services</a></li>
                                    <li><a class="dropdown-item" href="#">Brand & Reputation Management</a></li>
                                </ul>
                            </li>
                            <NavElements name="Blogs" />
                            <NavElements name="FAQ's" />                        
                            <NavElements name="Contact" />
                            <NavElements name="Login"/>
                        </ul>
                        <button className="ms-5 me-3" type="submit">Request Demo</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;