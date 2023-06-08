import React, { useEffect, useState } from 'react';
import demandeService from '../../services/demandeService';
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const View_demandepret = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `/upload_client?${queryString}`;
    };
    const [client, setClient] = useState([])
    /*********damnde */
    const { id } = useParams();
    const [id_demande, setId] = useState("")
    const [date_decaissement_pref, setDated] = useState("")

    const [date_remb_pref, setDateR] = useState("")
    const [montant_net, setMontant] = useState("")
    const [dateAttribut, setDateA] = useState("")
    const [type_plan, setType] = useState("")

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const [garanties, setg] = useState([])
    const navigate = useNavigate()
    const fetchGaranties = async () => {

        const response = await axios.get(`http://localhost:8080/GARANT/GETALLGarant`, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        setg(response.data);

        console.log("hhhhhh", response.data);
        console.log("hajer", id)
        // Filtrer les garanties qui ont l'ID de la demande spécifiée
        const garantiesDemande = response.data.filter(garantie => garantie.demandePret.id_demande == id);
        console.log("garanties 1:", garantiesDemande);

        if (garantiesDemande.length > 0) {
            setn(garantiesDemande.nom_g);
            setpg(garantiesDemande.prenom_g);
        }
        // Récupérer les données des garanties demandées
        garantiesDemande.forEach(element => {
            console.log("v", element);
            console.log("v", element.cin_g);
            setn(element.nom_g);
            setpg(element.prenom_g);

            // Faites ce que vous voulez avec chaque élément du tableau
        });

        // Faire quelque chose avec les données récupérées
        console.log("ID demande :", id);
        return garantiesDemande;

    };

    const token = localStorage.getItem('token');


    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }
    const [nom_g, setn] = useState("")
    const [prenom_g, setpg] = useState("")
    const [cin_g, setcin_g] = useState("")
    const [relation_g, setrelation_g] = useState("")
    const [id_garant, setidg] = useState("")
    /*********client */
    const [id_client, setIdc] = useState("")
    const [nom_c, setNom] = useState("")
    const [adresse_c, setadress] = useState("")
    const [date_naiss, setDate] = useState("")
    const [numtel_c, setNumt] = useState("")
    const [cin_c, setCin] = useState("")
    const [prenom_c, setPrenom] = useState("")
    const [sexe_c, setSexe] = useState("")
    const [email_c, setEmail] = useState("")
    const [montant_emprunte, setme] = useState("")
    const [montant_projet, setmp] = useState("")
    const [montant_sub, setms] = useState("")
    const dm = new demandeService()
    const location = useLocation();
    useEffect(() => {
        fetchGaranties()
        GetuserfromidfromBack(id)

        console.log("the id is:", id)


    }, [])

    const GetuserfromidfromBack = (id) => {
        console.log("hhhh")
        dm.getiddemande(id).then((res) => {
            console.log(res)
            /******set demande  */

            setId(res.data.id_demande)
            setMontant(res.data.montant_net)
            setDated(res.data.date_decaissement_pref)
            setDateR(res.data.date_remb_pref)
            setDateA(res.data.dateAttribut)
            setType(res.data.type_plan)
            /*******set client */
            setIdc(res.data.client.id_client)
            setNom(res.data.client.nom_c)
            setPrenom(res.data.client.prenom_c)
            setCin(res.data.client.cin_c)
            setDate(res.data.client.date_naiss)
            setadress(res.data.client.adresse_c)
            setNumt(res.data.client.numtel_c)
            setEmail(res.data.client.email_c)
            setme(res.data.client.montant_emprunte)
            setms(res.data.client.montant_sub)
            setmp(res.data.client.montant_projet)
            setSexe(res.data.client.sexe_c)

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

                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mt-5">Informations du client</h5>

                                    <form onSubmit={handleSubmit} >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Id client</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='id' value={id_client} />

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
                                                <label htmlFor="example-text-input" className="form-control-label">Adresse du client</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name="adresse" value={adresse_c} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Date naissance</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='date' value={date_naiss} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Montant emprunte</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='montantpret' value={montant_emprunte} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Montant projet</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='montantprojet' value={montant_projet} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Montant subventions</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='montantsub' value={montant_sub} />

                                            </div>
                                        </div>
                                        <hr className="horizontal dark" />
                                        <h5 className="mt-5">Informations du demande pret</h5>
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
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Décaissement</label>
                                                    <input className="form-control" type="text" value={date_decaissement_pref} name="dated" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date Remboursement préférer</label>
                                                    <input className="form-control" type="text" value={date_remb_pref} name="dater" />
                                                </div>
                                            </div>

                                        </div>
                                        <h5 className="mt-5">Informations du garant</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Id garant</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='id' value={nom_g} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Nom garant</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='nom' value={prenom_g} />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Prénom garant</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" value={relation_g} name="prenom" />

                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="example-text-input" className="form-control-label">Numéro de carte d'identité</label>
                                                <input className="mb-3 form-control form-control-lg" type="text" name='cin' value={cin_g} />

                                            </div>
                                        </div>

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


export default View_demandepret;