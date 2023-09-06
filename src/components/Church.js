import React, { useState } from "react";

function Church({ church }) {


    const { name, address, denomination, pastor, image } = church


    return (


        <li className="cards__item">

            <div className="card">
                <img
                    src={image}
                    alt={name}
                    className="card__image"
                />

                <div className="card__content">
                    <div className="card__title">{name}</div>
                    <p className="card__text">{pastor}  </p>
                    <div className="card__detail">

                        <a href={"https://www.google.com/maps/search/?api=1&query=" + name} >{address}</a>
                        <a>
                            {denomination}
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Church; 
