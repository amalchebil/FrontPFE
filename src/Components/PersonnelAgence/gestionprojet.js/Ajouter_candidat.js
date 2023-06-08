import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Swal from 'sweetalert2';
import axios from 'axios';
import ProjetService from '../../services/projetService';
import HeaderSiege from '../../PersonelSiege/HeaderSiege';

const Ajouter_candidat = () => {

    const navigate = useNavigate();
    const { id } = useParams()
    console.log(id);
    const [idc, idclient] = useState("")
    const [projet_act, setProjet] = useState("")
    const [gouvernerat, setgouvernerat] = useState("ariana")
    const [descp, setDesc] = useState("")
    const [cin_c, setCin] = useState("")
    const [activite, setPt] = useState("")
    const [montant, setm] = useState("")
    const [data, setData] = useState("")
    const [projet, setprojet] = useState("")
    const formdata = new FormData();
    const uc = new ProjetService();
    function handleChange(event) {
        setgouvernerat(event.target.value);
    }

    function findClientIdByCIN(cin, clients) {
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].cin_c === cin) {
                console.log("cin client :", clients[i].cin_c, "id client : ", clients[i].id_client)
                return clients[i].id_client;
            }
        }
        return null; // Retourne null si aucun client correspondant n'est trouvé
    }
    function cinclient(cin) {
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8080/Client/GETALLClient', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            console.log("result", res.data);
            setData(res.data);
        }).catch((err) => {

            console.log(err);

        })
        const x = findClientIdByCIN(cin, data)
        return x;
        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].cin_c === cin) {
        //         return data[i].id_client;
        //         console.log("hajer", data[i].id_client)
        //     }
        // }

        // return null;
    }

    const agc1 = localStorage.getItem('id_agence')
    console.log(agc1);

    useEffect(() => {
        uc.getid(id).then((res) => {
            setPt(res.data.activite)
            setm(res.data.montant)
            setProjet(res.data.id)
            setprojet(res.data.gouvernerat)
        })
        console.log("nnn", id, gouvernerat);
    }, []);


    function handle1Change(event) {
        const newCin = event.target.value;
        setCin(newCin);
        console.log("hajeeer", newCin)
        const token = localStorage.getItem('token');

        axios.get('http://localhost:8080/Client/GETALLClient', {

            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            console.log("result", res.data);
            setData(res.data);
        }).catch((err) => {

            console.log(err);

        })
        const x = findClientIdByCIN(newCin, data)
        idclient(x)
        console.log("zizou", idc);

    }

    const onSubmit = () => {

        if (idc != null) {
            formdata.append("actProjet", activite)
            formdata.append("gouvernorat", gouvernerat)
            formdata.append("descp", descp)
            formdata.append("montant_net", montant)
            formdata.append("projet.id", id)
            formdata.append("cin_c", cin_c)
            formdata.append("client.id_client", idc)
            uc.createcandidature(formdata).then(() => {
            })
            Swal.fire(
                'Good job!',
                'candidature projet est ajouté',
                'success'
            )
        }
        else {
            alert("client n'existe pas")
            navigate("/ajouter_client")
        }

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
                                    <h4 class="card-title">Ajouter  Candidat</h4>

                                    <form className="form-horizontal form-label-left" onSubmit={(e) => onSubmit(e)}>
                                        {/* <div className="item form-group">
                                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">ID demande <span className="required">*</span>
                                                </label>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <input className="form-control col-md-7 col-xs-12" value={id} name="name" type="text"

                                                    />

                                                </div>
                                            </div> */}
                                        <br></br><br></br>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Id projet</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={id} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Activité</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" value={activite} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Description</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" onChange={e => setDesc(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Numéro de carte d'identité de client</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" onChange={handle1Change} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="ln_solid" />
                                        <div className="form-group">
                                            <div className="col-md-6 col-md-offset-3">
                                                <button className="btn btn-primary">Cancel</button>
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


export default Ajouter_candidat;