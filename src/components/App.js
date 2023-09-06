// create page 
// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";
import ChurchContainer from "./ChurchContainer";
import Submitform from "./Submitform";

function App() {

    // set your state
    const [page, setPage] = useState(("/"))
    const [churches, setChurches] = useState([])

    // fetching json 
    useEffect(() => {
        fetch("http://localhost:3001/churches")
            .then(res => res.json())
            .then(data => {
                setChurches(data)
                console.log(data)
            })
    }, [])

    // post request for adding a church 
    function handleAddChurch() {
        fetch("http://localhost:3000/churches", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newChurches),
        })
            .then((res) => res.json())
            .then((data) => setChurches([data, ...churches]));
    }


    return (
        <div className="App">

            <Header />
            <Navbar onChangePage={setPage} />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/churches" element={<ChurchContainer churches={churches} />} />

                <Route path="/submitchurch" element={<Submitform handleAddChurch={handleAddChurch} />} />

            </Routes>

        </div >
    );
}

export default App;