import React, { useState } from 'react';

const Sidebar = () => {
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setProjetDropdownOpen] = useState(false);
    const [isCandidatDropdownOpen, setCandidatDropdownOpen] = useState(false);
    const [isPretDropdownOpen, setPretDropdownOpen] = useState(false);
    return <div>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <br></br> <br></br>
            <ul className="nav">

                <li className="nav-item">
                    <a className="nav-link" href="index">
                        <span className="menu-title">Acceuil</span>
                        <i className="mdi mdi-home menu-icon" />
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="liste_client">
                        <span className="menu-title" >Client</span>
                        <i className="mdi mdi-view-headline menu-icon" />
                    </a>
                </li>
                <li className="nav-item"><a className="nav-link"><i onClick={() => setDemandesDropdownOpen(!isDemandesDropdownOpen)}>

                    <span className="menu-title" > Demandes de prets         </span>

                    <i className="menu-arrow" style={{ marginLeft: 30 }} />

                </i></a>

                    {isDemandesDropdownOpen && (

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item"> <a className="nav-link" href="liste_demandepret">En attente</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_demandepretap">Approuvée</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_demandepretrejeter">Rejetée</a></li>
                            <li className="nav-item"> <a className="nav-link" href="../../pages/ui-features/typography.html">Archivé</a></li>
                        </ul>

                    )}

                </li>
                <li className="nav-item"><a className="nav-link"><i onClick={() => setPretDropdownOpen(!isPretDropdownOpen)}>

                    <span className="menu-title" >Prets    </span>

                    <i className="menu-arrow" style={{ marginLeft: 80 }} />

                </i></a>

                    {isPretDropdownOpen && (

                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="Liste_pretencours">En cour</a></li>
                            <li className="nav-item"> <a className="nav-link" href="Liste_pretd">Décaissé</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_pretrem">Remboursé</a></li>

                        </ul>

                    )}

                </li>

                <li className="nav-item">
                    <a className="nav-link" href="liste_garant">
                        <span className="menu-title">Garants</span>
                        <i className="mdi mdi-view-headline menu-icon" />
                    </a>
                </li>

                <li className="nav-item"><a className="nav-link"><i onClick={() => setProjetDropdownOpen(!isProjetDropdownOpen)}>

                    <span className="menu-title" >Projets       </span>

                    <i className="menu-arrow" style={{ marginLeft: 65 }} />

                </i></a>

                    {isProjetDropdownOpen && (

                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="ajouter_projet">Nouveau projet</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_projet">En cours</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_projetapp">Approuvé</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_projetdecaissé">Décaissé</a></li>
                            
                        </ul>

                    )}

                </li>
                <li className="nav-item"><a className="nav-link"><i onClick={() => setCandidatDropdownOpen(!isCandidatDropdownOpen)}>

                    <span className="menu-title" >Candidatures projet      </span>

                    <i className="menu-arrow" style={{ marginLeft: 35 }} />

                </i></a>

                    {isCandidatDropdownOpen && (

                        <ul className="nav flex-column sub-menu">

                            <li className="nav-item"> <a className="nav-link" href="liste_candidatattente">En attente</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_candidatapp">Approuvée</a></li>
                            <li className="nav-item"> <a className="nav-link" href="liste_candidatrejeté">Rejetée</a></li>

                        </ul>

                    )}

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="eventagence">
                        <span className="menu-title" >Evenements caisse</span>
                        <i className="mdi mdi-view-headline menu-icon" />
                    </a>
                </li>


            </ul>
        </nav>
    </div >

}


export default Sidebar;