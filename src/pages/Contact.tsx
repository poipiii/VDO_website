import Footers from "@/components/footers";
import Nav from "@/components/nav";

const Contact = () => {
    return ( 
         <div className="FrontPage">
        <Nav></Nav>
        <main>
            <section id="About" className="About container">
                <h1>Contact</h1>
                <p>For business enquiries, please contact us at 
                </p>
                   <a href="mailto:vdogroupofficial@gmail.com">vdogroupofficial@gmail.com</a>
            </section>
        </main>
        <Footers></Footers>
    </div>
     );
}
 
export default Contact;