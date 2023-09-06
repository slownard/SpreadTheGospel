import React, { useState, useEffect } from "react";

function Submitform({ handleAddChurch }) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [denomination, setDenomination] = useState('')
    const [pastor, setPastor] = useState('')
    const [iamge, setImage] = useState('')

    function handleDubmit(e) {
        e.preventDefautl()

        const newChurch = {
            name,
            address,
            denomination,
            pastor,
            image
        }
        handleAddChurch(newChurch)
    }


    return (
        <>

            <h1>New Church</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    placeholder="Address"
                />
                <input
                    onChange={(e) => setDenomination(e.target.value)}
                    type="text"
                    name="denomination"
                    placeholder="denomination"
                />
                <input
                    onChange={(e) => setPastor(e.target.value)}
                    type="text"
                    name="pastor"
                    placeholder="pastor"
                />
                <input
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    name="image"
                    placeholder="Image URL"
                />
                <button type="submit">Add church</button>
            </form>
        </>
    )
}

export default Submitform; 