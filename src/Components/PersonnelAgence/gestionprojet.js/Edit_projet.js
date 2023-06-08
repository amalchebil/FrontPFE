import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import ProjetService from '../../services/projetService';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';

const Edit_projet = () => {
    const [activite, setProjet] = useState("")

    const [montant, setMontant] = useState("")

    const [nbr_echance, setnbr] = useState("")
    const [montant_echeance, setMontantecheance] = useState("")
    const [date_echance, setDateEcheance] = useState("")
    const [nbr_traite, setnbrtraite] = useState("")
    const [montant_traite, setmontanttraite] = useState("")
    const [date_traite, setDatetraite] = useState("")
    const [gouvernerat, setgouvernerat] = useState("ariana")
    const [delegation, setDelgetation] = useState("")
    const [secteur, setsecteur] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    const loadUser = async () => {
        uc.getid(id).then((res) => {
            setProjet(res.data.activite)
            setMontant(res.data.montant)
            setDateEcheance(res.data.datePremiereEcheance)
            setDelgetation(res.data.delegation)
            setDatetraite(res.data.dateTraitees)
            setgouvernerat(res.data.gouvernorat)
            setsecteur(res.data.secteur)
            setMontantecheance(res.data.montantParEcheance)
            setmontanttraite(res.data.montantParTraite)
            setnbr(res.data.nombreEcheances)
            setnbrtraite(res.data.nombreTraites)
        })


    };
    useEffect(() => {
        loadUser();
    }, [])

    const formdata = new FormData();
    const uc = new ProjetService();
    function handleChange(event) {
        setgouvernerat(event.target.value);
    }
    const onSubmit = () => {
        formdata.append("activite", activite)
        formdata.append("montant", montant)
        formdata.append("nombreEcheances", nbr_echance)
        formdata.append("montantParEcheance", montant_echeance)
        formdata.append("datePremiereEcheance", date_echance)
        formdata.append("nombreTraites", nbr_traite)
        formdata.append("montantParTraite", montant_traite)
        formdata.append("gouvernorat", gouvernerat)
        formdata.append("delegation", delegation)
        formdata.append("dateTraitees", date_traite)

        formdata.append("secteur", secteur)



        uc.put(id, formdata).then(() => {
        })
        Swal.fire(
            'Good job!',
            'projet est modifier',
            'success'
        )
        navigate("/liste_projet")

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
                                    <h4 className="card-title">Modifier un projet</h4>
                            <br></br>

                                    <form className="form-horizontal form-label-left" onSubmit={(e) => onSubmit(e)}>
                                        {/* <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">ID demande <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input className="form-control col-md-7 col-xs-12" value={id} name="name" type="text"

                                                    />

                                                </div>
                                            </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID</label>
                                                    <input className="form-control" value={id} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">activité</label>
                                                    <input className="form-control" value={activite} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">projet Montant</label>
                                                    <input className="form-control" value={montant} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">nombre echeances</label>
                                                    <input className="form-control" value={nbr_echance} onChange={e => setnbr(e.target.value)} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">montant Par Echeance </label>
                                                    <input className="form-control" value={montant_echeance} type="text" name="id" onChange={e => setMontantecheance(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">date echeance </label>
                                                    <input className="form-control" value={date_echance} type="text" name="id" onChange={e => setDateEcheance(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">montant traite </label>
                                                    <input className="form-control" value={montant_traite} type="text" name="id" onChange={e => setmontanttraite(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Delegation </label>
                                                    <input className="form-control" value={delegation} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Secteur </label>
                                                    <input className="form-control" value={secteur} type="text" name="id" />
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


export default Edit_projet;