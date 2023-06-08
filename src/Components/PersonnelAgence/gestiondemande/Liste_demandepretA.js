import React, { useEffect, useState } from 'react';

import demandeService from '../../services/demandeService';
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Liste_demandepretA = () => {
    const id_client = 3
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
        return item.dateAttribut.includes(filterDate);
    });

    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.status == "Approuver" && item.client.agc.id == localStorage.getItem('id_agence')) {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("hajer", renderedArray);

    const handleChange = (event) => {
        setFilterDate(event.target.value);
    };
    const us = new demandeService()
    useEffect(() => {
        us.getAl().then((res) => {

            console.log("here", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));


        })
            .catch(error => console.log(error));
    }, [rowsPerPage]);



    const viewuserFunction = (id) => {
        navigate("/view_demandepret/" + id, { state: { id: id } })


    }




    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderTableRows = () => {
        const filteredData = newArray.filter((row) => {

            const { dateAttribut } = row;
            const lowerSearchTerm = filterDate.toLowerCase();

            // const startIndex = (currentPage - 1) * rowsPerPage;
            // const endIndex = startIndex + rowsPerPage;

            return (

                dateAttribut.toString().toLowerCase().includes(lowerSearchTerm)
            )
        })
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        return filteredData.slice(startIndex, endIndex).map(row => (
            <tr key={row.id}>
                <td></td>
                <td>{row.client.id_client}</td>
                <td>{row.id_demande}</td>
                <td>{row.type_pret}</td>
                <td><label class="badge badge-success">{row.status}</label> </td>
                <td>{row.dateAttribut}</td>


                <td>
                    <span onClick={(e) => { viewuserFunction(row.id_demande) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#00CED1" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </span>
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
        <HeaderSiege/>
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <Sidebar />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header">

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Demandes de prets approuvés</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Demandes approuvés</h4>
                                    <div></div>
                                    <table className="table ">
                                        <thead>
                                            <tr className="headings">
                                                <th>
                                                    <input type="checkbox" id="check-all" className="flat" />
                                                </th>
                                                <th className="column-title">Cin_client </th>
                                                <th className="column-title">ID_Demande </th>
                                                <th className="column-title">Type </th>
                                                <th className="column-title">Status</th>
                                                <th className="column-title">Date de création</th>
                                                <th className="column-title">actions </th>

                                                <th className="bulk-actions" colSpan={7}>
                                                    <a className="antoo" style={{ color: '#fff', fontWeight: 500 }}>Bulk Actions ( <span className="action-cnt"> </span> ) <i className="fa fa-chevron-down" /></a>
                                                </th>

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



export default Liste_demandepretA;