import Footers from "@/components/footers";
import Nav from "@/components/nav";
import Link from "next/link";
const Partners = () => {
    return ( 
        <body className="FrontPage">
        <Nav></Nav>
        
        <main>
            <section id="About" className="About container">
                <h1>Our partners.</h1>
                <div className="partnerLogo">
                    <Link href="https://www.avermedia.com/">
                        <img src="/AVerMedia_logo_logotipo.png"  alt="" />

                    </Link>

                </div>
                   <div className="partnerLogoxp">
                    <Link href="https://www.xp-pen.com/">
                    <img src="/xp_pen_logo-2-new.png"   alt="" />
                    </Link>
                </div>
                    <div className="partnerLogoxp">
                    <Link href="https://www.xencelabs.com">
                    <img src="/e9703f5c-37b3-4fec-8d00-e2e1731502bc.jpg"   alt="" />
                    </Link>
                </div>
            </section>
        </main>
       <Footers></Footers>
    </body>
     );
}
 
export default Partners;