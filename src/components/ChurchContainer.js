import React from "react";
import Church from "./Church"

function ChurchContainer({ churches }) {

    const mapChurches = churches.map
        ((church) => {
            return <Church key={church.id}
                church={church} />
        })

    return (
        <>
            <ul classname="cards" >
                {mapChurches}
            </ul>

        </>
    )
}

export default ChurchContainer;