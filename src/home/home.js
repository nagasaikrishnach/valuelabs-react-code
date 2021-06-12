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
        // <div>Material UI</div>
        // <Router>
        //     <nav>
        //         <NavLink activeClassName="active" to="/">
        //             Home
        //         </NavLink>
        //         <NavLink activeClassName="active" to="/mac">
        //             Mac
        //         </NavLink>
        //         <NavLink activeClassName="active" to="/ipad">
        //             Ipad
        //         </NavLink>
        //     </nav>
        //     <hr />
        //     {/* <Switch> returns only one first matching route.
        //     exact returns any number of routes that match exactly. */}
        //     <Switch>
        //         <Route exact path="/" component={LandingPage}></Route>
        //         <Route path="/ipad" component={Ipad}></Route>
        //         <PrivateRoute><Route path="/mac" component={Mac} test={"TEST"}></Route></PrivateRoute>
        //         <Route path="/mac/:id" component={Mac1}></Route>
        //         {/* <Route exact path="/" component={Parentref}></Route> */}
        //     </Switch>
        // </Router>
    )
}

export default Home;