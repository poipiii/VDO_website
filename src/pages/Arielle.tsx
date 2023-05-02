import Footers from "@/components/footers"
import Nav from "@/components/nav"
import Link from 'next/link'

const Arielle = () => {
    return ( 
        <div className="FrontPage">
            <Nav></Nav>
        
        <main className="container">

                <div className="row">
                    <article className="col-sm">
                        <figure>
                            <img className="scrolImage" 
                                 src="/Arielle 1.png" alt=""></img>
                        </figure>
                    </article>
                    <article className="col-sm charDesTitle">
                        <h3 >Arielle Leo</h3>
                        <p className="charDes">
                            The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body; short, rounded head; round ears; and a hairy tuft at the end of its tail.

                        </p>
{/*                         
                         <Link href="http://youtube.com/CaturteerChannel">  
                            <button className="button YoutubeButton">Youtube</button>
                          </Link> */}
                          <Link href="https://twitch.tv/arielleleovt">  
                            <button className="button TwitchButton">Twitch</button>
                          </Link>
                          <Link href="https://twitter.com/arielleleovt">  
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
 
export default Arielle;