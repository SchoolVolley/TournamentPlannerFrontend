import React from 'react';
import PopUpMenu from "../../Components/popupmenu/PopUpMenu";
import CSS from "csstype";

interface Props {
    onClose:()=> void;
}

const AddTeamPopUp:React.FC<Props> = ({onClose}) => {

    const team_details: CSS.Properties = {
        fontSize: '20px'
    }

    const column1: CSS.Properties = {
        float: 'left',
        width: '60%'
    }

    const column2: CSS.Properties = {
        float: 'left',
        width: '40%'
    }

    const table3: CSS.Properties = {
        display: 'table',
        width: '100%'
    }

    return (
        <PopUpMenu width={55} height={40} dropShadow={true} onClose={onClose}>
            <div className={"team-popup-header"}>Add Team</div>

            <div style={table3}>
                <div style={column1}>
                    <div style={team_details}>Team details</div>
                    <form>
                        <label htmlFor="fname">Team Name*</label>
                        <input type="text" id="fname" name="fname"></input>
                        <label htmlFor="lname">School</label>
                        <input type="text" id="lname" name="lname"></input>
                    </form>
                </div>

                <div style={column2}>
                    <div style={team_details}>Team picture</div>
                </div>
            </div>
        </PopUpMenu>


    );
};

export default AddTeamPopUp;