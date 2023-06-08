import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import userService from '../services/userService';
import agenceService from '../services/agenceService';
import { useNavigate } from 'react-router-dom';
import Navbar from '../PersonnelAgence/Navbar';
import SidebarAdmin from './SidebarAdmin';
import axios from 'axios';
import HeaderSiege from '../PersonelSiege/HeaderSiege';

const Ajouter_personnel = () => {
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }
    const navigate = useNavigate()
    function findClientIdByCIN(cin, users) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].cin === cin) {
                console.log("cin user :", users[i].cin, "id user : ", users[i].id)
                return users[i].id;
            }
        }
        return null; // Retourne null si aucun client correspondant n'est trouvé
    }
    const handle1Change = (event) => {
        const newCin = event.target.value;
        setCin(newCin);

        console.log("num cin:", newCin)
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8080/USER/GETALLUSERS', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            console.log("result", res.data);
            setdata(res.data);
        }).catch((err) => {

            console.log(err);

        })
        console.log("jiji", newCin);
        const x = findClientIdByCIN(newCin, data)
        setiduser(x)
        console.log("zizou", x);

    }
    const [data, setdata] = useState("")
    const [idu, setiduser] = useState("")
    const [selectedRole, setSelectedRole] = useState("PersonnelS");

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);

    };

    console.log("window");
    const [Data, setData] = useState([])
    const [email_u, setEmail] = useState("")
    const [nom_u, setNom] = useState("")
    const [prenom_u, setprenom] = useState("")
    const [agence, setAgence] = useState("")
    const [role, setRole] = useState("")
    const [password_u, setPassword] = useState("")
    const [cin_u, setCin] = useState("")
    const token = localStorage.getItem('token');
    console.log(token);
    const ag = new agenceService();
    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        axios.get('http://localhost:8080/AGENCE/GETALLAgence', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {

            console.log("result", res.data);
            setData(res.data);
        }
        )

    }, []);

    const handleChange = (event) => {
        setAgence(event.target.value);
        console.log("agence", agence);
    }

    // const [selectedOption, setSelectedOption] = useState("Masculin");

    // const handleOptionChange = (event) => {
    //   setSelectedOption(event.target.value);
    // };


    const formdata = new FormData();
    const uc = new userService();
    const onSubmit = () => {
        if (idu == null) {
            formdata.append("firstname", nom_u)
            formdata.append("lastname", prenom_u)
            formdata.append("role", selectedRole)
            formdata.append("email", email_u)
            formdata.append("cin", cin_u)
            formdata.append("id_agence", agence)
            formdata.append("password", cin_u)
            console.log("vv",);

            uc.createpersonnel(formdata).then(() => {
                Swal.fire(
                    'Good job!',
                    'personnel est ajouté',
                    'success'
                )
            })
        }
        else {
            alert("personnel existe")
            navigate("/liste_personnel")
        }

    }
    return <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <HeaderSiege />
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <SidebarAdmin />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">

                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Ajouter  personnel</h4>
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">

                                                <form className="form-horizontal form-label-left" onSubmit={onSubmit}>
                                                    <div className="row">


                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Nom</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" onChange={e => setNom(e.target.value)} placeholder="Username" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Prénom</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" onChange={e => setprenom(e.target.value)} placeholder="saisir prenom" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Addresse Email</label>
                                                            <div class="col-sm-9">
                                                                <input type="email" class="form-control" value={email_u} onChange={e => setEmail(e.target.value)} placeholder="email" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Numéro de carte d'identité</label>
                                                            <div class="col-sm-9">
                                                                <input type="number" class="form-control" pattern="[0-9]{8}" title="Le champ doit contenir 8 chiffres" value={cin_u} onChange={handle1Change} placeholder="cin" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Password</label>
                                                            <div class="col-sm-9">
                                                                <input type="number" class="form-control" pattern="[0-9]{8}" title="Le champ doit contenir 8 chiffres" value={cin_u} />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Role</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control" onChange={handleRoleChange}>
                                                                    <option value="">Sélectionner un rôle</option>
                                                                    <option value="PersonnelS">PersonnelS</option>
                                                                    <option value="PersonnelA">PersonnelA</option>
                                                                    <option value="DirecteurS">DirecteurS</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">

                                                            <label class="col-sm-3 col-form-label">Agence</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control" value={agence} onChange={handleChange}  >
                                                                    <option value="">Sélectionner une agence</option>
                                                                    {Data.map((option, index) => (
                                                                        <option key={index} value={option.id}>
                                                                            {option.nom_agence}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>






                                                        <div className="ln_solid" />
                                                        <div className="form-group">
                                                            <div className="col-md-6 col-md-offset-3">
                                                                <button className="btn btn-primary">Cancel</button>
                                                                <button id="send" type="submit" className="btn btn-success" >Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <form onSubmit={onSubmit}>
                                    <div className="item form-group">

                                        <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="text">Selectionner genre <span className="required">*</span>

                                        </label>

                                        <div class="radio">
                                            <label>
                                                <input type="radio" class="form-check-input" value="Masculin" id="optionsRadios1" name="optionsRadios" defaultChecked checked={selectedOption === "Masculin"}

                                                    onChange={handleOptionChange} /> Homme

                                            </label>



                                            <label>

                                                <input type="radio" class="form-check-input" value="Feminin" id="optionsRadios2" name="optionsRadios" checked={selectedOption === "Feminin"}

                                                    onChange={handleOptionChange} /> Femme

                                            </label>

                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label >Nom</label>
                                        <input type="text" onChange={e => setNom(e.target.value)} className="form-control" placeholder="Entrer votre nom" />

                                    </div>
                                    <div className="form-group">
                                        <label >Prenom</label>
                                        <input type="text" onChange={e => setprenom(e.target.value)} className="form-control" placeholder="Entrer votre prenom" />

                                    </div>
                                    <div className="form-group">
                                        <label >Email address</label>
                                        <input type="email" className="form-control" value={email_c} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />

                                    </div>
                                    <div className="form-group">
                                        <label >Numéro de carte d'identité</label>
                                        <input type="email" className="form-control" onChange={e => setCin(e.target.value)} placeholder="Enter email" />

                                    </div>
                                    <div className="form-group">
                                        <label >Date de naissance</label>
                                        <input type="date" className="form-control" onChange={e => setdate(e.target.value)} placeholder="Enter email" />

                                    </div>
                                    <div className="form-group">
                                        <label > addresse</label>
                                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                                    </div>


                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form> */}

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


export default Ajouter_personnel;