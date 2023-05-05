import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Footers from '@/components/footers'
import Link from 'next/link'
import BasicExample from '@/components/Nav2.0'

export default function Home() {
  return (
     
    <div className="FrontPage">     
        <Nav></Nav>
        <main>
            <section className="FPBanner">
                <img src="/Banner_Pic_1.jpg" alt=""></img>
            </section>
            <section id="About" className="About container">
                <h1>Imagination is the first step to more</h1>
               
            </section>
            <section className="FPTalents container">
                <h1>Talents</h1>
                <div className="row">
                    <article className="col-sm">
                        <h3>Arielle</h3>
                        <figure>
                            <Link href="/Arielle"><img className="talent_shot" src="/Arielle Talent Shot.jpg" alt=""></img></Link>
                        </figure>

                    </article>
                    <article className="col-sm">
                        <h3>Caturteer</h3>
                        <figure>
                            <Link href="/Caturteer"><img className="talent_shot" src="/Caturteer Talent Shot.jpg" alt=""></img></Link>
                        </figure>

                    </article>
                </div>
                <div className="row">
                    <article className="col-sm">
                        <h3>Himetokki</h3>
                        <figure>
                            <Link href="/Himetokki"><img className="talent_shot" src="/Himetokki Talent Shot.jpg" alt=""></img></Link>
                        </figure>

                    </article>
                    <article className="col-sm">
                        <h3>Minimal_Art</h3>
                        <figure>
                            <Link href="/Minimal_Art"><img className="talent_shot" src="/Minimal_Art Talent Shot.jpg" alt=""></img></Link>
                        </figure>
                    </article>
                </div>
            </section>
        </main>   
        <Footers></Footers>
    </div>
  
  )
}
