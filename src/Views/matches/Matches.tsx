import React, {useEffect, useState} from 'react';
import "./matches.css"
import Match from "../../Components/match/Match"
import {DataMatch} from "../../Datatypes/MatchData";
import axios from 'axios'
import dashboard from "../dashboard/Dashboard";
import {Simulate} from "react-dom/test-utils";
import TeamPopUp from "../../Menus/teampopup/TeamPopUp";
import MatchPopUp from "../../Menus/matchpopup/MatchPopUp";


const Matches = () => {

    const [matches,setMatches] = useState<DataMatch[]>();

    const [isOpen,setIsOpen] = useState(false)

    const openPopUP = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    const config = {
        headers:{
            "Authorization":"Basic YWRtaW46U2Nob29sVm9sbGV5MjMhI2Nvb2w="
        }
    }

    useEffect(() => {
        axios.get('https://jarthc20.uber.space/kainbackend/match/getall',config)
            .then(res => res.data as DataMatch[])
            .then(data =>{
                setMatches(data);
                console.log(data)
            })
            .catch(error=>console.log(error))
    },[]);


    return (
        <>
        <div className="container container-matches">
            {matches?.map(match =>(
                <Match match={match} openPopUp={openPopUP}></Match>
            ))}
        </div>
            {isOpen&&(
                <MatchPopUp onClose={openPopUP}></MatchPopUp>
            )}
        </>
    );
};

export default Matches;
