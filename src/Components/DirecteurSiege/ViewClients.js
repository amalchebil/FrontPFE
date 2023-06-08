import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Swal from "sweetalert2";
import userService from '../services/userService';
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';

const ViewClients = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `/upload?${queryString}`;
    };
    const { id } = useParams();
    const [client, setClient] = useState([])
    const [email_c, setemail] = useState("")
    const [nom_c, setName] = useState("")
    const [adresse_c, setadress] = useState("")
    const [date_naiss, setDate] = useState("")
    const [numtel_c, setNumt] = useState("")
    const [cin_c, setCin] = useState("")
    
    const [sexe_c, setSexe] = useState("")
    const [role, setrole] = useState("")
    const US = new userService()
    const location = useLocation();
    useEffect(() => {
        GetuserfromidfromBack(id)




    }, [])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const navigate = useNavigate()

    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }

    const GetuserfromidfromBack = (id) => {
        console.log("hhhh")
        US.getid(id).then((res) => {
            console.log(res)
            setemail(res.data.email_c)
            setName(res.data.nom_c)
            setCin(res.data.cin_c)
            setDate(res.data.date_naiss)
            setadress(res.data.adresse_c)
            setNumt(res.data.numtel_c)
    
            setSexe(res.data.sexe_c)
            console.log("email", nom_c)
        }
        )

    }
    return <div className="container-scroller">
    {/* partial:../../partials/_navbar.html */}
    <HeaderSiege />
    {/* partial */}
    <div className="container-fluid page-body-wrapper">
        {/* partial:../../partials/_sidebar.html */}
        <NavBarDIR />
        {/* partial */}
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title"> Form elements </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Forms</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">

                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Détail de client</h4>

                                <form onSubmit={handleSubmit}>


<div className="row">
<div className="col-md-6">
<div className="form-group">
  <label htmlFor="example-text-input" className="form-control-label">ID</label>
  <input className="form-control" type="text" defaultValue="1495076582" name="id" />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
  <label htmlFor="example-text-input" className="form-control-label">CIN</label>
  <input className="form-control" type="text" value={cin_c} name="cin" />
</div>
</div>
<div className="col-md-6">
<div className="form-group">
  <label htmlFor="example-text-input" className="form-control-label">nom & prénom</label>
  <input className="form-control" value={nom_c} type="text" name="nom" />


</div>
</div>
<div className="col-md-6">
<div className="form-group">
  <label htmlFor="example-text-input" className="form-control-label"> addresse Email</label>
  <input className="form-control" value={email_c} type="email" name="email" />
</div>
</div>

<div className="col-md-6">
<div className="form-group">
  <label htmlFor="example-text-input" className="form-control-label">Date naissance</label>
  <input className="form-control" type="text" value={date_naiss} name="date" />
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
  <label htmlFor="example-text-input" className="form-control-label">numéro de téléphone</label>
  <input className="form-control" type="text" value={numtel_c} name="numt" />
</div>
</div>
<div className="col-md-12">
<div className="form-group">
  <label htmlFor="example-text-input" className="form-control-label">Addresse</label>
  <input className="form-control" type="text" value={adresse_c} name="adresse" />
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

export default ViewClients;