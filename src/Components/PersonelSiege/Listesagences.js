import React, { useEffect, useState } from 'react';
import agenceService from '../services/agenceService';
import { useNavigate } from 'react-router-dom';
import NavbarSIEGE from './NavBarSIEGE';
import HeaderSiege from './HeaderSiege';


const Listesagences = () => {
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const uc = new agenceService()
    useEffect(() => {
        uc.getAll().then((res) => {
            console.log("heere", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        })
            .catch(error => console.log(error));
    }, [rowsPerPage]);

    /********get  */
    const loadUsers = () => {

        uc.getAll().then((res) => {
            console.log("heere", res.data);
            setData(res.data);

        })
    }



    /************pagination des pages récuperation de data  */
    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderTableRows = () => {
        const filteredData = data.filter((row) => {
            const { gouvernorat } = row;
            const lowerSearchTerm = search.toLowerCase();



            return (
                //id_client.toLowerCase().includes(lowerSearchTerm) ||
                gouvernorat.toLowerCase().includes(lowerSearchTerm)

            )
        })
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return filteredData.slice(startIndex, endIndex).map((row) => (
            <tr key={row.id}>
               
                <td>{row.nom_agence}</td>
                <td>{row.gouvernorat}</td>
                <td>{row.caisse}</td>





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
                <div className="page-header">
                    <h3 className="page-title"> Basic Tables </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Tables</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">

                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">le agences</h4>


                                <table className="table ">
                                    <thead>
                                        <tr>
                                        <th className="column-title">Nom_Agence </th>
                                                        <th className="column-title">Gouvernorat</th>
                                                        <th className="column-title">caisse </th>

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
}



export default Listesagences;