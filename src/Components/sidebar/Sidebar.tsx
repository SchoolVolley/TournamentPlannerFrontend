import {
    AiFillHome, AiFillSetting, AiOutlineTeam,
} from "react-icons/ai";
import {
    GiWhistle,
}from "react-icons/gi"
import {
    MdOutlineSportsVolleyball,
}from "react-icons/md"
import{
    VscGraph
}from "react-icons/vsc"
import {NavLink} from "react-router-dom";
import {ReactNode, useState} from "react";
import "./sidebar.css"
import CSS from 'csstype'
import Navbar from "../navbar/Navbar";

interface Props {
    children?: ReactNode
    // any props that come into the component
}
const Sidebar = ({children,...props}:Props) => {


    const [isOpen, setIsOpen] = useState(false)

    const styleOpen: CSS.Properties = {
        width: '20rem',
        minWidth: '20rem',
    }
    const styleClosed: CSS.Properties = {
        width: '4rem',
        minWidth: '4rem'
    }

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <AiFillHome></AiFillHome>
        },
        {
            path: "/teams",
            name: "Teams",
            icon: <AiOutlineTeam></AiOutlineTeam>
        },
        {
            path: "/referees",
            name: "Referees",
            icon:  <GiWhistle></GiWhistle>
        },
        {
            path: "/statistics",
            name: "Statistics",
            icon: <VscGraph></VscGraph>
        },
        {
            path: "/matches",
            name: "Matches",
            icon: <MdOutlineSportsVolleyball></MdOutlineSportsVolleyball>
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <AiFillSetting></AiFillSetting>
        },
    ]

    return (
        <div className="sidebar-container">
            <div className="sidebar" style={isOpen?styleOpen:styleClosed} onMouseOverCapture={() => setIsOpen(true)} onMouseOutCapture={() => setIsOpen(false)}>
                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="sidebar-navlink">
                            <div className="sidebar-navlink-icon">
                                {item.icon}
                            </div>
                            <div style={{display: isOpen ? 'block': "none"}} className="sidebar-navlink-text">
                                {item.name}
                            </div>
                        </NavLink>
                    ))
                }
            </div>
            <Navbar></Navbar>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
