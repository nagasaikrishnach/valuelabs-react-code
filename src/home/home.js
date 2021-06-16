import React from 'react';
import { Switch, BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import NavBar from './../navbar/navbar';
import SecondaryGrid from './../secondarygrid/secondarygrid';

const Home = () => {
    return (
        <>
            <NavBar />
            <SecondaryGrid />
        </>
    )
}

export default Home;