import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import demandeService from "../services/demandeService"
import SubSerivce from '../services/SubService';
import DemandeSubSerivce from '../services/demandeSub';
import { useParams } from 'react-router-dom';
import { useNavigate,useLocation } from "react-router-dom"
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
import pretService from '../services/pretService';

const View_pretD = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `/upload_client?${queryString}`;
    };


    const navigate = useNavigate()

    const token = localStorage.getItem('token');

    const { id } = useParams();
    const logout = () => {

        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    const [datePremiereEcheance, setdatee] = useState("")
    const [type_plan, setTypeplan] = useState("")
    const [typepret, setPret] = useState("")
    const [montant_p, setme] = useState("")
    const [montantParEcheance, setmp] = useState("")

    const dm = new pretService()
    const location = useLocation();
    useEffect(() => {
        GetuserfromidfromBack(location.state.id)

        console.log("the id is:", location.state.id)

    }, [])

    const GetuserfromidfromBack = (id) => {
        console.log("hhhh")
        dm.getid(id).then((res) => {
            console.log(res)
            /******set demande  */

            setPret(res.data.typepret)
            setTypeplan(res.data.type_plan)
            setmp(res.data.montantParEcheance)
            setme(res.data.montant_p)
            setdatee(res.data.datePremiereEcheance)
            //setType(res.data.type_plan)
            /*******set client */

        }
        )

    }
    return <div>
        < HeaderSiege />
        {/* partial */}
        < div className="container-fluid page-body-wrapper" >
            {/* partial:../../partials/_sidebar.html */}
            <NavBarDIR />
            {/* partial */}
            < div className="main-panel" >
                <div className="content-wrapper">
                  
                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="mt-5">Informations du pret</h5>

                                    <form onSubmit={handleSubmit}>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID</label>
                                                    <input className="form-control" value={id} type="text" name="id" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Type pret</label>
                                                    <input className="form-control" type="text" value={typepret} name="cin" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Type plan </label>
                                                    <input className="form-control" value={type_plan} type="text" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Date écheance </label>
                                                    <input className="form-control" value={datePremiereEcheance} type="text" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Montant</label>
                                                    <input className="form-control" type="text" value={montant_p} name="date" />
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
                                                    <label htmlFor="example-text-input" className="form-control-label">Montant Echéance</label>
                                                    <input className="form-control" type="text" value={montantParEcheance} name="numt" />
                                                </div>
                                            </div>

                                        </div>

                                        <hr className="horizontal dark" />


                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* content-wrapper ends */}
                {/* partial:../../partials/_footer.html */}
                
                {/* partial */}
            </div >
            {/* main-panel ends */}
        </div >
        {/* page-body-wrapper ends */}
    </div >
}


export default View_pretD;
