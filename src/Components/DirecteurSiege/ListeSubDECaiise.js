import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import SubSerivce from '../services/SubService';
import axios from 'axios';
import NavBarDIR from './NavBarDIR';

import HeaderSiege from '../PersonelSiege/HeaderSiege';

export default function ListeSubDECaiise() {
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

    const loadUsers = () => {


        us.getAl().then((res) => {

            console.log("heere", res.data);

            setData(res.data);


        })

    }

    const us = new SubSerivce()

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8080/SUBVENTION/GETALLSubventionS', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {

            console.log("result", res.data);

            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        }).catch((err) => {

            console.log(err);

        })
        const newArray = []
        const renderedArray = data.filter((item) => {
            if (item.statuP == " Decaisser" ) {
                console.log('item', item);
                newArray.push(item);
                console.log('r', newArray);
            }
        });

    
    }, [rowsPerPage]);



    const viewuserFunction = (id) => {

        navigate("/viewd/" + id, { state: { id: id } })


    }


    const update = (id) => {

        alert("hhh", id)

        navigate("/edit_demande/" + id, { state: { id: id } })

    }


    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.statuS == "Decaisser" ) {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("hajer", renderedArray);
    // const decaisserFunction = (itemId, clientId,montant_p) => {

       
    //     const updatedItems = data.map((row) => {
    //         if (row.pretId === itemId) {
    //             return { ...row, disabled: true };
    //         }
    //         return row;
    //     });
    //     setData(updatedItems);
    //     const token = localStorage.getItem('token');

    //     axios.post(`http://localhost:8080/transfert/Subvention/montant/${clientId}/${itemId}?montant=${montant_p}`,
    //         {
    //             "montant": montant_p
    //         },
    //         { headers: { "Authorization": `Bearer ${token}` } }
    //     ).then((res) => {
    //         console.log("c bon", res.data)
    //         loadUsers()
    //     }).catch((err) => {

    //         console.log(err);

    //     })
    //     console.log(data)

    //     // const id_agence=res.agc.id;

    //     // console.log(id_agence)


    // };


    const handlePageChange = (event) => {

        setCurrentPage(Number(event.target.id));

    }


    const renderTableRows = () => {

        const startIndex = (currentPage - 1) * rowsPerPage;

        const endIndex = startIndex + rowsPerPage;


        return newArray.slice(startIndex, endIndex).map(row => (

            <tr key={row.id}>

            
                <td>{row.id}</td>
                <td>{row.client.id_client}</td>

                <td>{row.montant_sub}</td>


              <td>  <button type="button" class="btn btn-round btn-info" > <td>{row.statuS}</td></button></td>

                <td>{row.date_creation}</td>


                {/* <button


                    className="btn btn-success"

                    onClick={(e) => { viewuserFunction(row.client.id_client) }}

                >




                </button> */}


                

                {/* <button

                    className="btn btn-success" onClick={(e) => { decaisserFunction(row.id,row.client.id_client,row.montant_sub) }}
                    disabled={row.disabled}

                > <i className="fa fa-trash"></i>

                </button> */}

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
                                <h4 className="card-title">les subventions decaissé</h4>


                                <table className="table ">
                                    <thead>
                                        <tr>
                                        <th className="column-title">Id_client </th>

<th className="column-title">ID_Demande </th>

<th className="column-title">Type </th>

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


