// create page 
// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Navbar from "./Navbar";




function App() {

    // set your state
    const [page, setPage] = useState(("/"))
    const [churches, setChurches] = useState([])

    // fetching json
    useEffect(() => {
        fetch('http://localhost:3000/churches')
            .then(res => res.json())
            .then((data) => setChurches(data));
        console.log(churches)
    }, [])


    return (
        <div className="App">
            <Header />
            <Navbar onChangePage={setPage} />
            <Home />

            <header className="App-header">

                <p>
                    LOCAL CHURCH
                </p>


            </header>
        </div>
    );
}

export default App;