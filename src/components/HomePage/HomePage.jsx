import React from 'react'
import HomePageMainSection from '../HomePageMainSection/HomePageMainSection';
import HomePageInfoSection from '../HomePageInfoSection/HomePageInfoSection';
import MainButton from "../MainButton/MainButton";
import HomePageAboutSection from '../HomePageAboutSection/HomePageAboutSection'

function HomePage() {
    return (
        <div className='homePage'>
            <HomePageMainSection/>
            <HomePageInfoSection/>
            <MainButton to='/login' text="ODDAJ RZECZY" />
            <HomePageAboutSection/>
        </div>
    )
}

export default HomePage
