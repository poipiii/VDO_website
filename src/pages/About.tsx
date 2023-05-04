import Footers from "@/components/footers";
import Nav from "@/components/nav";
const About = () => {
    return ( 

        <div className="FrontPage">
        <Nav></Nav>
        
        <main>
            <section id="About" className="About container">
                <h1>About</h1>
                <img src="/V_D0_logo.png" alt="" className="AboutLogo"/>
                <p>
                  V:D0 is a group of Singapore V-Creators. The group consists of Minimal Art. Himetokki, Caturteer and Arielle. Debuting at Anime Festival Asia 2022, the group comes together, bringing their own unique skill set and niches to create unique and quality content. V:D0 is also the ambassadors for 
XP-Pen.

                   </p>
                    <img src="/avernativelogo.png" alt="" className="AboutLogo"/>
                <p>
Avernative Production
Founded in 2022, Avernative Production is an SG based company focusing on empowering unique V.Creators to enhance their creations thru technology, opportunities and support, allowing creators to focus on creating their stories to tell the world.

                   </p>
                   <p>Everyone Creator, World Beyond Imagination.
</p>
            </section>
        </main>
       <Footers></Footers>
    </div>
     );
}
 
export default About;