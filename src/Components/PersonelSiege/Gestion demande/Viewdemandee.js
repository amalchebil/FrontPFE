import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs';
import NavbarSIEGE from '../NavBarSIEGE';
import HeaderSiege from '../HeaderSiege';

import demandeService from '../../services/demandeService';
import axios from 'axios';

const Viewdemandee = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  const [isSUBDropdownOpen, setSubDropdownOpen] = useState(false);
  const [isDemandesSUBDropdownOpen, setDemandesSubDropdownOpen] = useState(false);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `/upload_client?${queryString}`;
  };


  /*********damnde */

  const [nom_g, setNomg] = useState("Non disponible")
  const [prenom_g, setPNomg] = useState("Non disponible")
  const [cin_g, setCin_g] = useState("Non disponible")
  const [relation_g, setRelation] = useState("Non disponible")
  const [descrip_g, setDescription] = useState("Non disponible")
  const [id_garant, setIDg] = useState("Non disponible")


  const [id_demande, setId] = useState("")
  const [date_decaissement, setDated] = useState("")
  const [date_echeance, setDatec] = useState("")
  const [date_remb_pref, setDateR] = useState("")
  const [montant_net, setMontant] = useState("")
  const [dateAttribut, setDateA] = useState("")
  const [type_plan, setType] = useState("")
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
  const dm = new demandeService()
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    GetuserfromidfromBack(id)
  }, [])

  const GetuserfromidfromBack = (id) => {

    dm.getiddemande(id).then((res) => {

      /******set demande  */
      setId(res.data.id_demande)
      setMontant(res.data.montant_net)
      setDatec(res.data.date_echeance)
      setDated(res.data.date_decaissement)
      setDateR(res.data.date_remb_pref)
      setDateA(res.data.dateAttribut)
      setType(res.data.type_plan)
      /*******set client */
      setIdc(res.data.client.id_client)
      setNom(res.data.client.nom_c)
      setPrenom(res.data.client.prenom_c)
      setCin(res.data.client.cin_c)
      setDate(res.data.client.date_naiss)
      setadress(res.data.client.adresse_c)
      setNumt(res.data.client.numtel_c)
      // if (res.data.garant.id_garant !== null) {
      //     setIDg(res.data.garant.id_garant)
      //     setNomg(res.data.garant.nom_g)
      //     setPNomg(res.data.garant.prenom_g)
      //     setRelation(res.data.garant.relation_g)
      //     setDescription(res.data.garant.descrip_g)
      //     setCin_g(res.data.garant.cin_g)

      // }
    }
    )

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

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">

                <li className="breadcrumb-item active" aria-current="page">Détail  du demande</li>
              </ol>
            </nav>
          </div>
          <div className="row">

            <div className="col-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Détail de demande de préts</h4>

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
                          <label htmlFor="example-text-input" className="form-control-label">ID pret</label>
                          <input className="form-control" type="text" value={id_demande} name="iddemande" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Type pret</label>
                          <input className="form-control" type="text" value={dateAttribut} name="dateA" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">planification </label>
                          <input className="form-control" type="text" value={type_plan} name="type" />
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
                          <label htmlFor="example-text-input" className="form-control-label">Date de création</label>
                          <input className="form-control" type="text" value={dateAttribut} name="dateA" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Date Echeance</label>
                          <input className="form-control" type="text" value={date_echeance} name="datec" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Date Décaissement</label>
                          <input className="form-control" type="text" value={date_decaissement} name="dated" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="example-text-input" className="form-control-label">Date remboursement préferer</label>
                          <input className="form-control" type="text" value={date_remb_pref} name="dater" />
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

export default Viewdemandee;