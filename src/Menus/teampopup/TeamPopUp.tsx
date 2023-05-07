import React from 'react';
import "./teampopup.css"
import PopUpMenu from "../../Components/popupmenu/PopUpMenu";
import {AiOutlineTeam} from "react-icons/ai";

interface Props {
    onClose:()=> void;
}

const TeamPopUp:React.FC<Props>= ({onClose}) => {
    return (
        <PopUpMenu dropShadow={true} height={50} width={70} onClose={onClose} >
            <div className={"team-small-name"}>VC Hausmannstätten <hr></hr></div>

        </PopUpMenu>
    );
};

export default TeamPopUp;
