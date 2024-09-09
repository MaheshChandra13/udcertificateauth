import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificate from "./components/Certificate";
import Verification from "./components/Verification";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Certificate />} />
                    <Route path="/verification" element={<Verification />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
