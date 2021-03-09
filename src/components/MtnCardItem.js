import React from 'react'

function MtnCardItem(props) {

    return (
        <>
            <li className="mtn-cards-item">
                <div className="mtn-cards-item-link">
                    <div className="mtn-cards-item-pic-wrap">
                    <img
                        className='mtn-cards-item-img'
                        alt={props.label}
                        src={props.src}
                        />
                    </div>
                    <div className="mtn-cards-item-info">
                        <h5 className="mtn-cards-item-title">
                            {props.text}
                        </h5>
                        <h5 className="mtn-cards-item-description">
                            {props.description}
                        </h5>
                        <div className="mtn-icon-links">
                            <i className={props.icon1}></i>
                            <i className={props.icon2}></i>
                        </div>

                    </div>
                </div>
            </li>
        </>
    )
}

export default MtnCardItem
