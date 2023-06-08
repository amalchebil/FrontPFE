import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function NavBarDIR() {
    const [isSUBDropdownOpen, setSubDropdownOpen] = useState(false);
    const [isDemandesSUBDropdownOpen, setDemandesSubDropdownOpen] = useState(false);
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
    const navigate = useNavigate()
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    return (
        <div>
            <br></br>   <br></br>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/homed">
                            <span className="menu-title">acceuil</span>
                            <i className="mdi mdi-home menu-icon" />
                        </a>
                    </li>





                    <li className="nav-item">
                        <a className="nav-link" href="/alimenter_c">
                            <span className="menu-title">alimenter caisse</span>
                            <i className="mdi mdi-cash
 menu-icon" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/liste_clientD">
                            <span className="menu-title">clients</span>
                            <i className="mdi mdi-account-multiple-outline menu-icon" />
                        </a>
                    </li>
                    <li className="nav-item"><a className="nav-link"><i onClick={() => setDemandesDropdownOpen(!isDemandesDropdownOpen)}>
                        <span className="menu-title">les demandes de prets         </span>
                        <i className="menu-arrow" />

                    </i></a>
                        {isDemandesDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/liste_dattente'><i className="fa fa-edit" />lesDemandes En attente </a>


                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/liste_dapprouver'><i className="fa fa-edit" />les Demandes Approuver</a>


                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/liste_dr'><i className="fa fa-edit" />les Demandes Rejeter </a>


                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/liste_darchiver'><i className="fa fa-edit" />les Demandes Archiver </a>


                                </li>
                            </ul>
                        )}
                    </li>
                    {/* <li><a href='/liste_g'><i className="fa fa-desktop" /> liste garant<span className="fa fa-chevron-down" /></a></li> */}
                    <li className="nav-item"><a className="nav-link"><i onClick={() => setPretsDropdownOpen(!isPretsDropdownOpen)}>
                        <span className="menu-title">  les Prets</span>
                        <i className="menu-arrow" />
                    </i></a>
                        {isPretsDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/listepret_cour'><i className="fa fa-edit" />les Prets en cours</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/listepret_decaisser'><i className="fa fa-edit" />les Prets décaisser</a>
                                </li>




                            </ul>
                        )}
                    </li>


                    <li className="nav-item"><a className="nav-link"><i onClick={() => setPojetsDropdownOpen(!isProjetDropdownOpen)}>
                        <span className="menu-title">  les Projets</span>
                        <i className="menu-arrow" />
                    </i> </a>
                        {isProjetDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/l_p'><i className="fa fa-edit" />les projets en cours</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/p_encours'><i className="fa fa-edit" />les projets Décaissés</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/liste_r'><i className="fa fa-edit" />les projets remboursés </a>

                                </li>
                            </ul>
                        )}
                    </li>


                    <li className="nav-item"><a className="nav-link"><i onClick={() => setDemandesPDropdownOpen(!isDemandesPDropdownOpen)}>
                        <span className="menu-title"> les  candidatures projets</span>
                        <i className="menu-arrow" />

                    </i></a>
                        {isDemandesPDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/l_cattente'><i className="fa fa-edit" />les candidatures en attente</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/l_ca'><i className="fa fa-edit" />les candidatures approuver</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/l_carejeter'><i className="fa fa-edit" />les candidatures Rejeter</a>
                                </li>


                            </ul>
                        )}
                    </li>

                    <li className="nav-item"><a className="nav-link"><i onClick={() => setDemandesSubDropdownOpen(!isDemandesSUBDropdownOpen)}>
                        <span className="menu-title">  les demandes de subvention </span>
                        <i className="menu-arrow" />
                    </i></a>
                        {isDemandesSUBDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/subAPP'><i className="fa fa-edit" />les subventions approuver</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/subATT'><i className="fa fa-edit" />les subventions en attente</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/subREJ'><i className="fa fa-edit" />les subventions Rejeter</a>
                                </li>


                            </ul>
                        )}
                    </li>

                    <li className="nav-item"><a className="nav-link"><i onClick={() => setSubDropdownOpen(!isSUBDropdownOpen)}>
                        <span className="menu-title">  les  subventions</span>
                        <i className="menu-arrow" />
                    </i></a>
                        {isSUBDropdownOpen && (
                            <ul>
                                <li className="nav-item"> <a className="nav-link " href='/subENC'><i className="fa fa-edit" />Les suvbentions en cours</a>
                                </li>
                                <li className="nav-item"> <a className="nav-link " href='/subDEC'><i className="fa fa-edit" />les subventions decaissé</a>
                                </li>


                            </ul>
                        )}
                    </li>

                    <li><a href='/ec'><i className="fa fa-desktop" /> </a></li>

                    <li className="nav-item">
                        <a className="nav-link" href="/ec">
                            <span className="menu-title">evenements caisse </span>
                            <i className="mdi mdi-chart-line menu-icon" />
                        </a>
                    </li>

                    {/* <li><a href='/liste_garant'><i className="fa fa-bar-chart-o" />Liste des garants </a></li> */}




                    {/* <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <span className="menu-title">   Liste des Demandes de subventions
</span>    <i className="menu-arrow" />
                    <i className="mdi mdi-medical-bag menu-icon" />
                </a>
                <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link "href='/liste_attente'>Liste des Demandes En attente </a></li>
                        <li className="nav-item"> <a className="nav-link" href='/listeda'>Liste des Demandes Approuver</a></li>
                        <li className="nav-item"> <a className="nav-link" href='/listed'>Liste des Demandes Rejeter </a></li>

                    </ul>
                </div>
            </li> */}

                    {/* <li className="nav-item">
                <a className="nav-link" href="../../pages/icons/mdi.html">
                    <span className="menu-title">Icons</span>
                    <i className="mdi mdi-contacts menu-icon" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../../pages/forms/basic_elements.html">
                    <span className="menu-title">Forms</span>
                    <i className="mdi mdi-format-list-bulleted menu-icon" />
                </a>
            </li>

            <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                        <span className="menu-title">Sample Pages</span>
                        <i className="menu-arrow" />
                        <i className="mdi mdi-medical-bag menu-icon" />
                    </a>
                    <div className="collapse" id="general-pages">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="../../pages/samples/blank-page.html"> Blank Page </a></li>
                            <li className="nav-item"> <a className="nav-link" href="../../pages/samples/login.html"> Login </a></li>
                            <li className="nav-item"> <a className="nav-link" href="../../pages/samples/register.html"> Register </a></li>
                            <li className="nav-item"> <a className="nav-link" href="../../pages/samples/error-404.html"> 404 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="../../pages/samples/error-500.html"> 500 </a></li>
                        </ul>
                    </div>
                </li>
            <li className="nav-item">
                <a className="nav-link" href="../../pages/charts/chartjs.html">
                    <span className="menu-title">Charts</span>
                    <i className="mdi mdi-chart-bar menu-icon" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="../../pages/tables/basic-table.html">
                    <span className="menu-title">Tables</span>
                    <i className="mdi mdi-table-large menu-icon" />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                    <span className="menu-title">Sample Pages</span>
                    <i className="menu-arrow" />
                    <i className="mdi mdi-medical-bag menu-icon" />
                </a>
                <div className="collapse" id="general-pages">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/blank-page.html"> Blank Page </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/login.html"> Login </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/register.html"> Register </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/error-404.html"> 404 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="../../pages/samples/error-500.html"> 500 </a></li>
                    </ul>
                </div>
            </li> */}

                </ul>
            </nav>;
        </div>
    )
}



