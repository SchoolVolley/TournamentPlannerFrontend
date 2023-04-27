import {TfiReload} from "react-icons/tfi";
import {FiMinus} from "react-icons/fi";
import "./match.css"


const Match  = () =>{
    return(
        <div className="container-matches">
            <div className="team-one-name">HTBLA Kaindorf 1</div>
            <div className = "icon-versus"><FiMinus/></div>
            <div className="team-two-name">HTBLA Kaindorf 2</div>
            <div className="set-one">25:14</div>
            <div className="set-two">25:18</div>
            <div className="set-three">23:25</div>
            <div className="set-four">25:27</div>
            <div className="set-five">25:19</div>

        </div>

    );
};

export default Match;