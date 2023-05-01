import Link from 'next/link'

const Nav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand d-lg-none averLogo" href="../"><img src="/avernativelogo.png" alt=''></img></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbarToggler7"
        aria-controls="myNavbarToggler7" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbarToggler7">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <Link className="nav-link" href="/Contact">CONTACT US</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/News">NEWS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/About">ABOUT</Link>
            </li>
            <Link className="d-none d-lg-block averLogo" href="../"><img src="/avernativelogo.png" alt=''></img></Link>
            <li className="nav-item">
                <Link className="nav-link" href="/Talents">TALENTS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/Talents">MERCH</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/Partners">PARTNERS</Link>
            </li>
        </ul>
    </div>
</nav>
     );
}
 
export default Nav;