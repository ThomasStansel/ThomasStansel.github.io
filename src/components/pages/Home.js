import '../../App.css'
import MainSection from '../MainSection'
import React from 'react'
import ExpCards from '../ExpCards'
import Cards from '../Cards'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <MainSection id="home"/>
            <ExpCards id="experience"/>
            <Cards id="projects"/>
            <Footer id="footer"/>
        </>
    )
}

export default Home;
