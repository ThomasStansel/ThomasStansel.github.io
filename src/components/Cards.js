import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1 id="projects">Projects</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                <ul className="cards-items">
                        <CardItem
                            icon="fab fa-python"
                            text="AlexaCAPS"
                            label="Alexa"
                            description="An Alexa Skill that is triggered when the student asks for their university's
                            Counseling and Psychological Services(CAPS) phone number. A lambda function then uses web scraping to get the specfied university's
                            CAPS number and gives it back to the student through the Alexa device."
                            github="https://github.com/TStansel/AlexaCAPS"
                            youtube="https://github.com/TStansel/AlexaCAPS"
                            />
                    </ul>
                <ul className="cards-items">
                    <CardItem
                            icon="fab fa-android"
                            text="Family Map Client"
                            label="Android"
                            description="Using the Google Map API and the API created in the Family Map Server,
                            markers for each of the user's and their family's events are displayed on a map.
                            Filters were created to allow the user to filter out certain events from being shown on the map."
                            />
                    <CardItem
                            icon="fab fa-java"
                            text="Family Map Server"
                            label="Java"
                            description='A server and API for the Family Map Client.
                                This project was responsible for generating four generations of data for the user and storing it in a SQL server.
                                This project also created an API that allowed the Android app to access this data.'
                            />
                    <CardItem
                            icon="fab fa-python"
                            text="TherAssist"
                            label="Python"
                            description="
                            Using a pre-trained machine learning modal, the application is able to detect the face, and reognize the emotion on it.
                            This allows the application to time how long it takes the user to replicate a displayed emotion.
                            For a demo, click the Youtube link below."
                            github="https://github.com/arianneghislainerull/defHacks--TeamName--project"
                            youtube="https://youtu.be/smWooWXbKfM"
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards