import React from 'react';
import {FiMinus} from "react-icons/fi";
import "./match.css"

const MatchSmall = () => {
    return (
        <div className="container-match">
            <div className="team-one-name">HTBLA Kaindorf 1</div>
            <div className = "icon-versus"><FiMinus/></div>
            <div className="team-two-name">HTBLA Kaindorf 2</div>
            <div className="set">2</div>
            <div className="set set-five">25:19</div>
            <div className="set">1</div>
        </div>
    );
};

export default MatchSmall;
