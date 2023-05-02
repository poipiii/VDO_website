import Footers from "@/components/footers";
import Nav from "@/components/nav";
import Link from "next/link";
const Talents = () => {
    return ( 
         <body className="FrontPage">
        <Nav></Nav>
        
        <main>
            <section className="FPTalents container">
                <h1>Talents</h1>
                <div className="row">
                    <article className="col-sm">
                        <h3>Arielle</h3>
                        <figure>
                            <Link href="/Arielle"><img className="talent_shot" src="/Arielle Talent Shot.jpg" alt=''></img></Link>
                        </figure>
                        <p>
                            
                        </p>
                    </article>
                    <article className="col-sm">
                        <h3>Caturteer</h3>
                        <figure>
                            <Link href="/Caturteer"><img className="talent_shot" src="/Caturteer Talent Shot.jpg" alt=''></img></Link>
                        </figure>
                        <p>
                            .
                        </p>
                    </article>
                </div>
                <div className="row">
                    <article className="col-sm">
                        <h3>Himetokki</h3>
                        <figure>
                            <Link href="/Himetokki"><img className="talent_shot" src="/Himetokki Talent Shot.jpg" alt=''></img></Link>
                        </figure>
                        <p>
                           
                        </p>
                    </article>
                    <article className="col-sm">
                        <h3>Minimal_Art</h3>
                        <figure>
                            <Link href="/Minimal_Art"><img className="talent_shot" src="/Minimal_Art Talent Shot.jpg" alt=''></img></Link>
                        </figure>
                        <p>
                           
                        </p>
                    </article>
                </div>
            </section>
        </main>
                <Footers></Footers>
    </body>
     );
}
 
export default Talents;