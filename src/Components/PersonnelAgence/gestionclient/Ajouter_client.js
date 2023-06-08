import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import agenceService from '../../services/agenceService';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';
const Ajouter_client = () => {
    const navigate = useNavigate()

    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }


    console.log("window");
    const ag = new agenceService();

    const [email_c, setEmail] = useState("")

    const [nom_c, setNom] = useState("")

    const [prenom_c, setprenom] = useState("")


    const [date_naiss, setdate] = useState("")

    const [adresse_c, setadress] = useState("")

    const [numtel_c, setNumt] = useState("")

    const [cin_c, setCin] = useState("")
    const [agence, setAgence] = useState("")

    const [Data, setData] = useState([])

    const [selectedOption, setSelectedOption] = useState("Masculin");



    const handleOptionChange = (event) => {

        setSelectedOption(event.target.value);

    };
    function handleChange(event) {

        setAgence(event.target.value);
        console.log("agence", agence);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        ag.getAll().then((res) => {
            console.log("result", res.data);
            setData(res.data);
        }
        )

    }, []);


    const formdata = new FormData();

    const uc = new userService();

    const onSubmit = () => {

        formdata.append("nom_c", nom_c)

        formdata.append("email_c", email_c)

        formdata.append("sexe_c", selectedOption)

        formdata.append("date_naiss", date_naiss)

        formdata.append("adresse_c", adresse_c)

        formdata.append("cin_c", cin_c)

        formdata.append("prenom_c", prenom_c)

        formdata.append("numtel_c", numtel_c)
        formdata.append("agc.id", localStorage.getItem('id_agence'))

        console.log(date_naiss)

        console.log(numtel_c)

        uc.create(formdata).then(() => {
            alert(
                'client est ajouté',)


        }).catch((error) => {

            alert('error cin existe')



        });

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
                                    <h4 className="card-title">Ajouter  client</h4>
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-body">
                                              
                                                <form class="form-sample" onSubmit={onSubmit} >
                                                    <p class="card-description"> Client info </p>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Nom</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" onChange={e => setNom(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Prénom</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" onChange={e => setprenom(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">

                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Numéro de carte d'identité</label>
                                                                <div class="col-sm-9">
                                                                    <input type="number" class="form-control" onChange={e => setCin(e.target.value)} />
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Date de naissance</label>
                                                                <div class="col-sm-9">
                                                                    <input type="date" class="form-control" placeholder="dd/mm/yyyy" onChange={e => setdate(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Adresse</label>
                                                                <div class="col-sm-9">
                                                                    <input type="text" class="form-control" onChange={e => setadress(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Numero de téléphone</label>
                                                                <div class="col-sm-9">
                                                                    <input type="number" class="form-control" onChange={e => setNumt(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Email</label>
                                                                <div class="col-sm-9">
                                                                    <input type="email" class="form-control" onChange={e => setEmail(e.target.value)} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group row">
                                                                <label class="col-sm-3 col-form-label">Selectionner genre</label>
                                                                <div class="col-sm-4">
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input type="radio" class="form-check-input" onChange={handleOptionChange} value="Masculin" id="optionsRadios1" name="optionsRadios" defaultChecked checked={selectedOption === "Masculin"} /> Homme </label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-5">
                                                                    <div class="form-check">
                                                                        <label class="form-check-label">
                                                                            <input type="radio" class="form-check-input" value="Feminin" id="optionsRadios2" name="optionsRadios" checked={selectedOption === "Feminin"} onChange={handleOptionChange} /> Femme </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
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


export default Ajouter_client;