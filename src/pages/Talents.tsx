import Footers from "@/components/footers";
import Nav from "@/components/nav";

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
                            <a href="/Arielle"><img className="talent_shot" src="/Arielle Talent Shot.jpg"></img></a>
                        </figure>
                        <p>
                            The lion (Panthera leo) is a large cat of the genus Panthera
                            native to Africa and India. It has a muscular, broad-chested body;
                            short, rounded head; round ears; and a hairy tuft at the end of its tail.
                        </p>
                    </article>
                    <article className="col-sm">
                        <h3>Caturteer</h3>
                        <figure>
                            <a href="/Caturteer"><img className="talent_shot" src="/Caturteer Talent Shot.jpg"></img></a>
                        </figure>
                        <p>
                            The cat (Felis catus) is a domestic species of small carnivorous
                            mammal. It is the only domesticated species in the family Felidae
                            and is commonly referred to as the domestic cat or house cat to
                            distinguish it from the wild members of the family.
                        </p>
                    </article>
                </div>
                <div className="row">
                    <article className="col-sm">
                        <h3>Himetokki</h3>
                        <figure>
                            <a href="/Himetokki"><img className="talent_shot" src="/Himetokki Talent Shot.jpg"></img></a>
                        </figure>
                        <p>
                            Rabbits, also known as bunnies or bunny rabbits, are
                            small mammals in the family Leporidae (which also contains
                            the hares) of the order Lagomorpha (which also contains the pikas). 
                        </p>
                    </article>
                    <article className="col-sm">
                        <h3>Minimal_Art</h3>
                        <figure>
                            <a href="/Minimal_Art"><img className="talent_shot" src="/Minimal_Art Talent Shot.jpg"></img></a>
                        </figure>
                        <p>
                            Sharks are a group of elasmobranch fish characterized
                            by a cartilaginous skeleton, five to seven gill slits on
                            the sides of the head, and pectoral fins that are not fused to the head. 
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