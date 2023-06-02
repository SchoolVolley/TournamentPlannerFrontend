import React, {useState} from 'react';
import "./teams.css"
import Team from "../../Components/team/Team";
import TeamPopUp from "../../Menus/teampopup/TeamPopUp";
import AddTeamPopUp from "../../Menus/addteampopup/AddTeamPopUp";

const Teams = () => {

    const [isTeamPopupOpen,setIsTeamPopupOpen] = useState(false)
    const [isAddTeamPopupOpen,setIsAddTeamPopupOpen] = useState(true)


    const openPopUP = () => {
        if (isTeamPopupOpen) {
            setIsTeamPopupOpen(false);
        }
        if (!isTeamPopupOpen) {
            setIsTeamPopupOpen(true);
        }
    }

    function openAddTeamPopUp() {
        if(isAddTeamPopupOpen) {
            setIsAddTeamPopupOpen(false);
        }
        if(!isAddTeamPopupOpen) {
            setIsAddTeamPopupOpen(true);
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

            {isTeamPopupOpen&&(
                <TeamPopUp onClose={openPopUP}></TeamPopUp>
            )}
            {isAddTeamPopupOpen&& (
                <AddTeamPopUp onClose={openAddTeamPopUp}></AddTeamPopUp>
            )}
        </>

    );
};

export default Teams;
