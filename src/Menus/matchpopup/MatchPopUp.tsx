import React from 'react';
import "./matchpopup.css"
import PopUpMenu from "../../Components/popupmenu/PopUpMenu";
import {SlPicture} from "react-icons/sl";
import {AiFillEdit} from "react-icons/ai";

interface Props {
    onClose:()=> void;
}

const MatchPopUp:React.FC<Props>= ({onClose}) => {
    return (
        <PopUpMenu dropShadow={true} height={50} width={70} onClose={onClose} >
                <div className={"match-popup-teamHead"}>
                <h2 className={"headTeamOne"}>HTBLA Kaindorf 1
                <SlPicture size={30}/>
                </h2>
                <h2 className={"headTeamTwo"} >HTBLA Kaindorf 2
                <SlPicture  size={30}/>
                </h2>
                </div>

            <div className={"wrapper"}>
                <div className={"container-team-one-players"}>
                    <div className={"text-container-left"}>Players (Team One)</div>
                </div>
                <div className={"center-text"}>
                    Start time: 12:38
                    <div className={"center-text-captain"}>
                        Referee: rufenacht
                        <AiFillEdit/>
                    </div>
                    <div className={"container-center"}>
                        <div className={"test-container-center"}>Max Mustermann</div>
                    </div>
                </div>
                <div className={"container-teamtwo-players"}>
                    <div className={"text-containercenter-right"}>Players (Team Two)</div>

                </div>
            </div>
                <div className={"match-popup-game"}>
                    <div className={"match-popup-set"}>
                        <div className={"container-set"}>
                            Set 1:
                        </div>
                        <p className={"Winner-Set"}>Winner: HTBLA Kaindorf2</p>
                        <p className={"Notes-Set"}>Notes: Unfair behavior from Team Two</p>
                    </div>
                    <div className={"match-popup-set"}>
                        <div className={"container-set"}>
                            Set 2:
                        </div>
                        <p className={"Winner-Set"}>Winner: HTBLA Kaindorf1</p>
                        <p className={"Notes-Set"}>Notes: -</p>
                    </div><
                    div className={"match-popup-set"}>
                        <div className={"container-set"}>
                            Set 3:
                        </div>
                        <p className={"Winner-Set"}>Winner: HTBLA Kaindorf1</p>
                        <p className={"Notes-Set"}>Notes: -</p>
                    </div>
                    <div className={"match-popup-set"}>
                        <div className={"container-set"}>
                            Set 4:
                        </div>
                        <p className={"Winner-Set"}>Winner: HTBLA Kaindorf2</p>
                        <p className={"Notes-Set"}>Notes: -</p>
                    </div>
                    <div className={"match-popup-set"}>
                        <div className={"container-set"}>
                            Set 5:
                        </div>
                        <p className={"Winner-Set"}>Winner: HTBLA Kaindorf2</p>
                        <p className={"Notes-Set"}>Notes: Unfair behavior from Team One</p>
                    </div>

                </div>








        </PopUpMenu>
    );
};

export default MatchPopUp;
