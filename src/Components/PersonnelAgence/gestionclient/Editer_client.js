import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import axios from 'axios';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
import './upload.css';

const Editer_client = () => {
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });
    // const [id, setId] = useState("");
    const [client, setClient] = useState([])
    const [email_c, setemail] = useState("")
    const [nom_c, setName] = useState("")
    const [prenom_c, setPrenom] = useState("")
    const [adresse_c, setadress] = useState("")
    const [date_naiss, setDate] = useState("")
    const [numtel_c, setNumt] = useState("")
    const [cin_c, setCin] = useState("")
    const [solde, setSolde] = useState("")
    const [numCompte, setNumc] = useState("")
    const [sexe_c, setSexe] = useState("")
    const [role, setrole] = useState("")
    const US = new userService()
    const formdata = new FormData();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:8080/Client/GETCLIENTBYID/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            setName(res.data.nom_c);
            setemail(res.data.email_c);
            setCin(res.data.cin_c)
            setDate(res.data.date_naiss)
            setadress(res.data.adresse_c)
            setNumt(res.data.numtel_c)
            setSolde(res.data.solde)
            setNumc(res.data.numCompte)
            setSexe(res.data.sexe_c)
            setPrenom(res.data.prenom_c)


        }).catch((err) => {
            console.log(err);

        })
    }
    useEffect(() => {
        loadUser();
    }, [])
    const onSubmit = async (e) => {
        const data = {
            "nom_c": nom_c,
            "date_naiss": date_naiss,
            "numtel_c": numtel_c,
            "email_c": email_c,
            "adresse_c": adresse_c,
            "prenom_c": prenom_c
        }
        e.preventDefault();
        await axios.put(`http://localhost:8080/Client/put/${id}`, data, {

            headers: { "Authorization": `Bearer ${token}` }
        }).then(() => {
            navigate('/liste_client')
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
                                    <h4 className="card-title">Modifier client</h4>

                                    <form  >


                                        <div className="row">
                                           

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Nom </label>
                                                    <input value={nom_c} type="text" className="form-control" name="nom" onChange={e => setName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Prénom</label>
                                                    <input value={prenom_c} className="form-control" type="text" name="nom" onChange={e => setPrenom(e.target.value)} />


                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Email</label>
                                                    <input value={email_c} className="form-control" type="email" name="email" onChange={e => setemail(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date de naissance</label>
                                                    <input type="date" className="form-control" value={date_naiss} name="date" onChange={e => setDate(e.target.value)} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Numéro téléphone</label>
                                                    <input className="form-control" type="text" value={numtel_c} name="numt" onChange={e => setNumt(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Adresse</label>
                                                    <input type="text" className="form-control" value={adresse_c} name="adresse" onChange={e => setadress(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="horizontal dark" />


                                        <button
                                            type="submit"
                                            onClick={onSubmit}
                                            className="button"
                                         style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}  
                                        >
                                            <path fill="white" d="M23.15 2.587L18.21 0.210001C17.9308 0.075557 17.6167 0.031246 17.3113 0.083204C17.0058 0.135162 16.724 0.280818 16.505 0.500001L7.04499 9.13L2.92499 6.002C2.73912 5.86101 2.50976 5.78953 2.27669 5.79994C2.04363 5.81035 1.82156 5.902 1.64899 6.059L0.326993 7.261C0.223973 7.35465 0.141644 7.46878 0.0852761 7.59608C0.0289081 7.72339 -0.00025659 7.86106 -0.000350724 8.00028C-0.000444857 8.1395 0.0285336 8.27721 0.0847294 8.40459C0.140925 8.53197 0.2231 8.64621 0.325993 8.74L3.89899 12L0.325993 15.26C0.2231 15.3538 0.140925 15.468 0.0847294 15.5954C0.0285336 15.7228 -0.000444857 15.8605 -0.000350724 15.9997C-0.00025659 16.1389 0.0289081 16.2766 0.0852761 16.4039C0.141644 16.5312 0.223973 16.6454 0.326993 16.739L1.64999 17.94C1.82256 18.097 2.04463 18.1887 2.27769 18.1991C2.51076 18.2095 2.74012 18.138 2.92599 17.997L7.04599 14.869L16.506 23.499C16.7248 23.7182 17.0064 23.8639 17.3117 23.9159C17.6171 23.9679 17.931 23.9235 18.21 23.789L23.152 21.412C23.4062 21.2893 23.6207 21.0973 23.7707 20.8581C23.9207 20.619 24.0002 20.3423 24 20.06V3.939C24 3.65647 23.9203 3.37967 23.7699 3.14048C23.6195 2.90129 23.4046 2.70943 23.15 2.587ZM18.004 17.448L10.826 12L18.004 6.552V17.448Z"></path>
                                           <p class="text">modifier</p> 
                                        </button>
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


export default Editer_client;