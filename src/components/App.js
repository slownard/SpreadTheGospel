// create page 
// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";
import ChurchContainer from "./ChurchContainer";




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


    return (
        <div className="App">


            <Header />
            <Navbar onChangePage={setPage} />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/churches" element={<ChurchContainer churches={churches} />} />

            </Routes>



        </div>
    );
}

export default App;