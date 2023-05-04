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
                            Minimal_Art is a versatile V-Artist who draws a wide variety of styles, while also commanding her own unique artstyle.She is the main artist for V:D0. She is also well versed in character design and Vtuber Model creation. She has works with corporate partners such as Audio Technica SEA to create various marketing materials. With a snappy no nonsense attitude, Minimal_Art definitely brings villainess into the spotlight. While she is obviously a Shark V-Creator, she also denies it.
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