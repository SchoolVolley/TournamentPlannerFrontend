import {FiMinus} from "react-icons/fi";
import "./match.css"
import {DataMatch} from "../../Datatypes/MatchData";
import React from "react";

interface PropsMatch {
    match:DataMatch
}

const Match:React.FC<PropsMatch>  = ({match}) =>{

    return(
        <div className="container-match">
            <div className="team-one-name">{match.teamA.name}</div>
            <div className = "icon-versus"><FiMinus/></div>
            <div className="team-two-name">{match.teamB.name}</div>
            {match.sets.map(set=>{
                return <div className={"set"}>{set.apoints}:{set.bpoints}</div>
            })}

        </div>

    );
};

export default Match;