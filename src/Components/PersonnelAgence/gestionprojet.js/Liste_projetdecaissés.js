import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ModalProjet from './ModalProjet';
import ProjetService from '../../services/projetService';
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';

const Liste_projetdecaissés = () => {
    const { id } = useParams()
    console.log(id);

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState('');
    const [selectedId, setSelectedId] = useState("");
    const [selectedIdDeemande, setSelectedIddemande] = useState("");
    const [cl, setcl] = useState("");
    const navigate = useNavigate()
    const uc = new userService()

    const us = new ProjetService()
    useEffect(() => {
        us.getAl().then((res) => {
            console.log("heere", res.data);
            setData(res.data);
            setTotalPages(Math.ceil(res.data.length / rowsPerPage));
        })
            .catch(error => console.log(error));
    }, [rowsPerPage]);
    const viewuserFunction = (id) => {
        navigate("/view_p/" + id, { state: { id: id } })

    }
    const newArray = []
    const renderedArray = data.filter((item) => {
        if (item.statuP == "Decaisser") {
            console.log('item', item);
            newArray.push(item);
            console.log('r', newArray);
        }
    });
    console.log("hajer", renderedArray);
    const handlem = (itemId, id) => {
        const updatedItems = data.map((row) => {
            if (row.id === itemId) {
                return { ...row, disabled: true };
            }
            return row;
        });
        setData(updatedItems)

        setSelectedId(itemId);
        // setSelectedIddemande(id_client)

        console.log("ddd", id);
        setOpenModal(true);
    }
    const loadUsers = () => {

        us.getAl().then((res) => {
            console.log("heere", res.data);
            setData(res.data);

        })
    }





    const handlePageChange = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderTableRows = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        return newArray.slice(startIndex, endIndex).map(row => (
            <tr key={row.id}>
                <td></td>

                <td>{row.activite}</td>
                <td>{row.montantParTraite}</td>
                <td>{row.delegation}</td>
                <td>{row.secteur}</td>

                <td><label class="badge badge-danger">{row.statuP}</label> </td>

                <td>
                    <span onClick={() => handlem(row.id)}
                        disabled={row.disabled}>
                        <i class="badge badge-primary" > Rembourser</i>
                    </span>


                    <ModalProjet
                        open={openModal}
                        onClose={() => setOpenModal(false)}


                        selectedId={selectedId}


                    />
                    <span style={{marginLeft:20}}></span>
                    <span onClick={(e) => { viewuserFunction(row.id) }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#FFCC00" class="bi bi-eye" viewBox="0 0 16 16">
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
                                <li className="breadcrumb-item"><a href="#"> projets</a></li>


                            </ol>
                        </nav>
                    </div>
                    <div className="row">

                        <div className="col-lg-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Les Projets approuvés</h4>
                                    <br></br><br></br>

                                    <table className="table ">
                                        <thead>
                                            <tr className="headings">
                                                <th>
                                                    <input type="checkbox" id="check-all" className="flat" />
                                                </th>
                                                <th className="column-title">Activité </th>
                                                <th className="column-title">Montant </th>
                                                <th className="column-title">Gouvernorat </th>
                                                <th className="column-title">Secteur</th>
                                                <th className="column-title">Status</th>
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


export default Liste_projetdecaissés;