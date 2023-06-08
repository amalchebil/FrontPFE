import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderSiege from './HeaderSiege';

export default function NavbarSIEGE() {

    const navigate = useNavigate()
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }
    const [isSUBDropdownOpen, setSubDropdownOpen] = useState(false);
    const [isDemandesSUBDropdownOpen, setDemandesSubDropdownOpen] = useState(false);
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
    return (
        <div>
            <br></br>  <br></br>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/homes">
                            <span className="menu-title">acceuil</span>
                            <i className="mdi mdi-home menu-icon" />
                        </a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="/listec">
                            <span className="menu-title">clients</span>
                            <i className="mdi mdi-account-multiple-outline menu-icon" />
                        </a>
                    </li>
                    <li className="nav-item"><a className="nav-link"><i onClick={() => setDemandesDropdownOpen(!isDemandesDropdownOpen)}>
                        <span className="menu-title">les demandes de prets         </span>
                        <i className="menu-arrow" style={{ marginLeft: 30 }} />

                    </i></a>
                        {isDemandesDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/liste_attente'><i className="fa fa-edit" />les  Demandes En attente </a>



                                </li>

                                <li className="nav-item"> <a className="nav-link " href='/listed'><i className="fa fa-edit" />les Demandes Rejeter </a>



                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/listepret">
                            <span className="menu-title">Liste des Prets</span>
                            <i className="mdi mdi-arrange-send-backwardmenu-icon" />
                        </a>
                    </li>

                    <li className="nav-item"><a className="nav-link"><i onClick={() => setPojetsDropdownOpen(!isProjetDropdownOpen)}>
                        Liste des Projets
                        <i className="menu-arrow" style={{ marginLeft: 70 }} />

                    </i></a>
                        {isProjetDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/liste_attenteprojet'><i className="fa fa-edit" />Liste des Projets En attente </a>



                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/listepapprouver'><i className="fa fa-edit" />Liste des Projets Approuver</a>



                                </li>

                                <li className="nav-item"> <a className="nav-link " href='/listeprejeter'><i className="fa fa-edit" />Liste des Projets Rejeter </a>



                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/listeparchiver'><i className="fa fa-edit" />Liste des Projets Archiver</a>



                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-item"><a className="nav-link"><i onClick={() => setDemandesSubDropdownOpen(!isDemandesSUBDropdownOpen)}>
                        les  Demandes de subvention
                        <i className="menu-arrow" />
                    </i></a>
                        {isDemandesSUBDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/liste_sub_Comite'
                                ><i className="fa fa-edit" />les Demandes En attente </a>

                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/app'
                                ><i className="fa fa-edit" />les Demandes Approuver</a>

                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/se'
                                ><i className="fa fa-edit" />les Demandes Rejeter </a>

                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/Saa'
                                ><i className="fa fa-edit" />Les Demandes Archiver </a>

                                </li>
                            </ul>
                        )}
                    </li>



                    <li className="nav-item"><a className="nav-link"><i className="fa fa-edit" /><i onClick={() => setSubDropdownOpen(!isSUBDropdownOpen)}>
                        les subventions
                        <i className="menu-arrow" style={{ marginLeft: 75 }} />            </i></a>
                        {isSUBDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/soo
'><i className="fa fa-edit" />les subventions a traiter </a>

                                </li>

                                <li className="nav-item"> <a className="nav-link " href='/Sii
'><i className="fa fa-edit" />les subventions en cour </a>

                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/ds
'><i className="fa fa-edit" /> les subventions decaissé</a>

                                </li>



                            </ul>
                        )}
                    </li>






                    <li className="nav-item">
                        <a className="nav-link" href="/liste_agence">
                            <span className="menu-title">Liste des Agences</span>
                            <i className="mdi  mdi-amazon menu-icon" />
                        </a>
                    </li>






                </ul>
            </nav>;
        </div>
    )
}
