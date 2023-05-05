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
                        <img src="/LOGOs.png"  alt="" />

                </div>
               
            </section>
        </main>
       <Footers></Footers>
    </body>
     );
}
 
export default Partners;