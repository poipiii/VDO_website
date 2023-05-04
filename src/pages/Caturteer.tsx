import Footers from "@/components/footers"
import Nav from "@/components/nav"
import Link from 'next/link'

const Caturteer = () => {
    return ( 
        <div className="FrontPage">
        <Nav></Nav>
        
        <main className="container">

                <div className="row">
                    <article className="col-sm">
                        <figure>
                            <img className="scrolImage" 
                                 src="/Caturteer 1.png" alt=""></img>
                        </figure>
                    </article>
                    <article className="col-sm charDesTitle">
                        <h3 >Caturteer</h3>
                        <p className="charDes">
Caturteer is a V-Creator who specialises in Live2D Rigging and Animation. She is always exploring various ways to push her live2D rigging models to the limit and adding in more functionality and ranges of movement in the models she works on. In addition, she is always exploring various forms of animation and creation such as 3D modelling, VR space creation and Inochi2D. If you are looking for a chaotic and energetic catgirl to brighten your world, Caturteer is definitely going to fill your world with it.
                        </p>
                        
                          <Link href="http://youtube.com/CaturteerChannel">  
                            <button className="button YoutubeButton">Youtube</button>
                          </Link>
                          <Link href="https://twitch.tv/caturteer">  
                            <button className="button TwitchButton">Twitch</button>
                          </Link>
                          <Link href="https://twitter.com/caturteer">  
                            <button className="button TwitterButton">Twitter</button>
                          </Link>  
              {/* <p className="col-sm charDes">
                            Geburtstag: ??? 
                        <br></br>
                            Gruppe: ???
                        <br></br>
                            Premieren: ???
                        <br></br>
                            Welche Informationen: ???
                        <br></br>
                        </p> */}
                            {/* <iframe className="col-sm" width="100%" height= "40%"
                                src="https://youtu.be/paS2rS7Cr7c?autoplay=1&mute=1">
                            </iframe> */}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </article>
                </div>
        </main>
        <Footers></Footers>
    </div>
     );
}
 
export default Caturteer;