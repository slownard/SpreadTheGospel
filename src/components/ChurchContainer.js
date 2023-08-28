import React from "react";

function ChurchContainer() {



    const mapChurches = churches.map(
        (church) => {
            return <Church key={church.id} church={church} />
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