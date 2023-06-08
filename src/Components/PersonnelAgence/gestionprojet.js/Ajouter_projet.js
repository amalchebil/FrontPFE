import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ProjetService from '../../services/projetService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';

const Ajouter_projet = () => {
    const navigate = useNavigate();
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    const [projet_act, setProjet] = useState("")

    const [projet_montant, setprojMont] = useState("")

    const [nbr_echance, setnbr] = useState("")
    const [montant_echeance, setMontantecheance] = useState("")
    const [date_echance, setDateEcheance] = useState("")
    const [nbr_traite, setnbrtraite] = useState("")
    const [montant_traite, setmontanttraite] = useState("")
    const [date_traite, setDatetraite] = useState("")
    const [gouvernerat, setgouvernerat] = useState("ariana")
    const [delegation, setDelgetation] = useState("")
    const [secteur, setsecteur] = useState("")


    const formdata = new FormData();
    const uc = new ProjetService();
    function handleChange(event) {
        setgouvernerat(event.target.value);
    }
    function handleChangeprojet(event) {
        setProjet(event.target.value);
    }
    const agc1 = localStorage.getItem('id_agence')
    console.log(agc1);
    const onSubmit = () => {
        formdata.append("activite", projet_act)
        formdata.append("montant", projet_montant)
        formdata.append("nombreEcheances", nbr_echance)
        formdata.append("montantParEcheance", montant_echeance)
        formdata.append("datePremiereEcheance", date_echance)
        formdata.append("nombreTraites", nbr_traite)
        formdata.append("montantParTraite", montant_traite)
        formdata.append("gouvernorat", gouvernerat)
        formdata.append("delegation", delegation)
        formdata.append("dateTraitees", date_traite)
        formdata.append("secteur", secteur)
        formdata.append("agc1.id", agc1)

        console.log(agc1)

        uc.create(formdata).then(() => {
        })
        Swal.fire(
            'Good job!',
            'projet est ajouté',
            'success'
        )
        navigate('/liste_projet')

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

                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Ajouter projet</h4>

                                    <form className="form-horizontal form-label-left" onSubmit={(e) => onSubmit(e)}> <br></br><br></br>
                                        <div className="row">
                                            <div class="form-group row">

                                                <label class="col-sm-3 col-form-label">Type de projet</label>
                                                <div class="col-sm-9">
                                                    <select class="form-control" value={projet_act} onChange={handleChangeprojet}>
                                                        <option >selectionner un secteur</option>

                                                        <option value="COMMERCE">COMMERCE</option>
                                                        <option value="AGRICULTURE">AGRICULTURE</option>
                                                        <option value="INDUSTRIE">INDUSTRIE</option>
                                                        <option value="PHARMACIE">PHARMACIE</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group row">

                                                <label class="col-sm-3 col-form-label">Montant du projet</label>
                                                <div class="col-sm-9">
                                                    <input type="number" class="form-control" onChange={e => setprojMont(e.target.value)} placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Montant traité </label>
                                                <div class="col-sm-9">
                                                    <input type="number" class="form-control" value={projet_montant} placeholder="Username" />
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Nombre echeances</label>
                                                <div class="col-sm-9">
                                                    <input type="number" class="form-control" onChange={e => setnbr(e.target.value)} placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Montant Par Echeance </label>
                                                <div class="col-sm-9">
                                                    <input type="number" class="form-control" onChange={e => setMontantecheance(e.target.value)} placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Date de premier écheance</label>
                                                <div class="col-sm-9">
                                                    <input type="date" class="form-control" onChange={e => setDateEcheance(e.target.value)} placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Délegation</label>
                                                <div class="col-sm-9">
                                                    <input type="date" class="form-control" onChange={e => setDelgetation(e.target.value)} placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Détails du projet</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" onChange={e => setsecteur(e.target.value)} placeholder="Username" />
                                                </div>
                                            </div>
                                        </div>














                                        <div className="ln_solid" />
                                        <div className="form-group">
                                            <div className="col-md- col-md-offset-3">
                                                <button className="btn btn-primary" >Cancel</button>
                                                <button id="send" type="submit" className="btn btn-success" >Submit</button>
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
            </div>
            {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
    </div>
}

export default Ajouter_projet;