import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import demandeService from "../../services/demandeService"
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Ajouter_demande = () => {

    const navigate = useNavigate()

    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    const [montant_net, setMontant] = useState("")
    const { id } = useParams();
    const [type_pret, setType_pret] = useState("")
    const [tranche, setTranche] = useState("")
    const [date_decaissement, setDated] = useState("")

    const [type_plan, setType] = useState("")
    const [date_echeance, setDatee] = useState("")
    const [date_remb_pref, setDater] = useState("")
    const formdata = new FormData();
    const uc = new demandeService();
    function handleChange(event) {
        setType_pret(event.target.value);
    }
    function handleChangep(event) {
        setType(event.target.value);
    }
    const onSubmit = () => {
        formdata.append("client.id_client", id)
        formdata.append("type_pret", type_pret)
        formdata.append("montant_net", montant_net)
        formdata.append("tranche", tranche)
        formdata.append("date_decaissement_pref", date_decaissement)
        formdata.append("type_plan", type_plan)
        formdata.append("date_echeance", date_echeance)
        formdata.append("date_remb_pref", date_remb_pref)
        console.log(montant_net)

        uc.create(formdata).then(() => {

        })
        Swal.fire(
            'Good job!',
            'demande est ajouté',
            'success'
        )


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
                                    <h4 class="card-title">Ajouter  demande pret</h4>

                                    <form class="forms-sample" onSubmit={(e) => onSubmit(e)}>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Id client</label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control" value={id} placeholder="Username" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Type pret</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" value={type_pret} onChange={handleChange}>
                                                    <option >selectionner un type</option>
                                                    <option value="commerce">commerce</option>
                                                    <option value="construction">construction</option>
                                                    <option value="agriculture">agriculture</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Montant net </label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control" pattern="^(?:[5-9][0-9]{2}|[1-9][0-9]{3}|10000)$" placeholder="Le champ doit  etre entre 500 et 10000" onChange={e => setMontant(e.target.value)} data-validate-length-range={6} data-validate-words={2} name="name" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Tranche</label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control" onChange={e => setTranche(e.target.value)} placeholder="saisir la tranche" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Calendrier</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" value={type_plan} onChange={handleChangep}>
                                                    <option >selectionner </option>

                                                    <option value="month">mois</option>
                                                    <option value="year">année</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Echéance</label>
                                            <div class="col-sm-9">
                                                <input type="date" onChange={e => setDatee(e.target.value)} class="form-control" id="exampleInputConfirmPassword2" placeholder="Password" />
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Date decaissement préferer</label>
                                            <div class="col-sm-9">
                                                <input type="date" class="form-control" required="required" onChange={e => setDated(e.target.value)} placeholder="Password" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-3 col-form-label">Date remboursement préferer</label>
                                            <div class="col-sm-9">
                                                <input type="date" class="form-control" onChange={e => setDater(e.target.value)} required="required" placeholder="Password" />
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
                                        <button class="btn btn-light">Cancel</button>
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



export default Ajouter_demande;