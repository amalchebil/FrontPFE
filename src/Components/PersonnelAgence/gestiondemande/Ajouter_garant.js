import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import garantService from '../../services/garantService'
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Ajouter_garant = () => {

    const navigate = useNavigate()

    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    const [nom_g, setNom] = useState("")

    const [idm, setid] = useState("")

    const [prenom_g, setPrenom] = useState("")
    const { id } = useParams();

    const [relation_g, setRelation] = useState("")
    const [cin_g, setCin] = useState("")
    const [descrip_g, setDescription] = useState("")
    const formdata = new FormData();
    const uc = new garantService();
    const onSubmit = () => {

        formdata.append("demandePret.id_demande", id)
        formdata.append("nom_g", nom_g)
        formdata.append("prenom_g", prenom_g)
        formdata.append("relation_g", relation_g)
        formdata.append("cin_g", cin_g)
        formdata.append("descrip_g", descrip_g)

        console.log(nom_g)
        console.log(id);
        uc.create(formdata).then(() => {
            navigate('/liste_garant')
        })
        Swal.fire(
            'Good job!',
            'garant est ajouté',
            'success'
        )

    }

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

                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Ajouter  garant</h4>
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <form class="forms-sample" onSubmit={(e) => onSubmit(e)}>
                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Id demande</label>
                                                        <div class="col-sm-9">
                                                            <input type="number" class="form-control" value={id} placeholder="Username" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Nom du garant</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" onChange={e => setNom(e.target.value)} placeholder="saisir le nom" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Prénom du garant</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" onChange={e => setPrenom(e.target.value)} placeholder="saisir le prenom" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Numéro de carte d'identité du garant</label>
                                                        <div class="col-sm-9">
                                                            <input type="number" onChange={e => setCin(e.target.value)} class="form-control" placeholder="saisir cin" />
                                                        </div>
                                                    </div>


                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">Relation entre garant et le client</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" required="required" onChange={e => setRelation(e.target.value)} placeholder="Password" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-sm-3 col-form-label">description</label>
                                                        <div class="col-sm-9">
                                                            <input type="text" class="form-control" onChange={e => setDescription(e.target.value)} required="required" placeholder="Password" />
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



export default Ajouter_garant;