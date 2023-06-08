import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import demandeService from "../services/demandeService"
import SubSerivce from '../services/SubService';
import DemandeSubSerivce from '../services/demandeSub';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import NavBarDIR from './NavBarDIR';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
function ViewSUBDD() {
    const[isSUBDropdownOpen,setSubDropdownOpen]= useState(false);
    const[isDemandesSUBDropdownOpen,setDemandesSubDropdownOpen]= useState(false);
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
    
     /*********client */
  const [id_client, setIdc] = useState("")
  const [nom_c, setNom] = useState("")
  const [adresse_c, setadress] = useState("")
  const [date_naiss, setDate] = useState("")
  const [numtel_c, setNumt] = useState("")
  const [cin_c, setCin] = useState("")
  const [prenom_c, setPrenom] = useState("")
  const [sexe_c, setSexe] = useState("")
  const [role, setrole] = useState("")
  const [description, setDescription] = useState("")
const [id1, setId]= useState("")
  const [montant_net, setMontant] = useState("")
  const { id } = useParams();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }
    
    useEffect(() => {
        GetuserfromidfromBack(id)
    
    
        setId(id)
        console.log("the id is:",id)
    
    
      }, [])
    
      const GetuserfromidfromBack = (id) => {
        console.log("hhhh")
        uc.getid(id).then((res) => {
          console.log(res)
          /******set demande  */
          setId(res.data.id_demande)
          setMontant(res.data.montant_net)
          setDescription(res.data.description)
          /*******set client */
          setIdc(res.data.client.id_client)
          setNom(res.data.client.nom_c)
          setPrenom(res.data.client.prenom_c)
          setCin(res.data.client.cin_c)
          setDate(res.data.client.date_naiss)
          setadress(res.data.client.adresse_c)
          setNumt(res.data.client.numtel_c)
    
          console.log("email", montant_net)
        }
        )
    
      }
  
    const navigate = useNavigate()
    const formdata = new FormData();
    const uc = new DemandeSubSerivce();
  const logout = () => {
  
  
        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
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
                                <h4 className="card-title">Détail de demande de subventions</h4>
                                <form>
  
  
  <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="example-text-input" className="form-control-label">ID</label>
          <input className="form-control" value={id_client} type="text" name="id" />
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
          <label htmlFor="example-text-input" className="form-control-label">nom </label>
          <input className="form-control" value={nom_c} type="text" name="nom" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="example-text-input" className="form-control-label">prenom </label>
          <input className="form-control" value={prenom_c} type="text" name="nom" />
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
    <hr className="horizontal dark" />
    <p className="text-uppercase text-sm">Les informations de demande</p>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="example-text-input" className="form-control-label">ID demande</label>
          <input className="form-control" type="text" value={id} name="iddemande" />
        </div>
      </div>
     
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="example-text-input" className="form-control-label">Montant net</label>
          <input className="form-control" type="text" value={montant_net} name="mt" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="example-text-input" className="form-control-label">description</label>
          <input className="form-control" type="text" value={description} name="mt" />
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
        </div>
        {/* main-panel ends */}
    </div>
    {/* page-body-wrapper ends */}
  </div>
}

export default ViewSUBDD;