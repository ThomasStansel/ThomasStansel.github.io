import React from 'react'
import ExpCardItem from './ExpCardItem'
import './ExpCards.css'
import byu from "../images/byu-icon.jpg";
import c1 from "../images/CapitalOne-icon.jpg";
import bluehost from "../images/Bluehost-icon.jpg";

function ExpCards() {

    return (
        <div className="exp-cards">
            <h1 className="exp-header" id="experience">Where I've Worked</h1>
            <div className="exp-cards-container">
                <div className="exp-cards-wrapper">
                    <ul className="exp-cards-items">
                        <ExpCardItem
                            src={bluehost}
                            text="SWE Intern"
                            label="Bluehost"
                            description="Current"
                            />
                        <ExpCardItem
                            src={c1}
                            text="SWE Intern"
                            label="Capital One"
                            description='Using Python and AWS Lambdas, added on to an existing internal
                            tool to allow for teams to easily identify any resources that were insecure or out of date.
                            Provided immediate results by identifying insecure resources teams did not know were insecure.'
                            />
                        <ExpCardItem
                            src={byu}
                            text="Student SWE"
                            label="BYU OIT"
                            description="
                                Using React-Native and AWS added onto an existing internal mobile application to allow managers
                                to efficiently manage their teams and schedules. Created screens saved time and resources for the
                                team that previously managed all schedules."
                            />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExpCards
