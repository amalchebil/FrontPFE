import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";


import garantService from '../../services/garantService';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Liste_garant = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate()

    const us = new garantService()
    useEffect(() => {
        us.getAl().then((res) => {
            console.log("heere", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        })
            .catch(error => console.log(error));
    }, [rowsPerPage]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }


    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    const loadUsers = () => {

        us.getAl().then((res) => {
            console.log("heere", res.data);
            setData(res.data);

        })
    }
    const viewuserFunction = (id) => {
        navigate("/view_garant/" + id, { state: { id: id } })


    }

    const update = (id) => {
        navigate("/edit_garant/" + id, { state: { id: id } })
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
                        loadUsers()
                        Swal.fire("supprimé", "votre client a ete supprimé", "succes")


                    }
                });
            }

        });
    };



    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderTableRows = () => {
        const filteredData = data.filter((row) => {
            const { nom_g, demande, id_demande } = row;
            const lowerSearchTerm = search.toLowerCase();
            // console.log('cin_c:', demande.client.cin_c);
            //console.log('id_demande:', demande.id_demande);

            return (
                //demande.id_demande.toString().toLowerCase().includes(lowerSearchTerm) ||
                nom_g.toLowerCase().includes(lowerSearchTerm) ||
                demande.client.cin_c.toString().toLowerCase().includes(lowerSearchTerm)

            );



        })
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return filteredData.slice(startIndex, endIndex).map((row) => (

            <tr key={row.id}>
                <td></td>
                <td>{row.cin_g}</td>
                {/* <td>{row.demande.id_demande}</td> */}
                {row.demandePret.id_demande}
                <td>{row.nom_g}</td>
                <td>{row.relation_g}</td>

                <td>
                    <span
                        onClick={(e) => { update(row.id_garant) }}

                    >
                        <i className=" mdi mdi-border-color" style={{ color: '#6A5ACD', fontSize: '24px' }}></i>
                    </span>
                </td>
                <td>
                    <span onClick={(e) => { viewuserFunction(row.id_garant) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#6A5ACD" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </span>
                </td>
                <td>
                    <span onClick={(e) => { deleteFunction(row.id_garant) }}>  <i class="mdi mdi-delete" style={{ color: 'red', fontSize: '24px' }}></i>

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
                                

                            </ol>
                        </nav>
                    </div>
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Garants</h4>

                                    <table className="table ">
                                        <thead>
                                            <tr className="headings">
                                                <th>
                                                    <input type="checkbox" id="check-all" className="flat" />
                                                </th>
                                                <th className="column-title">Cin_client </th>
                                                <th className="column-title">ID_Demande </th>
                                                <th className="column-title">nom garant </th>
                                                <th className="column-title">Relation</th>

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



export default Liste_garant;