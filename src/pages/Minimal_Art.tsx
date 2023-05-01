import Footers from "@/components/footers"
import Nav from "@/components/nav"
const Minimal_Art = () => {
    return ( 

    <div className="FrontPage">
        <Nav></Nav>
        
        <main className="container">

                <div className="row">
                             <article className="col-sm">
                        <figure>
                            <img className="scrolImage" 
                                 src="/Minimal_Art 1.png"></img>
                        </figure>
                    </article>
                    <article className="col-sm charDesTitle">
                        <h3 >Minimal Effort</h3>
                        <p className="charDes">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        
                         <a href="https://www.youtube.com/watch?v=UIp6_0kct_U">  
                            <button className="button YoutubeButton">Youtube</button>
                          </a>
                          <a href="https://twitch.tv/minimal_art">  
                            <button className="button TwitchButton">Twitch</button>
                          </a>
                          <a href="https://twitter.com/min_imalart">  
                            <button className="button TwitterButton">Twitter</button>
                          </a>  
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