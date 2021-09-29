// React
import React from 'react'
import styled from 'styled-components'
// Images
import imgCV from '../../assets/images/undraw_online_cv_qy9w.svg'
// Components 3rd
import { Card, CardContent } from '@material-ui/core'

import curriculum from '../../assets/files/CVINGLES.pdf'

// data from cards
const cards = [
    {
        title: 'Curriculum Vitae',
        img: imgCV
    },
]

/**
 * Funtional Component to render Cards section
 */
const Cards = () => {
    const redirect = () => window.open(curriculum, '_blank');

    return (
        <Section>
            {cards.map(({title, img}, index) => (
                <Card className="card" key={index}>
                    <CardContent className="card-content">
                        <div>
                            <img src={img} alt="CV" />
                        </div>
                        <h4>{title}</h4>
                    </CardContent>
                    <div className="action-card" onClick={redirect}>
                        <span>View...</span>
                    </div>
                </Card>
            ))}
        </Section>
    )
}
export default Cards

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: cards;
    min-height: 50vh;
    padding: 2rem;
    display: flex;
    height: 18rem;
    align-items: center;
    justify-content: center;

    .img-cards {
        width: 10rem;
    }

    .card {
        display: grid;
        grid-template-rows: auto 3rem;
        height: 220px;
        width: 12rem;
        transition: transform 200ms;

        :hover {
            transform: scale(1.03);
        }
    }

    .card:nth-child(n + 2) {
        margin-left: 2rem;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .card-content div {
        width: 7rem;
        height: 7rem;
        margin: auto;
        background: #e6e6e6;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-content img {
        width: 5rem;
        height: 5rem;
    }

    .action-card {
        background: rgba(9, 9, 121, 1);
        bottom: 0;
        width: 100%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    @media screen and (max-width: 800px){
        justify-content: center;
    }

    @media screen and (max-width: 450px){
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 10rem;

        .card {
            display: grid;
            grid-template-rows: auto 3rem;
            height: 15rem;
            width: 100%;
        }

        .card:nth-child(n + 2) {
            margin: 0
        }
    }
`