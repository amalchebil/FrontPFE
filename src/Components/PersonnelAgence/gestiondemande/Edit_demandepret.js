import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import demandeService from '../../services/demandeService';
import axios from 'axios';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Edit_demandepret = () => {
    const { id } = useParams();

    const viewuserFunction = (id) => {

        navigate("/ajouter_garant/" + id, { state: { id: id } })



    }
    const [date_decaissement_pref, setDated] = useState("")

    const [date_remb_pref, setDateR] = useState("")
    const [montant_net, setMontant] = useState("")
    const [dateAttribut, setDateA] = useState("")
    const [type_plan, setType] = useState("")
    const [type_pret, setType_pret] = useState("")

    const US = new demandeService()
    const formdata = new FormData();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:8080/DEMANDEPRET/GETDEMANDEBYID/${id}`, {

            headers: { "Authorization": `Bearer ${token}` }
        });

        setMontant(res.data.montant_net)
        setDated(res.data.date_decaissement_pref)
        setDateR(res.data.date_remb_pref)
        setDateA(res.data.dateAttribut)
        setType(res.data.type_plan)
        setType_pret(res.data.type_pret)
    };
    useEffect(() => {
        loadUser();
    }, [])
    const onSubmit = async (e) => {

        const data = {
            "type_pret": type_pret,
            "montant_net": montant_net,
            "date_decaissement_pref": date_decaissement_pref,
            "type_plan": type_plan,
            "date_remb_pref": date_remb_pref,
        }
        e.preventDefault();
        await axios.put(`http://localhost:8080/DEMANDEPRET/put/${id}`, data, {

            headers: { "Authorization": `Bearer ${token}` }
        }).then(() => {
            navigate('/liste_demandepret')
        }
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

                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Modifier demande pret</h4>
                                    <span > <i className='mdi mdi-plus-circle-outline ' style={{ fontSize: 30, marginLeft: 980, color: 'red' }}></i>  </span>

                                    <form onSubmit={onSubmit} >

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID pret</label>
                                                    <input className="form-control" type="text" value={id} name="iddemande" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Type pret</label>
                                                    <input className="form-control" type="text" value={type_pret} onChange={e => setType_pret(e.target.value)} name="dateA" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">planification </label>
                                                    <input className="form-control" type="text" value={type_plan} onChange={e => setType(e.target.value)} name="type" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Montant net</label>
                                                    <input className="form-control" type="text" value={montant_net} onChange={e => setMontant(e.target.value)} name="mt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date de création</label>
                                                    <input className="form-control" type="text" value={dateAttribut} name="dateA" />
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Décaissement</label>
                                                    <input className="form-control" type="text" value={date_decaissement_pref} onChange={e => setDated(e.target.value)} name="dated" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Remboursement préférer</label>
                                                    <input className="form-control" type="text" value={date_remb_pref} onChange={e => setDateR(e.target.value)} name="dater" />
                                                </div>
                                            </div>

                                        </div>

                                        <hr></hr>
                                        <button type="submit" className="btn btn-success" style={{ fontSize: 10 }} >modifier</button>
                                        <span style={{ marginLeft: 10 }}></span>
                                        <button type="submit" className="btn btn-success" onClick={(e) => viewuserFunction(id)} style={{ fontSize: 10 }} >Add garant</button>
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


export default Edit_demandepret;