import React from 'react'

import DropdownBtn from "../components/DropdownButton/index"


function About() {
    return (
        <React.StrictMode>
            <section className='banner about-banner'>
                <h1 className='display-hidden'>Banner</h1>
            </section>
            <section className="about-section">
                <h1 className='display-hidden'>À propos</h1>

                <DropdownBtn
                defaultClose={true}
                header={'Fiabilité'}
                content={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}
                />

                <DropdownBtn
                defaultClose={true}
                header={'Respect'}
                content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}
                />

                <DropdownBtn
                defaultClose={true}
                header={'Service'}
                content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
                />

                <DropdownBtn
                defaultClose={true}
                header={'Sécurité'}
                content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
                />
            </section>
        </React.StrictMode>
    )
}

export default About