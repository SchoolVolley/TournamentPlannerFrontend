import React from 'react';
import "./teampopup.css"
import PopUpMenu from "../../Components/popupmenu/PopUpMenu";

interface Props {
    onClose:()=> void;
}

const TeamPopUp:React.FC<Props>= ({onClose}) => {
    return (
        <PopUpMenu dropShadow={true} height={50} width={70} onClose={onClose} >
            <div className={"team-popup-header"}>VC Hausmannstätten <hr></hr></div>

            <div className={"wrapper"}>


                <div className={"container-picture"}>
                    <img className={"placeholder"} src={"https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"} alt={""}/>
                </div>


                <div className={"container-team-leader"}>
                    <div className={"team-leader-header"}>
                        Team leader
                    </div>
                    <p>Firstname: Michael</p>
                    <p>Lastname: Hubenauf</p>
                    <p>Email: example@gmail.com</p>
                </div>

dfd
                <div className={"container-games"}>
                    <div className={"team-leader-header"}>
                        Games
                    </div>
                </div>

            </div>

        </PopUpMenu>
    );
};

export default TeamPopUp;
