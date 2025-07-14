import Contactar from '@/_components/contactar/page'
import Contact_Us from '@/_components/contactUs/page'
import Cuaderno from '@/_components/cuaderno/page'
import Destionations from '@/_components/destionations/page'
import Footer from '@/_components/footer/page'
import Frequently from '@/_components/frequently/page'
import Home1 from '@/_components/Home1/page'
import Mejor from '@/_components/major/page'
import NewsLetter from '@/_components/newsletter/page'
import Tours from '@/_components/tours/page'
import React from 'react'



export default function Home() {
  return <>

    <Home1 />
    <Tours />
    <Destionations />
    <Contact_Us />
    <Contactar />
    <Cuaderno />
    <Frequently />
    <NewsLetter />
    <Mejor />
    <Footer />
  </>
}