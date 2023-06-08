import React, { useEffect, useState } from 'react';
import Navbar from '../PersonnelAgence/Navbar';
import Sidebar from '../PersonnelAgence/Sidebar';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';
import axios from 'axios';
import SidebarAdmin from './SidebarAdmin';
import HeaderSiege from '../PersonelSiege/HeaderSiege';

const Liste_personnels = () => {
    const [data, setData] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const navigate = useNavigate()

    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    const [currentPage, setCurrentPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(9);

    const [totalPages, setTotalPages] = useState(0);

    const [users, setUsers] = useState([]);


    const [search, setSearch] = useState('');

    const uc = new userService()



    const idg = localStorage.getItem('id_agence')
    console.log("hhhh", localStorage.getItem('id_agence'))
    useEffect(() => {

        const token = localStorage.getItem('token');

        console.log(token);
        axios.get('http://localhost:8080/USER/GETALLUSERS', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            console.log("result", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        }).catch((err) => {

            console.log(err);

        })
    }, [rowsPerPage]);

    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.agence.id == idg) {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("amal", renderedArray);

    /*********view client */

    const loadUsers = () => {

        uc.getAl().then((res) => {
            console.log("heere", res.data);
            setData(res.data);

        })
    }
    const viewuserFunction = (id) => {

        navigate("/view_personnel/" + id, { state: { id: id } })



    }

    /******* add demande */



    //   const AddProjetFunction = (id) => {

    //     navigate("/projetAdd/" + id, { state: { id: id } })



    // }



    /******update user */

    // const update = (id) => {

    //     navigate("/edit_c/" + id, { state: { id: id } })



    // }

    // /***********delete user */

    // const deleteFunction = (id) => {


    //     Swal.fire({

    //         title: "vous etes sur ??",

    //         text: "vous ne pourrerz pas pas revenir en arriere",

    //         icon: "avertissement",

    //         showCancelButton: true,

    //         confirmButtonColor: "#3085D6",

    //         cancelButtonColor: "#d33",

    //         confirmButtonText: "oui ,supprimez le!",

    //     }).then((result) => {

    //         if (result.isConfirmed) {

    //             uc.removepersonnel(id).then((res) => {

    //                 console.log(res.status);

    //                 console.log("response", res);



    //                 if (res.status === 200) {

    //                     loadUsers()

    //                     Swal.fire("supprimé", "votre personnel a ete supprimé", "succes")



    //                 }

    //             });

    //         }



    //     });

    // };



    /************pagination des pages récuperation de data  */

    const handlePageChange = (event) => {

        setCurrentPage(Number(event.target.id));

    }



    const renderTableRows = () => {

        // const filteredData = newArray.filter((row) => {

        //     const { id_client, nom_c, prenom_c, cin_c } = row;

        //     const lowerSearchTerm = search.toLowerCase();



        //     // const startIndex = (currentPage - 1) * rowsPerPage;

        //     // const endIndex = startIndex + rowsPerPage;



        //     return (

        //         //id_client.toLowerCase().includes(lowerSearchTerm) ||

        //         nom_c.toLowerCase().includes(lowerSearchTerm) ||

        //         prenom_c.toLowerCase().includes(lowerSearchTerm) ||

        //         cin_c.toString().toLowerCase().includes(lowerSearchTerm)

        //         //numCompte.toLowerCase().includes(lowerSearchTerm)

        //     )



        // })

        const startIndex = (currentPage - 1) * rowsPerPage;

        const endIndex = startIndex + rowsPerPage;



        return newArray.slice(startIndex, endIndex).map((row) => (

            <tr key={row.id}>


                <td></td>
                <td>{row.id}</td>
                <td>{row.firstname}</td>

                <td>{row.lastname}</td>
                <td>{row.role}</td>

                <td>{row.agence.nom_agence}</td>




                <span onClick={(e) => { viewuserFunction(row.id) }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#7FFFD4" class="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                </span>

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

    return <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <HeaderSiege />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <SidebarAdmin />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header">

                       
                    </div>
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Personnels</h4>
                                    <a href='ajouter_personnel'><i className="mdi mdi-plus-circle-multiple-outline" style={{ fontSize: 40, marginLeft: 960 }}></i>  </a>

                                    <table className="table ">
                                        <thead>
                                            <tr className="headings">

                                                <th>

                                                    <input type="checkbox" id="check-all" className="flat" />

                                                </th>

                                                <th className="column-title">Id user </th>

                                                <th className="column-title">Nom  </th>

                                                <th className="column-title">Prénom </th>

                                                <th className="column-title">Role </th>

                                                <th className="column-title">Nom agence </th>

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



export default Liste_personnels;