import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import demandeService from '../../services/demandeService'
import Swal from 'sweetalert2';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';

const Liste_demandepret = () => {
    ;

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    const [filterDate, setFilterDate] = useState('');
    const [search, setSearch] = useState('');
    // const filteredDate = data.filter((item) => {
    //     return item.dateAttribut.includes(filterDate);
    // });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.status == "En_attente" && item.client.agc.id == localStorage.getItem('id_agence')) {
            console.log('item', item.client.agc.id);
            newArray.push(item);
            console.log('r', newArray);

        }
    });
    console.log("hajer", renderedArray);
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    const handleChange = (event) => {
        setFilterDate(event.target.value);
    };
    const us = new demandeService()

    useEffect(() => {

        const token = localStorage.getItem('token');
   
        console.log(token);
        axios.get('http://localhost:8080/DEMANDEPRET/GETALLDEMANDE', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {

            console.log("result", res.data);

            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        }).catch((err) => {

            console.log(err);

        })





    }, [rowsPerPage]);

    const viewuserFunction = (id) => {
        navigate("/view_demandepret/" + id, { state: { id: id } })


    }

    const update = (id) => {
        navigate("/modifier_demande/" + id, { state: { id: id } })
    }
    const deleteFunction = (id) => {
        // swal est une fenetre 
        Swal.fire({
            title: "vous etes sur ??",
            text: "vous ne pourrerz pas pas revenir en arriere",
            icon: "avertissement",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "oui ,supprimez le!",
        }).then((result) => {
            if (result.isConfirmed) {

                us.removedemande(id).then((res) => {
                    console.log(res.status);
                    console.log("response", res);

                    if (res.status === 200) {
                        // loadUsers()
                        Swal.fire("supprimé", "votre client a ete supprimé", "succes")


                    }
                });
            }

        });
    };


    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }
    // <input type="text" placeholder="Filtrer par date" onChange={handleChange} />
    // <ul>
    //     {filteredData.map((item) => (
    //         <li key={item.type_pret}>{item.echeance}</li>
    //     ))}
    // </ul>
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
                <td>{row.client.cin_c}</td>
                <td>{row.id_demande}</td>
                <td>{row.type_pret}</td>
                <td><label class="badge badge-warning">{row.status}</label> </td>
                <td>{row.dateAttribut}</td>
                <td>
                    <span
                        onClick={(e) => { update(row.id_demande) }}

                    >
                        <i className=" mdi mdi-border-color" style={{ color: '#FFCC00', fontSize: '24px' }}></i>
                    </span>
                </td>
                <td>
                    <span onClick={(e) => { viewuserFunction(row.id_demande) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#FFCC00" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </span>
                </td>
                <td>
                    <span onClick={(e) => { deleteFunction(row.id_demande) }}>  <i class="mdi mdi-delete" style={{ color: 'red', fontSize: '24px' }}></i>

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
                                <li className="breadcrumb-item">Demandes de prets en attente</li>


                            </ol>
                        </nav>
                    </div>
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Demandes en attente</h4>

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


export default Liste_demandepret;