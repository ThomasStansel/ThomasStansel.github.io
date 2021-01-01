import React from 'react'

function CardItem(props) {

    return (
        <>
            <li className="cards-item">
                <div className="cards-item-link">
                    <div className="icon-container">
                        <i className={props.icon}></i>
                    </div>
                    <div className="cards-item-info">
                        <h5 className="cards-item-title">
                            {props.text}
                        </h5>
                        <h5 className="cards-item-description">
                            {props.description}
                        </h5>
                        <div className="icon-links">
                            {
                                props.github != null ?
                                <a target="_blank" href={props.github}>
                                    <i className="fab fa-github"></i>
                                </a>
                                :
                                null
                            }
                            {
                                props.youtube != null ?
                                <a href={props.youtube}>
                                    <i class="fab fa-youtube" href={props.youtube}></i>
                                </a>
                                :
                                null
                            }
                        </div>

                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem
