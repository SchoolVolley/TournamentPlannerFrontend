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

                    <table className={"table-leader"}>
                        <thead>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Michael</td>
                                <td>Hubenauf</td>
                                <td>example@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={"container-games"}>
                    <div className={"team-leader-header"}>
                        Games
                    </div>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                </div>

                <div className={"container-players"}>
                    <div className={"team-leader-header"}>
                        Players
                    </div>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                    <p>VS: HTBLA Kaindorf 2 Est.Start Time: 12:00</p>
                </div>

            </div>

        </PopUpMenu>
    );
};

export default TeamPopUp;
