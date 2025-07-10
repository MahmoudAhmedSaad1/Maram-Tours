import React from 'react'

import Home1 from '@/app/Home1/page'
import Destionations from '../destionations/page'
import Contact_Us from '../contactUs/page'
import Contactar from '../contactar/page'
import Frequently from '../frequently/page'
import Cuaderno from '../cuaderno/page'
import Tours from '../tours/page'
import Footer from '../footer/page'
import NewsLetter from '../newsletter/page'
import Mejor from '../major/page'

export default function Layout() {
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
