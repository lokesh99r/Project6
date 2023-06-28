import React from "react";
import {Link} from "react-router-dom";
import "./Portal.css"

function Portal(){

    return(
        <div className='head'>
       < Link to={"/Homepages"} className='item'>Homepage</Link>

        <Link to={"/travel"} className='item'>Travel</Link>

        <Link to={"/Info"} className='item'>Info </Link>
</div>
    )
}

export default Portal 