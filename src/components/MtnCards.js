import React from 'react'
import MtnCardItem from './MtnCardItem'
import './MtnCards.css'
import capital_reef from "../images/Capital_reef.png";
import yellowstone from "../images/yellowstone.jpg";
import basin from "../images/Great_basin.JPG";
import tetons from "../images/grandTeton.jpg";
import zions from "../images/zions.jpg";
import guadalupe from "../images/guadalupe.JPG";

function MtnCards() {

    return (
        <div className="mtn-cards">
            <h1 className="mtn-header" id="mountains">National Parks</h1>
            <h3 className="mtn-desc" id="mtn-desc">I have a goal to visit all the National Parks in the US these are the ones I've gone to so far!</h3>
            <div className="mtn-cards-container">
                <div className="mtn-cards-wrapper">
                    <ul className="mtn-cards-items">
                        <MtnCardItem
                            src={zions}
                            text="Zions"
                            label="Angels Landing"
                            description="End of Angels Landing Hike in Febuary 2021"
                            />
                        <MtnCardItem
                            src={basin}
                            text="Great Basin"
                            label="Great Basin"
                            description='Summit of Wheeler Peak in September 2020'
                            />
                        <MtnCardItem
                            src={tetons}
                            text="Grand Tetons"
                            label="Grand Tetons"
                            description="
                                Picture of the Grand Tetons in August 2020"
                            />
                    </ul>
                    <ul className="mtn-cards-items">
                        <MtnCardItem
                            src={yellowstone}
                            text="Yellowstone"
                            label="Ol' Faithful"
                            description="Grand Canyon of Yellowstone in August 2020"
                            />
                        <MtnCardItem
                            src={capital_reef}
                            text="Capital Reef"
                            label="Capital Reef"
                            description='Small Outlook over Capital Reef in May 2020'
                            />
                        <MtnCardItem
                            src={guadalupe}
                            text="Guadalupe Mountains"
                            label="Guadalupe Moutains"
                            description="
                                Summit of Guadalupe Peak in August 2016"
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MtnCards
