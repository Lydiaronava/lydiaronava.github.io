import './Navigation.css'

function  Navigation() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="header-logo">Lydia Rodriguez de la Nava</h1>
                {/* <h2 className="subtitle">Reseacher in computer science applied to music</h2> */}
                <nav className="nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#publications" className="nav-link">Publications</a>
                    <a href="#teaching" className="nav-link">Teaching</a>
                    <a href="#CV" className="nav-link">CV</a>
                    <a href="#phd-thesis" className="nav-link">PhD thesis</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    )   
}

export default Navigation