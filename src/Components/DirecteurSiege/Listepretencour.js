import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import pretService from '../services/pretService';
import axios from 'axios';
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
const Listepretencour = () => {
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
    const [openModal, setOpenModal] = useState(false);

    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [totalPages, setTotalPages] = useState(0);

    const [users, setUsers] = useState([]);

    const navigate = useNavigate()

    const [filterDate, setFilterDate] = useState('');

    const [search, setSearch] = useState('');

    const handleChange = (event) => {

        setFilterDate(event.target.value);

    };


    const us = new pretService()

    useEffect(() => {

        us.getAl().then((res) => {
            console.log("here", res.data);

            setData(res.data);

            setTotalPages(Math.ceil(res.data.length / rowsPerPage));

        })
            .catch(error => console.log(error));

    }, [rowsPerPage]);



    const viewuserFunction = (id) => {

        navigate("/ViewP/" + id, { state: { id: id } })


    }





    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.statuP == "En_cour") {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("hajer", renderedArray);



    const handlePageChange = (event) => {

        setCurrentPage(Number(event.target.id));

    }


    const renderTableRows = () => {

        const startIndex = (currentPage - 1) * rowsPerPage;

        const endIndex = startIndex + rowsPerPage;


        return newArray.slice(startIndex, endIndex).map(row => (

            <tr key={row.id}>

                <td>{row.id_pret}</td>
                <td>{row.client.id_client}</td>

                <td>{row.client.cin_c}</td>


           <td>  <button type="button" class="btn btn-round btn-info" > <td>{row.statuP}</td></button></td> 

                <td>{row.date_creation}</td>


                <td> <button


class="btn btn-gradient-info btn-rounded btn-fw"
                    onClick={(e) => { viewuserFunction(row.id_pret) }}

                >


view

             </button></td>

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
        <NavBarDIR />
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
                                <h4 className="card-title">les prets en cours</h4>


                                <table className="table ">
                                    <thead>
                                        <tr>
                                        <th className="column-title">Id Pret </th>

<th className="column-title">Id_client </th>

<th className="column-title">cin client </th>


<th className="column-title">Status</th>

<th className="column-title">Date de création</th>

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
           
            {/* partial */}
        </div>
        {/* main-panel ends */}
    </div>
    {/* page-body-wrapper ends */}
</div>

}

export default Listepretencour;