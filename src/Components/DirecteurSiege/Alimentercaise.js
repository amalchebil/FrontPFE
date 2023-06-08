import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agenceService from '../services/agenceService';
import Swal from 'sweetalert2';
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
const Alimentercaise = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [agence, setAgence] = useState("")
    const navigate = useNavigate()
    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const [data, setData] = useState([]);
    const [montant_p, setMontant] = useState("")
    const logout = () => {
        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }
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

    function handleChange(event) {

        setAgence(event.target.value);
        console.log("agence", agence);
    }

    const x = localStorage.getItem("id_agence")
    const onSubmit = () => {


        const token = localStorage.getItem('token');
        console.log(montant_p);
        axios.post(`http://localhost:8080/AGENCE/Alimenter/${x}/${agence}?montant=${montant_p}`,
            {
                "montant": montant_p
            },
            { headers: { "Authorization": `Bearer ${token}` } }

        ).then((res) => {
            Swal.fire(
                'Good job!',
                'caisse est alimentée',
                'success'
            )

        }).catch((err) => {

            console.log(err);

        })


        // const id_agence=res.agc.id;

        // console.log(id_agence)


    };



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
                              <h4 className="card-title">Détail de demande de préts</h4>
                              <form className="form-horizontal form-label-left" >


<div className="row">
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">ID Agence centrale</label>
      <input className="form-control" value={x} type="text" name="id" />
    </div>
  </div>
  
  
  
 
  {/* <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">Date naissance</label>
      <input className="form-control" type="text" value={sexe_c} name="date" />
    </div>
  </div> */}
  
  <div className="row">
<div className="col-md-6">
<div className="form-group">
<label htmlFor="example-text-input" className="form-control-label">Id agence <span className="required">*</span>
    </label>
    <div className="col-md-6 col-sm-6 col-xs-12">
        <select value={agence} onChange={handleChange}  >
            {data.map((option, index) => (
                <option key={index} value={option.id}>
                    {option.nom_agence}
                </option>
            ))}
        </select>
    </div>
    </div>
</div>
</div>
</div>

<div className="row">
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">Montant</label>
      <input className="form-control" onChange={e => setMontant(e.target.value)} type="text" name="id" />
    </div>
  </div>
  </div>











<div className="ln_solid" />
<div className="form-col-md-12">
    <div className="col-md-6 col-md-offset-3">

        <button id="send" type="submit" className="btn btn-success" onClick={onSubmit}>Alimenter</button>
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



export default Alimentercaise;