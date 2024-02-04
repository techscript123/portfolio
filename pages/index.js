import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import { Element, Link as ScrollLink, animateScroll } from 'react-scroll';
import Footer from '@/components/Footer'
import Head from 'next/head'
import Certification from '@/components/Certification'
export default function Home() {
      const scrollToDiv = (id) => {
        // Scroll to the 'yourDivId' element with smooth animation
        animateScroll.scrollTo(document.getElementById(id).offsetTop, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };

  return (
    <main
      className={` min-h-screen bg-cover bg-end`} 
    >
    <Head>
    <title>Rakhi Kumari - Teacher</title>
    <meta name="description" content="Professional Competencies: A Showcase of Teaching Proficiencies and Expertise" />
    <meta property="og:title" content="Rakhi Kumari - Teacher" />
    <meta property="og:description" content="Professional Competencies: A Showcase of Teaching Proficiencies and Expertise" />
    <meta property="og:image" content="/logo-rakhi.png" />
  </Head>
   <div id="banner"></div>
    <Header scrollToDiv={scrollToDiv} />
    
    <Banner />
    <div id="experience"><Experience /></div>
<div id="skills"></div><Skills />
<div id="certification"></div><Certification />

<div id="projects"><Projects /></div>
<div id="education"><Education /></div>
<div id="footer"><Footer scrollToDiv={scrollToDiv}/></div>

    </main>
  )
}
