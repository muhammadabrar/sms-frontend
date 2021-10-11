import React, { useState } from 'react';
import Darkmode from './hero/darkmode';
import Time from './hero/date_time';
import { useSelector } from 'react-redux'

import {FaPowerOff, FaHandshake} from 'react-icons/fa'
import {AiFillSetting, AiOutlineHistory} from 'react-icons/ai'


function Hero() {

    const theme = useSelector((state) => state.theme.value)

    const [current, setcurrent] = useState('mail')

    const handleClick = e => {
        setcurrent(e.key);
    };

    function closeTab() {
        window.close();
    }

    function confirm() {
        closeTab()
    }

    return (
        <>
            <div className="shadow">

                <div className={!theme ? "jumbotron" : "jumbotron-dark"} >
                    <div className="row ">
                        <div className="col-md-6 ">
                            <h3 className={!theme ? "page-title" : "page-title-dark"}>Welcome</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-row-reverse">
                                <div className="nav-btn">
                                    <button className="btn-icon shadow bg-danger" data-toggle="popover" aria-label="Power off" data-cooltipz-dir="bottom"><FaPowerOff/> </button>
                                </div>
                                <div className="nav-btn">
                                    <button className="btn-icon shadow bg-secondary" data-toggle="popover" aria-label="Settings" data-cooltipz-dir="bottom"><AiFillSetting/> </button>
                                </div>
                                <div className="nav-btn">
                                    <button className="btn-icon shadow bg-info" data-toggle="popover" aria-label="Meetings and appointments" data-cooltipz-dir="bottom"><FaHandshake/></button>
                                </div>
                                <div className="nav-btn">
                                    <button className="btn-icon shadow bg-primary" data-toggle="popover" aria-label="Activities" data-cooltipz-dir="bottom"><AiOutlineHistory/></button>
                                </div>
                                <Darkmode />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="row pt-4">
                            <div className="col-md-4 d-flex justify-content-start">
                               
                                    <p className="">
                                        branch
                                    </p>
                                
                            </div>
                            <div className="col-md-4 d-flex justify-content-center">
                               
                                    <p className=" ">
                                        2021
                                    </p>
                                
                            </div>
                            <div className="col-md-4 d-flex justify-content-end">
                                <p className=" ">
                                    <Time />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    <nav className="nav">
                        <ul className="nav__menu">
                            <li className="nav__menu-item active">
                                <a>Dashboard</a>
                            </li>
                            <li className="nav__menu-item">
                                <a>Students</a>
                                <ul className="nav__submenu">
                                    <li className="nav__submenu-item ">
                                        <a>Admission</a>
                                    </li>
                                    <li className="nav__submenu-item ">
                                        <a>Withdrawal Students</a>
                                    </li>
                                    <li className="nav__submenu-item ">
                                        <a>Test record</a>
                                    </li>
                                    <li className="nav__submenu-item ">
                                        <a>Attandance</a>
                                    </li>
                                   
                                </ul>
                                
                            </li>
                            <li className="nav__menu-item" >
                                <a>Staff</a>
                            </li>
                            <li className="nav__menu-item" >
                                <a>Classes</a>
                            </li><li className="nav__menu-item" >
                                <a>Stuff</a>
                            </li>
                        </ul>
                    </nav>
                </>
               

            </div>


        </>
    );
}

export default Hero;
