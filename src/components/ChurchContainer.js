import React from "react";
import Church from "./Church"

function ChurchContainer({ churches }) {

    const [search, setSearch] = useState('')

    // const filteredSkatespots = skatespots.filter(skatespot => {
    //     return skatespot.name.toLowerCase().includes(search.toLowerCase())
    // })


    const filteredChurches = churches.filter(church => {
        return church.name.toLowerCase().includes(search.toLowerCase())
    })

    const mapChurches = filteredChurches.map
        ((church) => {
            return <Church key={church.id}
                church={church} />
        })

    return (
        <>
            <Search search={search} setSearch={setSearch} />
            <ul classname="cards" >
                {mapChurches}
            </ul>

        </>
    )
}

export default ChurchContainer;