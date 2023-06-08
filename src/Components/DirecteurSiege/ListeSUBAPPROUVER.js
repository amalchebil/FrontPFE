import React, { useEffect, useState } from 'react';
import DemandeSubSerivce from '../services/demandeSub';
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import axios from 'axios';
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
const  ListeSubApprouverrD= () => {
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
    const [filterDate, setFilterDate] = useState('');
    const [search, setSearch] = useState('');
    const filteredDate = data.filter((item) => {
        return item.dateAttribut.includes(filterDate);
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.status == "Approuver") {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
  
  

    const handleChange = (event) => {
        setFilterDate(event.target.value);
    };
    const us = new DemandeSubSerivce()

    useEffect(() => {

        const token = localStorage.getItem('token');
        // if (token) {
        //     const decodedToken = jwt.decode(token);
        //     const roles = decodedToken.roles;
        //     console.log(roles);

        //   }
        console.log(token);
        axios.get('http://localhost:8080/DEMANDESUBVENTION/GETALLDEMANDE', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {

            console.log("result", res.data);

            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        }).catch((err) => {

            console.log(err);

        })
        




    }, [rowsPerPage]);


    // const loadUsers = () => {

    //     us.getAl().then((res) => {
    //         console.log("heere", res.data);
    //         setData(res.data);

    //     })
    // }
    const viewuserFunction = (id) => {
        navigate("/subS_view/" + id, { state: { id: id } })


    }

    
    
    


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
                
                <td>{row.id_demande}</td>
                <td>{row.montant_net}</td>
                <td>{row.client.cin_c}</td>
                <td>  <button type="button" class="btn btn-inverse-info btn-fw" style={{ fontSize: 10 }}> <td>{row.status}</td></button></td>
                <td>{row.dateAttribut}</td>
                
           <td>  <button

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
                                <h4 className="card-title">liste des demandes approuvées</h4>


                                <table className="table ">
                                    <thead>
                                        <tr>
                                        <th className="column-title">ID_Demande </th>
                                                        <th className="column-title">montant </th>

                                                        <th className="column-title">Cin_client </th>
                                                        <th className="column-title>">Status</th>
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
export default ListeSubApprouverrD;

