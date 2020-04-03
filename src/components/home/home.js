// React
import React from 'react'
import styled from 'styled-components'
// Components Aplication
import Header from '../header'
import Briefcase from '../briefcase'
import Cards from '../cards'
import Services from '../services'
import Skills from '../skills'
import Footer from '../footer'

/**
 * Funtional Component to render Landing Page
 */
const Home = () => (
    <Div>
        <Header />
        <Briefcase />
        <Cards />
        <Services />
        <Skills />
        <Footer />
    </Div>
)
export default Home

/**
 * Estyled component and component class
 */
const Div = styled.div`
    background: #e6e6e6;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
        "header     header      header      header"
        "briefcase  briefcase   cards       cards"
        "services   services    services    services"
        "skills     skills      skills      skills"
        "footer     footer      footer      footer";

    .title-section {
        margin: 1rem auto;
        text-transform: capitalize;
    }

    @media screen and (max-width: 800px){
        grid-template-areas:
        "header     header      header      header"
        "briefcase  briefcase   briefcase   briefcase"
        "cards      cards       cards       cards"
        "services   services    services    services"
        "skills     skills      skills      skills"
        "footer     footer      footer      footer";
    }
`