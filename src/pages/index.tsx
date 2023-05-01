import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     
    <div className="FrontPage">      
        <main>
            <section className="FPBanner">
                <img src="@/images/Banner_Pic_1.jpg"></img>
            </section>
            <section id="About" className="About container">
                <h1>About</h1>
                <p>jugemu jugemu go ko no surikire kaijyari no unraimatsu fuuraimatsu mizumatsu 
                   kuuneru tokoro ni sumu tokoro yaburakoji no burakiji paipo paipo paipo no
                   shuuringan no shuuringan no guurindai guurindai no ponpokopii no ponpokonaa
                   no choukyuumei no chousuke
                   </p>
            </section>
            <section className="FPTalents container">
                <h1>Talents</h1>
                <div className="row">
                    <article className="col-sm">
                        <h3>Arielle</h3>
                        <figure>
                            <a href="../Arielle"><img className="talent_shot" src="@/images/Arielle Talent Shot.jpg"></img></a>
                        </figure>

                    </article>
                    <article className="col-sm">
                        <h3>Caturteer</h3>
                        <figure>
                            <a href="../Caturteer"><img className="talent_shot" src="@/images/Caturteer Talent Shot.jpg" ></img></a>
                        </figure>

                    </article>
                </div>
                <div className="row">
                    <article className="col-sm">
                        <h3>Himetokki</h3>
                        <figure>
                            <a href="../Himetokki"><img className="talent_shot" src="@/images/Himetokki Talent Shot.jpg"></img></a>
                        </figure>

                    </article>
                    <article className="col-sm">
                        <h3>Minimal_Art</h3>
                        <figure>
                            <a href="../Minimal_Art"><img className="talent_shot" src="../images/Minimal_Art Talent Shot.jpg"></img></a>
                        </figure>
                    </article>
                </div>
            </section>
        </main>   
    </div>
  
  )
}
