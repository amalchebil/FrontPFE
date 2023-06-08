import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";
import demandeService from '../../services/demandeService';
import garantService from '../../services/garantService';

import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const View_garant = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `/upload_client?${queryString}`;
    };
    const [client, setClient] = useState([]);
    const [demande, setdemande] = useState([])

    /*********damnde */
    const [id_demande, setId] = useState("")
    const [date_decaissement, setDated] = useState("")
    const [date_echeance, setDatec] = useState("")
    const [date_remb_pref, setDateR] = useState("")
    const [montant_net, setMontant] = useState("")
    const [dateAttribut, setDateA] = useState("")
    const [type_plan, setType] = useState("")


    /*********client */
    const [id_client, setIdc] = useState("")
    const [nom_c, setNom] = useState("")
    const [adresse_c, setadress] = useState("")
    const [date_naiss, setDate] = useState("")
    const [numtel_c, setNumt] = useState("")
    const [cin_c, setCin] = useState("")
    const [prenom_c, setPrenom] = useState("")
    const [sexe_c, setSexe] = useState("")
    const [role, setrole] = useState("")
    /******garant */
    const [id_garant, setIdg] = useState("")
    const [nom_g, setNomg] = useState("")
    const [prenom_g, setPrenomg] = useState("")
    const [relation_g, setRelation] = useState("")
    const [descrip_g, setDescription] = useState("")
    const [montant_g, setMontantg] = useState("")
    const dm = new garantService()
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const navigate = useNavigate()


    const { id } = useParams();
    useEffect(() => {
        GetuserfromidfromBack(id)


        console.log("the id is:", id)


    }, [])

    const GetuserfromidfromBack = (id) => {
        console.log("hhhh")
        dm.getidgarant(id).then((res) => {
            console.log(res)
            /******set demande  */
            setId(res.data.demandePret.id_demande)
            setMontant(res.data.demandePret.montant_net)
            setDatec(res.data.demandePret.date_echeance)
            setDated(res.data.demandePret.date_decaissement)
            setDateR(res.data.demandePret.date_remb_pref)
            setDateA(res.data.demandePret.dateAttribut)
            setType(res.data.demandePret.type_plan)
            /*******set client */
            setIdc(res.data.demandePret.client.id_client)
            setNom(res.data.demandePret.client.nom_c)
            setPrenom(res.data.demandePret.client.prenom_c)
            setCin(res.data.demandePret.client.cin_c)
            setDate(res.data.demandePret.client.date_naiss)
            setadress(res.data.demandePret.client.adresse_c)
            setNumt(res.data.demandePret.client.numtel_c)
            /*******set garant */
            setIdg(res.data.id_garant)
            console.log("hhhh", res.data.id_garant)
            setNomg(res.data.nom_g)
            setPrenomg(res.data.prenom_g)
            setRelation(res.data.relation_g)
            setDescription(res.data.descrip_g)
            console.log("emaihhhl", montant_net)
        }
        )

    }
    return <div>
       <HeaderSiege/>
        {/* partial */}
        < div className="container-fluid page-body-wrapper" >
            {/* partial:../../partials/_sidebar.html */}
            <Sidebar />
            {/* partial */}
            < div className="main-panel" >
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
                                    <h5 className="mt-5">Informations du client</h5>

                                    <form onSubmit={handleSubmit}>


                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID</label>
                                                    <input className="form-control" value={id_client} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">CIN</label>
                                                    <input className="form-control" type="text" value={cin_c} name="cin" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">nom </label>
                                                    <input className="form-control" value={nom_c} type="text" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">prenom </label>
                                                    <input className="form-control" value={prenom_c} type="text" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date naissance</label>
                                                    <input className="form-control" type="text" value={date_naiss} name="date" />
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
                                                    <label htmlFor="example-text-input" className="form-control-label">numéro de téléphone</label>
                                                    <input className="form-control" type="text" value={numtel_c} name="numt" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Addresse</label>
                                                    <input className="form-control" type="text" value={adresse_c} name="adresse" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="horizontal dark" />
                                        <p className="text-uppercase text-sm">Les informations de demande</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID pret</label>
                                                    <input className="form-control" type="text" value={id_demande} name="iddemande" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Type pret</label>
                                                    <input className="form-control" type="text" value={dateAttribut} name="dateA" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">planification </label>
                                                    <input className="form-control" type="text" value={type_plan} name="type" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Montant net</label>
                                                    <input className="form-control" type="text" value={montant_net} name="mt" />
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
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Echeance</label>
                                                    <input className="form-control" type="text" value={date_echeance} name="datec" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Décaissement</label>
                                                    <input className="form-control" type="text" value={date_decaissement} name="dated" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Remboursement</label>
                                                    <input className="form-control" type="text" value={date_remb_pref} name="dater" />
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="horizontal dark" />
                                        <p className="text-uppercase text-sm">Les informations du garant</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID garant</label>
                                                    <input className="form-control" value={id_garant} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Nom garant</label>
                                                    <input className="form-control" type="text" value={nom_g} name="cin" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Prenom garant </label>
                                                    <input className="form-control" value={prenom_g} type="text" name="nom" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Relation entre garant et client</label>
                                                    <input className="form-control" type="text" value={relation_g} name="date" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Description</label>
                                                    <input className="form-control" type="text" value={descrip_g} name="numt" />
                                                </div>
                                            </div>

                                        </div>
                                        <hr className="horizontal dark" />

                                        <button type="submit">imprimer</button>

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
            </div >
            {/* main-panel ends */}
        </div >
        {/* page-body-wrapper ends */}
    </div >
}



export default View_garant;