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
            </section>
        </main>
       <Footers></Footers>
    </body>
     );
}
 
export default Partners;