import React from 'react';
import "./dashboard.css"
import MatchSmall from "../../Components/match/MatchSmall";
import {NavLink} from "react-router-dom";
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";

const Dashboard = () => {
    return (
        <div className="container-dashboard-outer">
            <div className="container-dashboard-tournamenttree  container">

            </div>
            <div className="container-dashboard-right container-positioner">
                <div className="container-dashboard-nextmatches">
                    <NavLink to={'/matches'} style={{textDecoration: 'none'}}>
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
                    <h1>Groups</h1>
                    <hr/>
                    <div className="dashboard-group-switch">
                        <BiLeftArrow className={"dashboard-group-switch-icon"}></BiLeftArrow>
                        <h3>
                            Group A
                        </h3>
                        <BiRightArrow className={"dashboard-group-switch-icon"}></BiRightArrow>
                    </div>
                    <div className="dashboard-groups-table">
                        <table>
                            <thead>
                            <tr>
                                <th style={{width: '3rem'}}>Pos</th>
                                <th style={{width: '40%'}}>Team</th>
                                <th style={{width: '3rem'}}>P</th>
                                <th style={{width: '3rem'}}>W</th>
                                <th style={{width: '3rem'}}>L</th>
                                <th style={{width: '3rem'}}>G</th>
                                <th>PD</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td><NavLink to={'/teams'}>VCH</NavLink></td>
                                <td>10</td>
                                <td>5</td>
                                <td>3</td>
                                <td>8</td>
                                <td>153:180</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;
