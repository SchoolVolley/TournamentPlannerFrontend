import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from "./Components/sidebar/Sidebar";
import Dashboard from "./Views/dashboard/Dashboard";
import Teams from "./Views/teams/Teams";
import Referees from "./Views/referees/Referees";
import Statistics from "./Views/statistics/Statistics";
import Matches from "./Views/matches/Matches";
import Settings from "./Views/settings/Settings";

import "./app.css"

function App() {
    document.body.classList.add("no-scroll")


    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/teams" element={<Teams></Teams>}></Route>
                    <Route path="/referees" element={<Referees></Referees>}></Route>
                    <Route path="/statistics" element={<Statistics></Statistics>}></Route>
                    <Route path="/matches" element={<Matches></Matches>}></Route>
                    <Route path="/settings" element={<Settings></Settings>}></Route>
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}

export default App;
