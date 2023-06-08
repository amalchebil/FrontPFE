import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarSIEGE from '../NavBarSIEGE';
import HeaderSiege from '../HeaderSiege';
import Swal from "sweetalert2";
import ProjetService from '../../services/projetService';
export default function ViewCondidature() {
    const [status, setStatus] = useState("Rejeter")
    const [statu, setStatu] = useState("Approuver")
    const formdata = new FormData()
    const [actProjet, setProjet] = useState("")

    const [descp, setDescp] = useState("")

    const [client, setClient] = useState("")

    const [isSUBDropdownOpen, setSubDropdownOpen] = useState(false);
    const [isDemandesSUBDropdownOpen, setDemandesSubDropdownOpen] = useState(false);
    const [isPretsDropdownOpen, setPretsDropdownOpen] = useState(false);
    const [isDemandesDropdownOpen, setDemandesDropdownOpen] = useState(false);
    const [isDemandesPDropdownOpen, setDemandesPDropdownOpen] = useState(false);
    const [isProjetDropdownOpen, setPojetsDropdownOpen] = useState(false);
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }
    const [gouvernorat, setgouvernerat] = useState("ariana")
    const [nom_c, setName] = useState("")
    const [prenom_c, setPrenom] = useState("")
    const [adresse_c, setadress] = useState("")
    const [date_naiss, setDate] = useState("")
    const [numtel_c, setNumt] = useState("")
    const [cin_c, setCin] = useState("")

    const { id } = useParams();
    const navigate = useNavigate();

    const loadUser = async () => {
        uc.getidc(id).then((res) => {
            setProjet(res.data.actProjet)
            setDescp(res.data.descp)
            setgouvernerat(res.data.gouvernorat)


            setClient(res.data.client.id_client)
            setName(res.data.client.nom_c)
            setPrenom(res.data.client.prenom_c)
            setCin(res.data.client.cin_c)
            setadress(res.data.client.adresse_c)
        })


    };
   
    const handleChange = () => {
        const token = localStorage.getItem('token');
        formdata.append("newStatus", statu)

        axios.post(`http://localhost:8080/DEMANDEPROJET/${id}/modifier-statut?newStatus=${statu}`,
            {
                "newStatus": statu
            },
            { headers: { "Authorization": `Bearer ${token}` } }
        ).then((res) => {
            console.log("c bon", statu)
            console.log(id);

        }).catch((err) => {

            console.log(err);

        })

        // dm.modifier(formdata).then((res) => {
        //   console.log("c bon", res.status)
        //   console.log(res)
        /******set demande  */

        //setApprouver(res.data.status)

    }
    const handleChangestatu = () => {
        const token = localStorage.getItem('token');
        console.log(token);
        formdata.append("newStatus", status)

        axios.post(
            `http://localhost:8080/DEMANDEPROJET/${id}/modifier-statut?newStatus=${status}`,
            { "newStatus": status },
            { headers: { "Authorization": `Bearer ${token}` } }
        ).then(() => {
            console.log("c bon", status)
        }).catch((err) => {
            alert(err)
            console.log(err);
        })

        // dm.modifier(formdata).then((res) => {
        //   console.log("c bon", res.status)
        //   console.log(res)
        /******set demande  */

        //setApprouver(res.data.status)

    }

    useEffect(() => {
        loadUser();
    }, [])


    const uc = new ProjetService();
    const view = (id) => {
        navigate("/transClient/" + id, { state: { id: id } })
    
      }
    const handleSubmit = (event) => {
        //  event.preventDefault();
        const formD = new FormData(event.target);
        const queryString = new URLSearchParams(formD).toString();
        window.location.href = `/uploadproj?${queryString}`;

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
                {/* <div className="page-header">
                    <h3 className="page-title"> Form elements </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Forms</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                        </ol>
                    </nav>
                </div> */}
                <div className="row">
  
                    <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Détail de demande de préts</h4>
  
                                <form>
                                 
                                <div className="row">    
                                <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">Activité</label>
      <input className="form-control" value={actProjet} type="text" name="id" />
    </div>
  </div>


  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">gouvernorat</label>
      <input className="form-control" value={gouvernorat} type="text" name="id" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">Description</label>
      <input className="form-control" value={descp} type="text" name="id" />
    </div>
  </div>


                                            <h2>Information du client</h2>

                                            <div className="clearfix" />
                                            <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">id client</label>
      <input className="form-control" value={client} type="text" name="id" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">nom</label>
      <input className="form-control" value={nom_c} type="text" name="id" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">prenom</label>
      <input className="form-control" value={prenom_c} type="text" name="id" />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">adresse</label>
      <input className="form-control" value={adresse_c} type="text" name="id" />
    </div>
  </div>
                                            

  <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="example-text-input" className="form-control-label">Cin client</label>
      <input className="form-control" value={cin_c} type="text" name="id" />
    </div>
  </div>
</div>
                                            <div className="ln_solid" />
                                         


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
