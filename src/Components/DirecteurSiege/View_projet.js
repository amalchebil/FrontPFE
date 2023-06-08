import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';

import Swal from "sweetalert2";
import ProjetService from '../services/projetService';
const View_projet = () => {

    const logout = () => {
        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
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
    const view = (id) => {
        navigate("/creercandidature/" + id, { state: { id: id } })

    }

    useEffect(() => {
        loadUser();
    }, [])


    const uc = new ProjetService();

    const handleSubmit = (event) => {
        //  event.preventDefault();
        const formD = new FormData(event.target);
        const queryString = new URLSearchParams(formD).toString();
        window.location.href = `/uploadproj?${queryString}`;

    }

    return <div className="container-scroller">
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
                    <h3 className="page-title"> Form elements </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Forms</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">

                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Détail du projet</h4>
                                <form  onSubmit={handleSubmit}>
                                <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">activité</label>
                                                    <input className="form-control" value={activite} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">projet Montant </label>
                                                    <input className="form-control" type="text" value={montant} name="cin" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">nombre echeances </label>
                                                    <input className="form-control" value={nbr_echance} type="text" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">montant Par Echeance </label>
                                                    <input className="form-control" value={montant_echeance} type="text" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">date echéance</label>
                                                    <input className="form-control" type="text" value={date_echance} name="date" />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-6">
<div className="form-group">
<label htmlFor="example-text-input" className="form-control-label">Date naissance</label>
<input className="form-control" type="text" value={sexe_c} name="date" />
</div>
</div> */}
                                           

                                       
                                        
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">delegation</label>
                                                    <input className="form-control" type="text" value={delegation} name="numt" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">secteur</label>
                                                    <input className="form-control" type="text" value={secteur} name="numt" />
                                                </div>
                                            </div>

                                        </div>

                                        <hr className="horizontal dark" />
                                        </form>
                                        
                                      
                                        
                                           
                                            

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            </div>
       {/* content-wrapper ends */}
            {/* partial:../../partials/_footer.html */}
         
            {/* partial */}
        </div>
        </div>
        {/* main-panel ends */}
    
    {/* page-body-wrapper ends */}


}

export default View_projet;