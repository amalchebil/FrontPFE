import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../PersonnelAgence/Navbar';
import SidebarAdmin from './SidebarAdmin';
import userService from '../services/userService';
import HeaderSiege from '../PersonelSiege/HeaderSiege';

const View_personnel = () => {


    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });
    // const [id, setId] = useState("");
    const [client, setClient] = useState([])
    const [email, setemail] = useState("")
    const [firstname, setName] = useState("")
    const [lastname, setPrenom] = useState("")
    const [cin, setcin] = useState("")
    const [agence, setagence] = useState("")

    const [role, setrole] = useState("")
    const US = new userService()
    const formdata = new FormData();
    const navigate = useNavigate();
    const loadUser = async () => {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:8080/USER/GETUSERBYID/${id}`, {
            headers: { "Authorization": `Bearer ${token}` }
        }).then((res) => {
            setName(res.data.firstname);
            setemail(res.data.email);
            setPrenom(res.data.lastname)
            setrole(res.data.role)
            setagence(res.data.agence)
            setcin(res.data.cin)


        }).catch((err) => {
            console.log(err);

        })
    }
    useEffect(() => {
        loadUser();
    }, [])
    const onSubmit = async (e) => {
        const data = {
            "firstname": firstname,
            "lastname": lastname,
            "agence.nom_agence": agence,
            "email": email,
            "cin": cin,
            "role": role
        }
        e.preventDefault();
        await axios.put(`http://localhost:8080/USER/put/${id}`, data);
        navigate("/liste_p")
    }
    return <div className="container-scroller">
        {/* partial:../../partials/_navbar.html */}
        <HeaderSiege/>
        {/* partial */}
        <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_sidebar.html */}
            <SidebarAdmin />
            {/* partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="page-header">
                        
                        
                    </div>
                    <div className="row">

                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Détails du personnel</h4>

                                    <form >


                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">ID</label>
                                                    <input className="form-control" type="text" value={id} name="id" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">nom  </label>
                                                    <input value={firstname} type="text" className="form-control" name="nom" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">prénom</label>
                                                    <input value={lastname} className="form-control" type="text" name="nom" />


                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label"> addresse Email</label>
                                                    <input value={email} className="form-control" type="email" name="email" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Cin</label>
                                                    <input type="text" className="form-control" value={cin} name="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">Role du personnel</label>
                                                    <input type="text" className="form-control" value={role} name="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="example-text-input" className="form-control-label">agence </label>
                                                    <input type="text" className="form-control" value={agence.nom_agence} name="text" />
                                                </div>
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
               
                {/* partial */}
            </div>
            {/* main-panel ends */}
        </div>
        {/* page-body-wrapper ends */}
    </div>


}

export default View_personnel;