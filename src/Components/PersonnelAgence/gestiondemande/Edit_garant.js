import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import axios from 'axios';


import garantService from '../../services/garantService';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Edit_garant = () => {
    const { id } = useParams();




    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    const token = localStorage.getItem('token');
    const [nom_g, setNom] = useState("")
    const [prenom_g, setPrenom] = useState("")

    const [relation_g, setRelation] = useState("")
    const [cin_g, setCin] = useState("")
    const [descrip_g, setDescription] = useState("")
    const formdata = new FormData();
    const uc = new garantService();
    const navigate = useNavigate();
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:8080/GARANT/GETGarantBYID/${id}`, {

            headers: { "Authorization": `Bearer ${token}` }
        });

        setNom(res.data.nom_g)
        setPrenom(res.data.prenom_g)
        setRelation(res.data.relation_g)
        setDescription(res.data.descrip_g)
        setCin(res.data.cin_g)


    };
    useEffect(() => {
        loadUser();
    }, [])
    const onSubmit = async (e) => {
        const data = {
            "nom_g": nom_g,
            "prenom_g": prenom_g,
            "relation_g": relation_g,
            "descrip_g": descrip_g,
            "cin_g": cin_g,

        }
        e.preventDefault();
        await axios.put(`http://localhost:8080/GARANT/put/${id}`, data, {

            headers: { "Authorization": `Bearer ${token}` }
        });
        navigate("/liste_garant")
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

                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Modifier garant</h4>
                                    

                                    <form onSubmit={onSubmit} >

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID garant</label>
                                                    <input className="form-control" type="text" value={id} name="iddemande" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Nom garant</label>
                                                    <input className="form-control" type="text" value={nom_g} onChange={e => setNom(e.target.value)} name="dateA" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Prénom garant </label>
                                                    <input className="form-control" type="text" value={prenom_g} onChange={e => setPrenom(e.target.value)} name="type" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Numéro carte d'identité</label>
                                                    <input className="form-control" type="text" value={cin_g} onChange={e => setCin(e.target.value)} name="mt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Description</label>
                                                    <input className="form-control" type="text" value={descrip_g} onChange={e => setDescription(e.target.value)} />
                                                </div>
                                            </div>




                                        </div>

                                        <hr></hr>
                                        <button type="submit" className="btn btn-success" style={{ fontSize: 10 }} >modifier</button>

                                    </form>
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



export default Edit_garant;