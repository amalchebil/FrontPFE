import React from 'react';

const SidebarAdmin = () => {
    return <div>
        <br></br><br></br>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
             
                <li className="nav-item">
                    <a className="nav-link" href="index">
                        <span className="menu-title">Dashboard</span>
                        <i className="mdi mdi-home menu-icon" />
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="liste_personnel">
                        <span className="menu-title" >Liste personnel</span>
                        <i className="mdi mdi-view-headline menu-icon" />
                    </a>
                </li>






            </ul>
        </nav>;
    </div>
}



export default SidebarAdmin;