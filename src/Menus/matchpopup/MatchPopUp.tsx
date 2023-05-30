import React from 'react';
import "./matchpopup.css"
import PopUpMenu from "../../Components/popupmenu/PopUpMenu";
import {AiOutlinePicture} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";

interface Props {
    onClose:()=> void;
}

const MatchPopUp:React.FC<Props>= ({onClose}) => {
    return (
        <PopUpMenu dropShadow={true} height={50} width={70} onClose={onClose} >
            <div className={"match-popup-teamnames"}>
                <div className={"match-popup-teamone"}>
                <h2>HTBLA Kaindorf 1</h2>
                <AiOutlinePicture className={"match-popup-picture"}/>
                </div>
                <div className={"match-popup-teamtwo"}>
                <h2>HTBLA Kaindorf 2</h2>
                <AiOutlinePicture className={"match-popup-picture"}/>
                </div>
            </div>

            <div className={"wrapper"}>
                <div className={"container-teamone-players"}>
                    <p>Players (Team One)</p>
                </div>
                <div className={"center-text"}>
                    <p>Start time: 12:38</p>
                    <div className={"center-text-captain"}>
                        <p>Referee: rufenacht</p>
                        <AiFillEdit/>
                    </div>
                </div>
                <div className={"container-teamtwo-players"}>
                    <p>Players (Team Two)</p>
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





                </div>


        </PopUpMenu>
    );
};

export default MatchPopUp;
