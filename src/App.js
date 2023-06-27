import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Portal from "./Portal/Portal";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/portal/*" element={<Portal/>}/>
            </Routes>
        </Router>
    );
};

export default App;
