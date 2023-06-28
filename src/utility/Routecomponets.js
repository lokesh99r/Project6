import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "../pages/Homepage";
import Travel from "../pages/Travel";
import Info from "../pages/Info";

function Routecomponets(){

    return(
        <>
<BrowserRouter>
<Routes>
    <Route path="/" exact element={<Homepage/>} />
    <Route path="/Homepage"  element={<Homepage/>} />
    <Route path="/Travel"  element={<Travel/>} />
    <Route path="/Info"  element={<Info/>} />

</Routes>
</BrowserRouter>
    </>
    )
}

export default Routecomponets
