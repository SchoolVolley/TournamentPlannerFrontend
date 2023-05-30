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
                        <button className={"button-change"}>Change</button>
                    </div>



                    <table className={"table-leader"}>
                        <tbody>
                            <tr>
                                <th>Michael</th>
                                <th>Hubenauf</th>
                                <th>example@gmail.com</th>
                            </tr>
                            <tr>
                                <td>Firstname</td>
                                <td>Lastname</td>
                                <td>Email</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={"container-games"}>
                    <div className={"team-leader-header"}>
                        Games
                    </div>
                    <div className={"games-data"}>
                        <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                        <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                        <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    </div>
                </div>

                <div className={"container-players"}>
                    <div className={"team-leader-header"}>
                        Players
                        <button className={"button-player"}>Add Player</button>
                    </div>

                    <div className={"scroll-wrapper"}>
                        <table className={"player-data"}>
                            <thead>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Gender</th>
                            </thead>

                            <tbody>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            <tr>
                                <td>815</td>
                                <td>Hütter</td>
                                <td>Nico</td>
                                <td>Männlich</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                </div>

            </div>

        </PopUpMenu>
    );
};

export default TeamPopUp;
