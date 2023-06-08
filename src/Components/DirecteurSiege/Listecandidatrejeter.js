import React, { useEffect, useState } from 'react';
import NavBarDIR from './NavBarDIR';

import { useNavigate } from "react-router-dom"
import ProjetService from '../services/projetService';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
const Listecandidatrejeter = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()
    
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
    const us = new ProjetService()
    useEffect(() => {
        us.getAll().then((res) => {
            console.log("heere", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        })
            .catch(error => console.log(error));
    }, [rowsPerPage]);


    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.status == "Rejeter") {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("hajer", renderedArray);

    const loadUsers = () => {

        us.getAll().then((res) => {
            console.log("heere", res.data);
            setData(res.data);

        })
    }
   

    // const update = (id) => {
    //     navigate("/edit_projet/" + id, { state: { id: id } })
    // }
    // const deleteFunction = (id) => {
    //     // swal est une fenetre 
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
    //             us.remove(id).then((res) => {
    //                 console.log(res.status);
    //                 console.log("response", res);

    //                 if (res.status === 200) {
    //                     loadUsers()
    //                     Swal.fire("supprimé", "votre projet a ete supprimé", "succes")


    //                 }
    //             });
    //         }

    //     });
    // };

    const viewuserFunction = (id) => {
        navigate("/ViewCond/" + id, { state: { id: id } })


    }

    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        return newArray.slice(startIndex, endIndex).map(row => (
            <tr key={row.id}>
              <td>{row.projet.montant}</td>
                <td>{row.actProjet}</td>
                <td>{row.gouvernorat}</td>
                <td>{row.client.cin_c}</td>
                <td>  <button type="button" class="btn btn-round btn-info" > <td>{row.status}</td></button></td> 


                <td><button

className="btn btn-success"
onClick={(e) => { viewuserFunction(row.id_demande) }}
>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
</svg>

</button>
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
                                <h4 className="card-title">les candidature rejetées</h4>


                                <table className="table ">
                                    <thead>
                                        <tr>
                                        <th className="column-title">projet montant </th>
                                                        <th className="column-title">activite</th>
                                                        <th className="column-title">gouvernerat </th>
                                                        <th className="column-title">cin client </th>

                                                        <th className="column-title">Status</th>
                                                        <th className="column-title">actions</th>




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
export default Listecandidatrejeter;