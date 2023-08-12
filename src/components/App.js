// create page 
// import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from "react";


function App() {

    // set your state
    const [churches, setChurches] = useState([])

    // 
    useEffect(() => {
        fetch('http://localhost:3001/churches')
            .then(res => res.json())
            .then((data) => setChurches(data));
    }, [])


    return (
        <div className="App">
            <header className="App-header">
                <p>
                    EVANGELISM ACROSS THE NATION
                </p>


            </header>
        </div>
    );
}

export default App;