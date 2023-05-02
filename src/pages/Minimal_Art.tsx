import Footers from "@/components/footers"
import Nav from "@/components/nav"
import Link from 'next/link'

const Minimal_Art = () => {
    return ( 

    <div className="FrontPage">
        <Nav></Nav>
        
        <main className="container">

                <div className="row">
                             <article className="col-sm">
                        <figure>
                            <img className="scrolImage" 
                                 src="/Minimal_Art 1.png" alt=""></img>
                        </figure>
                    </article>
                    <article className="col-sm charDesTitle">
                        <h3 >Minimal_Art</h3>
                        <p className="charDes">
                            Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head.
                        </p>
                        
                         {/* <Link href="https://www.youtube.com/watch?v=UIp6_0kct_U">  
                            <button className="button YoutubeButton">Youtube</button>
                          </Link> */}
                          <Link href="https://twitch.tv/minimal_art">  
                            <button className="button TwitchButton">Twitch</button>
                          </Link>
                          <Link href="https://twitter.com/min_imalart">  
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
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1">
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
 
export default Minimal_Art;