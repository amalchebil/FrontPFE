import React, { useEffect, useState } from 'react';



import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom"
import Events from '../services/Events';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
import Sidebar from './Sidebar';
const Evente_caisseagence = () => {
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





        us.getAllCaisse().then((res) => {





            console.log("here", res.data);

            setData(res.data);

            setTotalPages(Math.ceil(res.data.length / rowsPerPage));







        }).catch(error => console.log(error));

    }, [rowsPerPage]);




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







    const handlePageChange = (event) => {

        setCurrentPage(Number(event.target.id));

    }

    const handleChange = (event) => {

        setFilterDate(event.target.value);

    };



    const renderTableRows = () => {

        const filteredData = data.filter((row) => {



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

                <td>{row.client1.cin_c}</td>

                <td>{row.agence2.nom_agence}

                </td>



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



    return <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <HeaderSiege />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <Sidebar />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">

                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">evenements caisse</h4>


                                    <table className="table ">
                                        <thead>
                                            <tr>
                                            <th className="column-title">Id evenement  </th>
                                                <th className="column-title">type evenement  </th>

                                                <th className="column-title">date evenement </th>

                                                <th className="column-title">montant  </th>

                                                <th className="column-title">num cin du client</th>

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

                {/* partial */}
            </div>
            {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
    </div>
}


export default Evente_caisseagence;