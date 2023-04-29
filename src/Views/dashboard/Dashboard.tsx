import React from 'react';
import "./dashboard.css"
import MatchSmall from "../../Components/match/MatchSmall";
import {NavLink} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container-dashboard-outer">
            <div className="container-dashboard-tournamenttree  container">

            </div>
            <div className="container-dashboard-right container-positioner">
                <div className="container-dashboard-nextmatches">
                    <NavLink to={'/matches'} style={{textDecoration:'none'}}>
                        <h1>Running Matches</h1>
                    </NavLink>
                    <hr/>
                    <MatchSmall/>
                    <MatchSmall/>
                    <MatchSmall/>
                    <h5>Next Up:</h5>
                    <MatchSmall/>
                    <MatchSmall/>
                </div>
                <div className="container-dashboard-groups">

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
