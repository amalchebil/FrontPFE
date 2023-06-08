import React, { useEffect, useState } from 'react';

import { Navigate, useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
import { matchPath } from 'react-router-dom';
const View_client = () => {

   

    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `/upload?${queryString}`;
    };
    const navigate = useNavigate()
      const [id_client, setIdc] = useState("")

    const { id } = useParams();

    const [email_c, setemail] = useState("")
    const [nom_c, setName] = useState("")
    const [prenom_c, setPrenom] = useState("")
    const [adresse_c, setadress] = useState("")
    const [date_naiss, setDate] = useState("")
    const [numtel_c, setNumt] = useState("")
    const [cin_c, setCin] = useState("")
    const [montant_sub, setMS] = useState("")
    const [montant_projet, setMP] = useState("")
    const [montant_emprunte, setME] = useState("")
    const [sexe_c, setSexe] = useState("")

    const US = new userService()

    useEffect(() => {
        GetuserfromidfromBack(id)
    }, [])

    const token = localStorage.getItem('token');

    const GetuserfromidfromBack = (id) => {
        axios.get(`http://localhost:8080/Client/GETCLIENTBYID/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            console.log(res)
            setemail(res.data.email_c)
            setName(res.data.nom_c)
            setCin(res.data.cin_c)
            setDate(res.data.date_naiss)
            setadress(res.data.adresse_c)
            setNumt(res.data.numtel_c)
            setPrenom(res.data.prenom_c)
            setME(res.data.montant_emprunte)
            setMP(res.data.montant_projet)
            setMS(res.data.montant_sub)
            setSexe(res.data.sexe_c)
            console.log("email", nom_c)
        }
        )

       
    }
    const view = (id) => {
        navigate("/transClienta/" + id, { state: { id: id } })
    
      }
    // const EventFunction = (id) => {

    //     navigate("/event_client/" + id, { state: { id: id } })



    // }
    return <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <HeaderSiege />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <Sidebar />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header">
                        <h3 className="page-title"> Imprimer </h3>
                        
                    </div>
                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Détailles du client</h4>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Id client</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='id' value={id} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Nom client</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='nom' value={nom_c} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Prénom client</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" value={prenom_c} name="prenom" />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Numéro de carte d'identité</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='cin' value={cin_c} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Email</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='email' value={email_c} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Numéro de téléphone</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='numt' value={numtel_c} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Genre</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='genre' value={sexe_c} />

                                            </div><div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Adresse</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name="adresse" value={adresse_c} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Date de naissance</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='date' value={date_naiss} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Montant emprunté</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='montantpret' value={montant_emprunte} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Montant projet</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='montantprojet' value={montant_projet} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Montant subventionné</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='montantsub' value={montant_sub} />

                                            </div>
                                        </div>

                                        <hr></hr>
                                        <button type="submit" className="btn btn-success">imprimer</button>
                                        
                                    </form>
                                    <button id="send" type="submit" class="btn btn-success" onClick={(e) => { view(id) }} >transactions du client</button>

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


export default View_client;