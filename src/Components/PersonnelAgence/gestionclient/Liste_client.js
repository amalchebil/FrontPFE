import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from "../../services/userService"
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
import './upload.css';

const Liste_client = () => {
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
    const [data, setData] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const navigate = useNavigate()

    const view = () => {
        navigate("/ajouter_c")

    }
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
        axios.get('http://localhost:8080/Client/GETALLClient', {

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
        if (item.agc.id == localStorage.getItem('id_agence')) {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("hajer", renderedArray);

    /*********view client */

    const loadUsers = () => {
        uc.getAl().then((res) => {
            console.log("heere", res.data);
            setData(res.data);

        })
    }
    const viewuserFunction = (id) => {
        navigate("/view_client/" + id, { state: { id: id } })

    }

    /******* add demande */

    const AddDemandeFunction = (id) => {

        navigate("/ajouter_demande/" + id, { state: { id: id } })



    }
    // const AddSub = (id) => {

    //     navigate("/ajouter_sub/" + id, { state: { id: id } })



    // }




    /******update user */

    const update = (id) => {

        navigate("/modifier_client/" + id, { state: { id: id } })



    }

    /***********delete user */

    const deleteFunction = (id) => {

        // swal est une fenetre

        Swal.fire({

            title: "vous etes sur ??",

            text: "Le client va etre supprimer",

            icon: "avertissement",

            showCancelButton: true,

            confirmButtonColor: "#3085D6",

            cancelButtonColor: "#d33",

            confirmButtonText: "Supprimer",

        }).then((result) => {

            if (result.isConfirmed) {



                uc.remove(id).then((res) => {

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



    /************pagination des pages récuperation de data  */

    const handlePageChange = (event) => {

        setCurrentPage(Number(event.target.id));

    }



    const renderTableRows = () => {

        const filteredData = newArray.filter((row) => {

            const { id_client, nom_c, prenom_c, cin_c } = row;

            const lowerSearchTerm = search.toLowerCase();



            // const startIndex = (currentPage - 1) * rowsPerPage;

            // const endIndex = startIndex + rowsPerPage;



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

                <td>
                    <span
                        onClick={(e) => { update(row.id_client) }}

                    >
                        <i className=" mdi mdi-border-color" style={{ color: '#007ACC', fontSize: '24px' }}></i>
                    </span>
                </td>
                <td>
                    <span onClick={(e) => { viewuserFunction(row.id_client) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#007ACC" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                    </span>
                </td>
                <td>
                    <span onClick={(e) => { deleteFunction(row.id_client) }}>  <i class="mdi mdi-delete" style={{ color: 'red', fontSize: '24px' }}></i>

                    </span>

                </td>
                <td>
                    

                    <button type="button" class="button"  onClick={(e) => { AddDemandeFunction(row.id_client) }}>
 
 <path fill="white" d="M23.15 2.587L18.21 0.210001C17.9308 0.075557 17.6167 0.031246 17.3113 0.083204C17.0058 0.135162 16.724 0.280818 16.505 0.500001L7.04499 9.13L2.92499 6.002C2.73912 5.86101 2.50976 5.78953 2.27669 5.79994C2.04363 5.81035 1.82156 5.902 1.64899 6.059L0.326993 7.261C0.223973 7.35465 0.141644 7.46878 0.0852761 7.59608C0.0289081 7.72339 -0.00025659 7.86106 -0.000350724 8.00028C-0.000444857 8.1395 0.0285336 8.27721 0.0847294 8.40459C0.140925 8.53197 0.2231 8.64621 0.325993 8.74L3.89899 12L0.325993 15.26C0.2231 15.3538 0.140925 15.468 0.0847294 15.5954C0.0285336 15.7228 -0.000444857 15.8605 -0.000350724 15.9997C-0.00025659 16.1389 0.0289081 16.2766 0.0852761 16.4039C0.141644 16.5312 0.223973 16.6454 0.326993 16.739L1.64999 17.94C1.82256 18.097 2.04463 18.1887 2.27769 18.1991C2.51076 18.2095 2.74012 18.138 2.92599 17.997L7.04599 14.869L16.506 23.499C16.7248 23.7182 17.0064 23.8639 17.3117 23.9159C17.6171 23.9679 17.931 23.9235 18.21 23.789L23.152 21.412C23.4062 21.2893 23.6207 21.0973 23.7707 20.8581C23.9207 20.619 24.0002 20.3423 24 20.06V3.939C24 3.65647 23.9203 3.37967 23.7699 3.14048C23.6195 2.90129 23.4046 2.70943 23.15 2.587ZM18.004 17.448L10.826 12L18.004 6.552V17.448Z"></path>
 
<p class="text">Ajouter Demande</p>
</button>
                </td>
                {/* <td>
                    <button type="button" class="btn btn-round btn-primary" style={{ fontSize: 10 }} onClick={(e) => { AddSub(row.id_client) }}>ajouter demande subvention</button>
                </td> */}

            </tr >



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
        <HeaderSiege/>
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <Sidebar />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header">

                       
                    </div>
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Clients</h4>
                                    <a href='ajouter_client'><i className="mdi mdi-plus-circle-multiple-outline" style={{ fontSize: 40, marginLeft: 960 }}></i>  </a>

                                    <table className="table ">
                                        <thead>
                                            <tr>
                                                <th className="column-title">Id Client </th>

                                                <th className="column-title">Cin du client  </th>

                                                <th className="column-title">Nom du client </th>

                                                <th className="column-title">Prénom du client </th>


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



export default Liste_client;