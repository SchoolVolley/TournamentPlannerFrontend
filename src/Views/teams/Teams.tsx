import React, {useState} from 'react';
import "./teams.css"
import Team from "../../Components/team/Team";
import TeamPopUp from "../../Menus/teampopup/TeamPopUp";

const Teams = () => {

    const [isOpen,setIsOpen] = useState(false)

    const openPopUP = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    return (
        <>
            <div className="container-teams container">
                <Team openPopUp={openPopUP}/>
                <Team openPopUp={openPopUP}/>
                <Team openPopUp={openPopUP}/>
                <Team openPopUp={openPopUP}/>
                <Team openPopUp={openPopUP}/>
                <Team openPopUp={openPopUP}/>
                <Team openPopUp={openPopUP}/>
            </div>
            {isOpen&&(
                <TeamPopUp></TeamPopUp>
            )}
        </>

    );
};

export default Teams;
