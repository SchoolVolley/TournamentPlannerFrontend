import React, {useState} from 'react';
import "./matches.css"
import Match from "../../Components/match/Match"
import TeamPopUp from "../../Menus/teampopup/TeamPopUp";
import MatchPopUp from "../../Menus/matchpopup/MatchPopUp";
const Matches = () => {

    const [isOpen,setIsOpen] = useState(false)

    const openPopup = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        if (!isOpen) {
            setIsOpen(true);
        }
    }
    return (
        <>
        <div className="container container-matches">
        <Match openPoPUp={openPopup}/>
        <Match openPoPUp={openPopup}/>
        <Match openPoPUp={openPopup}/>
        <Match openPoPUp={openPopup}/>
        <Match openPoPUp={openPopup}/>
        <Match openPoPUp={openPopup}/>
        </div>
            {isOpen&&(
                <MatchPopUp onClose={openPopup}></MatchPopUp>
            )}
        </>
    );
};

export default Matches;
