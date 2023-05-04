import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

function Nav() {
  return (
    <Navbar bg="light" expand="lg" className='navbar navbar-expand-lg navbar-light bg-light'>
        <Navbar.Brand href="/" className='navbar-brand averLogo d-lg-none' >
        <img src="/avernativelogo.png" alt=''>
        </img>
        </Navbar.Brand>
        <Navbar.Toggle  className="navbar-toggler"  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className='navbar-nav mx-auto'>
                <li className='nav-item'>
                <Link className="nav-link" href="/Contact">CONTACT US</Link>
                </li>
                    <li className='nav-item'>
                <Link className="nav-link" href="/News">NEWS</Link>
                </li>
                    <li className='nav-item'>
                <Link className="nav-link" href="/About">ABOUT</Link>
                </li>
                    <li className=''>
                    <Link href="/" className='d-none d-lg-block averLogo'>
                        <img src="/avernativelogo.png" alt=''></img>
                    </Link>
                </li>
                    <li className='nav-item'>
                <Link className="nav-link" href="/Talents">TALENTS</Link>
                </li>
                    <li className='nav-item'>
                <Link className="nav-link" href="/Merch">MERCH</Link>
                </li>
                    <li className='nav-item'>
                <Link className="nav-link" href="/Partners">PARTNERS</Link>
                </li>

            
    
           
          </ul>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;