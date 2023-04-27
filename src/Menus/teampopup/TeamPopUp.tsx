import React from 'react';
import "./teampopup.css"
import PopUpMenu from "../../Components/popupmenu/PopUpMenu";

interface Props {
    onClose:()=> void;
}

const TeamPopUp:React.FC<Props>= ({onClose}) => {
    return (
        <PopUpMenu dropShadow={true} height={50} width={50} onClose={onClose} >

        </PopUpMenu>
    );
};

export default TeamPopUp;
