import DropdownBtn from "../components/DropdownButton"


function About() {
    return (
        <div>
            <section className='banner about-banner'>
            </section>
            <section className="about-section">
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
        </div>
    )
}

export default About