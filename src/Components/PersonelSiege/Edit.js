import React, { useEffect, useState } from 'react';

import { Link, useParams, useNavigate, Navigate } from 'react-router-dom';

import axios from 'axios';


import HeaderSiege from './HeaderSiege';


import userService from '../services/userService';


export default function EditProfileP() {

    const [email_c, setemail] = useState("")

    const [nom_c, setName] = useState("")

    const [prenom_c, setPrenom] = useState("")

    const [cin_c, setCin] = useState("")


    const [agence, setAgence] = useState("")

    const [password, setpassword] = useState("")



    const US = new userService()

    const formdata = new FormData();

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const x = localStorage.getItem('user_id');

    const loadUser = async () => {

        const res = await axios.get(`http://localhost:8080/USER/GETUSERBYID/${x}`, {

            headers: { "Authorization": `Bearer ${token}` }

        }).then((res) => {

            setName(res.data.firstname);

            setemail(res.data.email);

            setCin(res.data.cin)

            setPrenom(res.data.lastname)

            setAgence(res.data.agence.nom_agence)


        }).catch((err) => {

            console.log(err);


        })

    }

    useEffect(() => {

        loadUser();

    }, [])

    const onSubmit = async (e) => {

        const data = {

            "firstname": nom_c,

            "lastname": prenom_c,

            "cin": cin_c,

            "email": email_c,
            "password":password

        }

        e.preventDefault();

        await axios.put(`http://localhost:8080/USER/put/${x}`, data, {

            headers: { "Authorization": `Bearer ${token}` }

        });


    }


    return <div className="container-scroller">
    {/* partial:../../partials/_navbar.html */}
 
    {/* partial */}
    <div className="container-fluid page-body-wrapper">
        {/* partial:../../partials/_sidebar.html */}
        {/* <NavbarSIEGE /> */}
        {/* partial */}
        <div className="main-panel">
            <div className="content-wrapper">
              
                <div className="row">
  
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Détail du personnel</h4>
  
                                <form  >


<div className="row">

    {/* <div className="col-md-6">

        <div className="form-group">

            <label htmlFor="example-text-input" className="form-control-label">ID</label>

            <input className="form-control" type="text" defaultValue="1495076582" name="id" />

        </div>

    </div> */}


    <div className="col-md-6">

        <div className="form-group">

            <label htmlFor="example-text-input" className="form-control-label">nom</label>

            <input value={nom_c} type="text" className="form-control" name="nom" onChange={e => setName(e.target.value)} />

        </div>

    </div>

    <div className="col-md-6">

        <div className="form-group">

            <label htmlFor="example-text-input" className="form-control-label">prénom</label>

            <input value={prenom_c} className="form-control" type="text" name="nom" onChange={e => setPrenom(e.target.value)} />


        </div>

    </div>


    <div className="col-md-6">

        <div className="form-group">

            <label htmlFor="example-text-input" className="form-control-label"> addresse Email</label>

            <input value={email_c} className="form-control" type="email" name="email" onChange={e => setemail(e.target.value)} />

        </div>

    </div>





    <div className="col-md-6">

        <div className="form-group">

            <label htmlFor="example-text-input" className="form-control-label">numero cin: </label>

            <input className="form-control" type="text" value={cin_c} name="numt" />

        </div>

    </div>

    <div className="col-md-12">

<div className="form-group">

    <label htmlFor="example-text-input" className="form-control-label" placeholder ="modifier votre mot passe">mot de passe: </label>

    <input type="password" className="form-control" value={password} name="adresse" />

</div>

</div>

    <div className="col-md-12">

        <div className="form-group">

            <label htmlFor="example-text-input" className="form-control-label">nom agence:  </label>

            <input type="text" className="form-control" value={agence} name="adresse" />

        </div>

    </div>

</div>

<hr className="horizontal dark" />
<button type="submit" onClick={onSubmit}  class="btn btn-gradient-success btn-rounded btn-fw">Modifier</button>



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
