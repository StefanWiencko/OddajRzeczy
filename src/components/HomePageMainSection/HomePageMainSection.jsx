import React from 'react'
import HomePageMainSectionNav from "../HomePageMainSectionNav/HomePageMainSectionNav"
import MainOrnament from "../MainOrnament/MainOrnament"
import HomePageMainSectionButtons from "../HomePageMainSectionButtons/HomePageMainSectionButtons"

function HomePageMainSection() {
    return (
        <section className="homePageMainSection">
            <HomePageMainSectionNav/>
            <MainOrnament text='Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce'/>
            <HomePageMainSectionButtons/>
        </section>
    )
}

export default HomePageMainSection
