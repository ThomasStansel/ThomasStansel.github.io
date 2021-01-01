import React from 'react'

function ExpCardItem(props) {

    return (
        <>
            <li className="exp-cards-item">
                <div className="exp-cards-item-link">
                    <div className="exp-cards-item-pic-wrap">
                    <img
                        className='exp-cards-item-img'
                        alt={props.label}
                        src={props.src}
                        />
                    </div>
                    <div className="exp-cards-item-info">
                        <h5 className="exp-cards-item-title">
                            {props.text}
                        </h5>
                        <h5 className="exp-cards-item-description">
                            {props.description}
                        </h5>
                        <div className="exp-icon-links">
                            <i className={props.icon1}></i>
                            <i className={props.icon2}></i>
                        </div>

                    </div>
                </div>
            </li>
        </>
    )
}

export default ExpCardItem
