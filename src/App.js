import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import Header from "./components/Layout/Header";
import GameInfo from "./components/pages/GameInfo";
import Home from "./components/pages/Home";
import Footer from './components/Layout/Footer'

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <main className="main">
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/game/:id" element={<GameInfo/>} />
                </Routes>
                </main>
                <Footer/>
                
            </Router>
        </div>
    );
}

export default App;
