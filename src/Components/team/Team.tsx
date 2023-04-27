import React, {useState} from 'react';
import "./team.css"
import {AiOutlineTeam} from "react-icons/ai";

interface Props {
    openPopUp: ()=>void;
}

const Team:React.FC<Props> = ({openPopUp}) => {

    return (
        <div className="container-team-small" onClick={openPopUp}>
            <div className="team-small-name">VC Hausmannstätten <hr/></div>
            <div className="team-small-short">VCH</div>
            <div className="team-small-mail">
                <div className="icon-small"><AiOutlineTeam/></div>
                example@htl-kaindorf.at
            </div>
            <div className="team-small-phone">
                <div className="icon-small"><AiOutlineTeam/></div>
                +43 6781324499
            </div>
        </div>
    );
};

export default Team;
