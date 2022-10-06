import axios from 'axios';
import React, { useState, useEffect } from 'react';
import logo from '../../images/horizontal-logo-gradient-blue-atlassian.png';
import './_home.scss';


const Home = () => {
    const [ someState, setSomeState ] = useState()
    return(
        <div>
            <img src={logo} alt="logo" />
            <p className="copy">Text here</p>
            <div className="content">
                <section className="section">Column 1</section>
                <section className="section">Column 2</section>
                <section className="section">Column 3</section>
            </div>
        </div>
        
    )
}

export default Home