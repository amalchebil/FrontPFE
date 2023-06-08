import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom'
import qs from 'qs';
import DemandeSubSerivce from '../../services/demandeSub';
import demandeService from '../../services/demandeService';
import axios from 'axios';
import NavbarSIEGE from '../NavBarSIEGE';
import HeaderSiege from '../HeaderSiege';


const ViewdemandesS = () => {
  
  const [status, setStatus] = useState("Rejeter")
  const [statu, setStatu] = useState("Approuver")
  // const [Approuver, setApprouver] = useState("")
  // const [rejeter, setRejeter] = useState("Rejeter")
  const[isSUBDropdownOpen,setSubDropdownOpen]= useState(false);
  const[isDemandesSUBDropdownOpen,setDemandesSubDropdownOpen]= useState(false);
  const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
  const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
  const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
  const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
  const navigate = useNavigate()
  const logout = () => {


      console.log("hhhhhhh")
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      navigate('/', { replace: true });
  }

  const [id_demande, setId] = useState("")
  const [montant_net, setMontant] = useState("")
  const [description, setDescription] = useState("")

  const [dateAttribut, setDateA] = useState("")
  const a = 'newStatus=approuver';
  const par = qs.parse(a);
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
  const formdata = new FormData()
  const dm = new DemandeSubSerivce()
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    GetuserfromidfromBack(id)
  }, [])

    
  useEffect(() => {
    GetuserfromidfromBack(id)


    setId(id)
    console.log("the id is:",id)


  }, [])

  const GetuserfromidfromBack = (id) => {
    console.log("hhhh")
    dm.getid(id).then((res) => {
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
  const view = (id) => {
    navigate("/transClient/" + id, { state: { id: id } })

  }
  const token = localStorage.getItem('token');

  const handleChange = () => {

    formdata.append("newStatus", statu)

    formdata.append("newStatus", statu)

    axios.post(`http://localhost:8080/DEMANDESUBVENTION/${id}/modifier-statut?newStatus=${statu}`,{
      "newStatus": statu
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  ).then((res) => {
    console.log("c bon", statu)
    console.log(id);

  }).catch((err) => {

    console.log(err);

  })
    console.log("c bon", statu)
    // dm.modifier(formdata).then((res) => {
    //   console.log("c bon", res.status)
    //   console.log(res)
    /******set demande  */

    //setApprouver(res.data.status)

  }
  const handleChangestatu = () => {

    formdata.append("newStatus", status)

    axios.post(`http://localhost:8080/DEMANDESUBVENTION/${id}/modifier-statut?newStatus=${status}`,{
      "newStatus": statu
    },
    { headers: { "Authorization": `Bearer ${token}` } }
  ).then((res) => {
    console.log("c bon", statu)
    console.log(id);

  }).catch((err) => {

    console.log(err);

  })
    console.log("c bon", status)
    // dm.modifier(formdata).then((res) => {
    //   console.log("c bon", res.status)
    //   console.log(res)
    /******set demande  */

    //setApprouver(res.data.status)

  }
  return <div className="container-scroller">
  {/* partial:../../partials/_navbar.html */}
  <HeaderSiege />
  {/* partial */}
  <div className="container-fluid page-body-wrapper">
      {/* partial:../../partials/_sidebar.html */}
      <NavbarSIEGE />
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
  <button id="send" type="submit" class="btn btn-gradient-secondary" onClick={(e) => { view(id_client) }} >transactions du client</button>

<button type="submit" className="btn btn-success" onClick={handleChange}>Approuver</button>
<button type="submit" class="btn btn-danger btn-fw"onClick={handleChangestatu}>Rejeter</button>


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

export default ViewdemandesS;