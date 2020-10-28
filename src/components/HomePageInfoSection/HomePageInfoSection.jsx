import React from 'react'
import HomePageInfoSectionAchiv from '../HomePageInfoSectionAchiv/HomePageInfoSectionAchiv'
import MainOrnament from '../MainOrnament/MainOrnament'
import HomePageInfoSectionSteps from "../HomePageInfoSectionSteps/HomePageInfoSectionSteps"


function HomePageInfoSection() {
    return (
        <section className="homePageInfoSection" >
           <HomePageInfoSectionAchiv/> 
           <MainOrnament text="Wystarczą 4 proste kroki" />
           <HomePageInfoSectionSteps/>
        </section>
    )
}

export default HomePageInfoSection
