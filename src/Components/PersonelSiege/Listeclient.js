

import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom"
import HeaderSiege from './HeaderSiege';import NavbarSIEGE from './NavBarSIEGE';

import userService from '../services/userService';

const Listeclient = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const[isSUBDropdownOpen,setSubDropdownOpen]= useState(false);
    const[isDemandesSUBDropdownOpen,setDemandesSubDropdownOpen]= useState(false);
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
    const logout = () => {
  
  
        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const uc = new userService()
    useEffect(() => {
        uc.getAll().then((res) => {
            console.log("heere", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        })
            .catch(error => console.log(error));
    }, [rowsPerPage]);

    /********get  */

    /*********view client */
    const viewuserFunction = (id) => {
        navigate("/profile/" + id, { state: { id: id } })


    }
    /******* add demande */




    /************pagination des pages récuperation de data  */
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderTableRows = () => {
        const filteredData = data.filter((row) => {
            console.log("dd", data);
            const { id_client, nom_c, prenom_c, cin_c } = row;
            const lowerSearchTerm = search.toLowerCase();


            return (
                //id_client.toLowerCase().includes(lowerSearchTerm) ||
                nom_c.toLowerCase().includes(lowerSearchTerm) ||
                prenom_c.toLowerCase().includes(lowerSearchTerm) ||
                cin_c.toString().toLowerCase().includes(lowerSearchTerm)
                //numCompte.toLowerCase().includes(lowerSearchTerm)
            )

        })
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        return filteredData.slice(startIndex, endIndex).map((row) => (
            <tr key={row.id}>

               

                <td>{row.id_client}</td>
                <td>{row.cin_c}</td>
                <td>{row.nom_c}</td>
                <td>{row.prenom_c}</td>
                <td>{row.agc.nom_agence}</td>

              <td> <button type="button" class="btn btn-info btn-fw" style={{ fontSize: 10 }} onClick={(e) => { viewuserFunction(row.id_client) }}>voir</button></td> 

            </tr>

        ));
    }


    const renderPagination = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        /************end pagination des pages  */

        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a id={number} onClick={handlePageChange} className={currentPage === number ? 'page-link active' : 'page-link'}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }

    return  <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <HeaderSiege />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <NavbarSIEGE />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Clients</h4>


                                    <table className="table ">
                                        <thead>
                                            <tr>
                                                <th className="column-title">Id Client </th>

                                                <th className="column-title">Cin du client  </th>

                                                <th className="column-title">Nom du client </th>

                                                <th className="column-title">Prénom du client </th>
                                                <th className="column-title">nom Agence</th>


                                                <th className="column-title">actions </th>

                                            </tr>
                                        </thead>
                                        <tbody>


                                            {renderTableRows()}
                                        </tbody>
                                        {renderPagination()}
                                    </table>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                {/* content-wrapper ends */}
                {/* partial:../../partials/_footer.html */}
                <footer className="footer">
                    <div className="container-fluid d-flex justify-content-between">
                        <span className="text-muted d-block text-center text-sm-start d-sm-inline-block">Copyright © bootstrapdash.com 2021</span>
                        <span className="float-none float-sm-end mt-1 mt-sm-0 text-end"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin template</a> from Bootstrapdash.com</span>
                    </div>
                </footer>
                {/* partial */}
            </div>
            {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
    </div>
    {/* container-scroller */ }
    {/* plugins:js */ }
    {/* endinject */ }
    {/* Plugin js for this page */ }
    {/* End plugin js for this page */ }
    {/* inject:js */ }
    {/* endinject */ }
    {/* Custom js for this page */ }
    {/* End custom js for this page */ }

}
    




export default Listeclient;