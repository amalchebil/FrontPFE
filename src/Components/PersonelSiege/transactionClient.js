import React, { useEffect, useState } from 'react';



import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom"
import HeaderSiege from './HeaderSiege';
import NavbarSIEGE from './NavBarSIEGE';


import Events from '../services/Events';

export default function EventClientS() {
    const[isSUBDropdownOpen,setSubDropdownOpen]= useState(false);
    const[isDemandesSUBDropdownOpen,setDemandesSubDropdownOpen]= useState(false);
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);



    const [openModal, setOpenModal] = useState(false);

    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [totalPages, setTotalPages] = useState(0);

    const [client, setclient] = useState([]);

    const navigate = useNavigate()

    const [filterDate, setFilterDate] = useState('');

    const [search, setSearch] = useState('');

    const filteredDate = data.filter((item) => {

        return item.date_event.includes(filterDate);

    });

    useEffect(() => {





        us.getAllClient().then((res) => {





            console.log("here", res.data);

            setData(res.data);

            setTotalPages(Math.ceil(res.data.length / rowsPerPage));







        }).catch(error => console.log(error));

    }, [rowsPerPage]);



    const [selectedId, setSelectedId] = useState("");

    const [selectedIdDeemande, setSelectedIddemande] = useState("");

    const [selectedpret, setpret] = useState("");

    const [selectedtranche, setTranche] = useState("");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { id } = useParams();

    function toggleDropdown() {

        setIsDropdownOpen(!isDropdownOpen);

    }

    const logout = () => {



        console.log("hhhhhhh")

        localStorage.removeItem('token');

        localStorage.removeItem('role');

        navigate('/', { replace: true });

    }

    const us = new Events()



    const newArray = []

    const renderedArray = data.filter((item) => {

        if (item.client2.id_client == id) {

            console.log('item', item);

            newArray.push(item);

            console.log('reee', newArray);

        }

    });

    console.log("hajer", renderedArray);



    const handlePageChange = (event) => {

        setCurrentPage(Number(event.target.id));

    }

    const handleChange = (event) => {

        setFilterDate(event.target.value);

    };



    const renderTableRows = () => {

        const filteredData = newArray.filter((row) => {



            const { date_event } = row;

            const lowerSearchTerm = filterDate.toLowerCase();



            // const startIndex = (currentPage - 1) * rowsPerPage;

            // const endIndex = startIndex + rowsPerPage;



            return (



                date_event.toString().toLowerCase().includes(lowerSearchTerm)

            )

        })

        const startIndex = (currentPage - 1) * rowsPerPage;

        const endIndex = startIndex + rowsPerPage;



        return filteredData.slice(startIndex, endIndex).map(row => (

            <tr key={row.id_event}>

                <td>{row.id_event}</td>

                <td>{row.type_event}</td>

                <td>{row.date_event}</td>

                <td>{row.montant_event}</td>

                <td>{row.agence1.nom_agence

                }</td>



            </tr>

        ));

    }



    const renderPagination = () => {

        const pageNumbers = [];



        for (let i = 1; i <= totalPages; i++) {

            pageNumbers.push(i);

        }



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
                                    <h4 className="card-title">Clients</h4>


                                    <table className="table ">
                                        <thead>
                                            <tr>
                                            <th className="column-title">type evenement </th>

<th className="column-title">date evenement </th>

<th className="column-title">montant  </th>

<th className="column-title">nom agence</th>


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