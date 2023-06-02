import React, {useEffect, useState} from 'react';
import "./matches.css"
import Match from "../../Components/match/Match"
import {DataMatch} from "../../Datatypes/MatchData";
import axios from 'axios'
import dashboard from "../dashboard/Dashboard";
import {Simulate} from "react-dom/test-utils";


const Matches = () => {

    const [matches,setMatches] = useState<DataMatch[]>();

    useEffect(() => {
        axios.get('https://94aa34a6-d42b-4942-b73f-fe63b8ade8fb.mock.pstmn.io/getMatches')
            .then(res => res.data as DataMatch[])
            .then(data =>{
                setMatches(data);
                console.log(data)
            })
            .catch(error=>console.log(error))
    },[]);


    return (
        <div className="container container-matches">
            {matches?.map(match =>(
                <Match match={match}></Match>
            ))}
        </div>
    );
};

export default Matches;
