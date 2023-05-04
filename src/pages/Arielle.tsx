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
The Rookie of the team, Arielle debuted as a V-creator on the same day V:D0 debuted at AFA2022. Even as a rookie, Arielle does bring to the audience her angelic voice as she sings and play games such as Minecraft on stream. When it comes to singing, Arielle is always exploring a wide range of song categories and choices, bringing to her audience a surprise-filled performance each stream. If you are looking for someone with a gentle voice and the likeness of a big sister, Arielle will definitely fill that role.

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