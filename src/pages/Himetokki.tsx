import Footers from "@/components/footers"
import Nav from "@/components/nav"
import Link from "next/link";
const Himetokki = () => {
    return ( 
            <div className="FrontPage">
     <Nav></Nav>
        
        <main className="container">

                <div className="row">
                    <article className="col-sm">
                        <figure>
                            <img className="scrolImage" 
                                 src="/Himetokki 1.png" alt=""></img>
                        </figure>
                    </article>
                    <article className="col-sm charDesTitle">
                        <h3 >Himetokki</h3>
                        <p className="charDes">
Himetokki is a Variety V-creator who does contents ranging from art to unboxing toys to playing FPS games and much more. Himetokki is never afraid of trying out new things to bring new experiences to her viewers. Being the most “Seiso” of the group, Himmetokki is a great wholesome creator that brings about entertainment for all ages. If you are looking for a fluffy and royal bunny to grace your life, Himetokki is definitely the one you should be looking for.
                        </p>
                        
                          <Link href="https://www.youtube.com/channel/UCogbKCoyjL3wHyRB0ek_h5w">  
                            <button className="button YoutubeButton">Youtube</button>
                          </Link>
                          <Link href="https://twitch.tv/himetokki">  
                            <button className="button TwitchButton">Twitch</button>
                          </Link>
                          <Link href="https://twitter.com/himetokkii">  
                            <button className="button TwitterButton">Twitter</button>
                          </Link>  
          {/* <p classNameName="col-sm charDes">
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
                                src="https://youtu.be/Rh2qAoTXjgE?autoplay=1&mute=1">
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
 
export default Himetokki;