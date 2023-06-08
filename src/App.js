import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import T from './T';
import Login from './Components/auth/Login';
import Liste_client from './Components/PersonnelAgence/gestionclient/Liste_client';
import View_client from './Components/PersonnelAgence/gestionclient/View_client';
import Imprime_client from './Components/PersonnelAgence/gestionclient/Imprime_client';
import Editer_client from './Components/PersonnelAgence/gestionclient/Editer_client';
import Ajouter_client from './Components/PersonnelAgence/gestionclient/Ajouter_client';
import Liste_demandepret from './Components/PersonnelAgence/gestiondemande/Liste_demandepret';
import Liste_demandepretA from './Components/PersonnelAgence/gestiondemande/Liste_demandepretA';
import Liste_demandepretrejeter from './Components/PersonnelAgence/gestiondemande/Liste_demandepretrejeter';
import View_demandepret from './Components/PersonnelAgence/gestiondemande/View_demandepret';
import Edit_demandepret from './Components/PersonnelAgence/gestiondemande/Edit_demandepret';
import Ajouter_demande from './Components/PersonnelAgence/gestiondemande/Ajouter_demande';
import Liste_pretencours from './Components/PersonnelAgence/gestiondemande/Liste_pretencours';
import Liste_pretDe from './Components/PersonnelAgence/gestiondemande/Liste_pretDe';
import Ajouter_garant from './Components/PersonnelAgence/gestiondemande/Ajouter_garant';
import Liste_garant from './Components/PersonnelAgence/gestiondemande/Liste_garant';
import Edit_garant from './Components/PersonnelAgence/gestiondemande/Edit_garant';
import View_garant from './Components/PersonnelAgence/gestiondemande/View_garant';
import View_pret from './Components/PersonnelAgence/gestiondemande/View_pret';
//import Edit_pret from './Components/PersonnelAgence/gestiondemande/Edit_pret';
import Liste_pretremboursé from './Components/PersonnelAgence/gestiondemande/Liste_pretremboursé';
import Index from './Components/PersonnelAgence/Index';
import Liste_projet from './Components/PersonnelAgence/gestionprojet.js/Liste_projet';
import View_projett from './Components/PersonnelAgence/gestionprojet.js/View_projett';
import Edit_projet from './Components/PersonnelAgence/gestionprojet.js/Edit_projet';
import Liste_projetapprouvés from './Components/PersonnelAgence/gestionprojet.js/Liste_projetapprouvés';
import Liste_projetdecaissés from './Components/PersonnelAgence/gestionprojet.js/Liste_projetdecaissés';
import View_p from './Components/PersonnelAgence/gestionprojet.js/View_p';
import Ajouter_candidat from './Components/PersonnelAgence/gestionprojet.js/Ajouter_candidat';
import Ajouter_projet from './Components/PersonnelAgence/gestionprojet.js/Ajouter_projet';
import Liste_personnels from './Components/Admin.js/Liste_personnels';
import View_personnel from './Components/Admin.js/View_personnel';
import Ajouter_personnel from './Components/Admin.js/Ajouter_personnel';



import ListeSuRejeterS from './Components/PersonelSiege/gestion sub/ListeSubRej.JS';
import ListeENCOURSSubSEIGE from './Components/PersonelSiege/gestion sub/SubEnCour';
import View_d_subS from './Components/PersonelSiege/gestion sub/view_d_sub';
import ListeSubApprouverrAS from './Components/PersonelSiege/gestion sub/listeSUbApprouvé';
import SUBENcourss from './Components/PersonelSiege/gestion sub/SubEnCourss';
import REJ from './Components/PersonelSiege/gestion sub/ListeSubreje';
import ListeSuRejeterSSS from './Components/PersonelSiege/gestion sub/ListeSubRej.JS'
import EventClientS from './Components/PersonelSiege/transactionClient';
import Listeparchiver from './Components/PersonelSiege/Gestion Projet/Listeparchiver';
import Listepretsiege from './Components/PersonelSiege/Gestion demande/Listeprets';
import ProfileClient from './Components/PersonelSiege/ProfileClient';
/**sub */
import ListeSubArchivéesS from './Components/PersonelSiege/gestion sub/ListeSubArchivé';
import ListeSubComite from './Components/PersonelSiege/gestion sub/ListeSub';
import ListedSubApprouverssss from './Components/PersonelSiege/gestion sub/ListeSubApp';
import ViewdemandesS from './Components/PersonelSiege/gestion sub/comiteView';
import Listedemandesr from './Components/PersonelSiege/Gestion demande/Listedemandesrejeter';
import Listegarants from './Components/PersonelSiege/Listegarants';
import Viewdemandessiege from './Components/PersonelSiege/Gestion demande/Viewdemandesiege';
import ListedApprouverr from './Components/PersonelSiege/Gestion demande/ListedApprouver';
import Listattente from './Components/PersonelSiege/Gestion demande/Listeenattente';
import ListedecaisserSubSEIGE from './Components/PersonelSiege/gestion sub/SubDecaisse';
import Homes from './Components/PersonelSiege/Homes';
import Listeclientsiege from './Components/PersonelSiege/Listeclient';
import Listesagences from './Components/PersonelSiege/Listesagences';
import Viewdemandee from './Components/PersonelSiege/Gestion demande/Viewdemandee';
import ListesProjets from './Components/PersonelSiege/Gestion Projet/ListesProjets';
import Viewcandidat from './Components/PersonelSiege/Gestion Projet/Viewcandidat';
import Listepapprouves from './Components/PersonelSiege/Gestion Projet/Listepapprouves';
import Listeprejeter from './Components/PersonelSiege/Gestion Projet/Listeprejeter';
/****************************directeur */
import Listedesclients from './Components/DirecteurSiege/Listedesclients';
import ViewClients from './Components/DirecteurSiege/ViewClients';
import Listedesdemanderejeter from './Components/DirecteurSiege/Listedesdemanderejeter';
import Listedesdemandesapprouver from './Components/DirecteurSiege/Listedesdemandesapprouver';
import ListedemandeArchiver from './Components/DirecteurSiege/Listedemandearchiver';
import Listedemandeattente from './Components/DirecteurSiege/Listedesdemandeattante';
import View_demande from './Components/DirecteurSiege/View_demande';
import Listepretencour from './Components/DirecteurSiege/Listepretencour';
import Listepretdecaisser from './Components/DirecteurSiege/Listepretdecaisser';
import Listepretremboursé from './Components/DirecteurSiege/Listepretremboursé';
import Homed from './Components/DirecteurSiege/homed';
import Alimentercaise from './Components/DirecteurSiege/Alimentercaise';
import View_projet from './Components/DirecteurSiege/View_projet';
import Listeprojetencours from './Components/DirecteurSiege/Listeprojetencours';
import Listeprojetde from './Components/DirecteurSiege/Listeprojetde';
import Listecandidatsapp from './Components/DirecteurSiege/Listecandidatsapp';
import Listecandidatrejeter from './Components/DirecteurSiege/Listecandidatrejeter';
import Listecandidatattente from './Components/DirecteurSiege/Listecandidatattente';
import Eventc from './Components/DirecteurSiege/Eventc';
import ListeSubDECaiise from './Components/DirecteurSiege/ListeSubDECaiise';
import ListeSubApprouverrD from './Components/DirecteurSiege/ListeSUBAPPROUVER';
import ListeSubArchiveD from './Components/DirecteurSiege/listeSUBARCHIVE';
import ListeSubEnattenteD from './Components/DirecteurSiege/listeSUBAttente';
import ListeSubRejeterDD from './Components/DirecteurSiege/ListeSUBrejeter';
import ListeSubENCOURS from './Components/DirecteurSiege/ListeSubENCOURS';
import ListeSubArchiveDDD from './Components/DirecteurSiege/ListeARCHIVeeSUB';
import ViewSUBDD from './Components/DirecteurSiege/viewSuvD';
import ListeProjetsRemboursées from './Components/DirecteurSiege/listeProjetsRemboursées';
import EditProfileP from './Components/PersonelSiege/Edit';
import View_pretD from './Components/DirecteurSiege/viewPrets';
import ViewCndidatureD from './Components/DirecteurSiege/viewCndidatureD';
import NonAutorise from './Components/DirecteurSiege/nonAutorise';
import ViewCondidature from './Components/PersonelSiege/Gestion Projet/viewCondidature';
import Liste_projetapprouvé from './Components/PersonnelAgence/gestionprojet.js/Liste_projetapprouvé';
import Liste_candidatattente from './Components/PersonnelAgence/gestionprojet.js/Liste_candidatattente';
import Liste_candidatrejeter from './Components/PersonnelAgence/gestionprojet.js/Liste_candidatrejeter';
import View_candidat from './Components/PersonnelAgence/gestionprojet.js/View_candidat';
import Evente_caisseagence from './Components/PersonnelAgence/Evente_caisseagence';
import EventClient from './Components/PersonnelAgence/gestionclient/Eventclient';

const hasRole = (userRole, requiredRole) => {

  // Perform your role-based authorization logic here

  // For example, check if the user has the required role

  return userRole === requiredRole; // Replace with your own role-based authorization logic

};

const PrivateAdminRoute = ({ component: Component }) => {

  const userRole = localStorage.getItem('role');

  const token = localStorage.getItem('token');

  if (!token) {

    // User is not authenticated, redirect to login page or show a message

    return <Navigate to="/" replace />;

  }



  if (!hasRole(userRole, 'Admin')) {

    // User is not authorized for admin access, show an error message or redirect to a different page

    return <Navigate to="/unauthorized" replace />;

  }

  return <Component />;

}

const PrivatePersonnelRoute = ({ component: Component }) => {

  const userRole = localStorage.getItem('role');

  const token = localStorage.getItem('token');



  if (!token) {

    // User is not authenticated, redirect to login page or show a message

    return <Navigate to="/" replace />;

  }



  if (!hasRole(userRole, 'PersonnelS')) {

    // User is not authorized for personnel access, show an error message or redirect to a different page

    return <Navigate to="/unauthorized" replace />;

  }



  // User is authenticated and authorized as personnel, render the component

  return <Component />;

};
const PrivatePersonnelARoute = ({ component: Component }) => {

  const userRole = localStorage.getItem('role');

  const token = localStorage.getItem('token');



  if (!token) {

    // User is not authenticated, redirect to login page or show a message

    return <Navigate to="/" replace />;

  }



  if (!hasRole(userRole, 'PersonnelA')) {

    // User is not authorized for personnel access, show an error message or redirect to a different page

    return <Navigate to="/unauthorized" replace />;

  }



  // User is authenticated and authorized as personnel, render the component

  return <Component />;

};
const PrivateDirecteurRoute = ({ component: Component }) => {

  const userRole = localStorage.getItem('role');

  const token = localStorage.getItem('token');

  if (!token) {

    // User is not authenticated, redirect to login page or show a message

    return <Navigate to="/" replace />;

  }



  if (!hasRole(userRole, 'DirecteurS')) {

    // User is not authorized for personnel access, show an error message or redirect to a different page

    return <Navigate to="/unauthorized" replace />;

  }



  // User is authenticated and authorized as personnel, render the component

  return <Component />;

};

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/listee" element={<T />} />
          <Route path="/editUser" element={<EditProfileP />} />

          /**********Admin */
          <Route path="/Ajouter_personnel" element={<PrivateAdminRoute component={Ajouter_personnel} />} />
          <Route path="/liste_personnel" element={<PrivateAdminRoute component={Liste_personnels} />} />
          <Route path="/view_personnel/:id" element={<PrivateAdminRoute component={View_personnel} />} />
/*****************agence client */
          <Route path="/index" element={<PrivatePersonnelARoute component={Index} />} />
          <Route path="/liste_client" element={<PrivatePersonnelARoute component={Liste_client} />} />
          <Route path="/view_client/:id" element={<PrivatePersonnelARoute component={View_client} />} />
          <Route path="/upload" element={<PrivatePersonnelARoute component={Imprime_client} />} />
          <Route path="/modifier_client/:id" element={<PrivatePersonnelARoute component={Editer_client} />} />
          <Route path="/ajouter_client" element={<PrivatePersonnelARoute component={Ajouter_client} />} />
         
          <Route path="/transClienta/:id" element={<PrivatePersonnelARoute component={EventClient} />} />
          /*************agence demande pret */
          <Route path="/liste_demandepret" element={<PrivatePersonnelARoute component={Liste_demandepret} />} />
          <Route path="/liste_demandepretap" element={<PrivatePersonnelARoute component={Liste_demandepretA} />} />
          <Route path="/liste_demandepretrejeter" element={<PrivatePersonnelARoute component={Liste_demandepretrejeter} />} />
          <Route path="/view_demandepret/:id" element={<PrivatePersonnelARoute component={View_demandepret} />} />
          <Route path="/modifier_demande/:id" element={<PrivatePersonnelARoute component={Edit_demandepret} />} />
          <Route path="/ajouter_demande/:id" element={<PrivatePersonnelARoute component={Ajouter_demande} />} />

          <Route path="/ajouter_garant/:id" element={<PrivatePersonnelARoute component={Ajouter_garant} />} />
          <Route path="/liste_garant" element={<PrivatePersonnelARoute component={Liste_garant} />} />
          <Route path="/edit_garant/:id" element={<PrivatePersonnelARoute component={Edit_garant} />} />
          <Route path="/view_garant/:id" element={<PrivatePersonnelARoute component={View_garant} />} />
/********pret agence */
          <Route path="/Liste_pretencours" element={<PrivatePersonnelARoute component={Liste_pretencours} />} />
          <Route path="/Liste_pretd" element={<PrivatePersonnelARoute component={Liste_pretDe} />} />
          <Route path="/view_pret/:id" element={<PrivatePersonnelARoute component={View_pret} />} />
          <Route path="/liste_pretrem" element={<PrivatePersonnelARoute component={Liste_pretremboursé} />} />

/*******************agence projet */
          <Route path="/ajouter_projet" element={<PrivatePersonnelARoute component={Ajouter_projet} />} />
          <Route path="/liste_projet" element={<PrivatePersonnelARoute component={Liste_projet} />} />
          <Route path="/view_projett/:id" element={<PrivatePersonnelARoute component={View_projett} />} />
          <Route path="/edit_projet/:id" element={<PrivatePersonnelARoute component={Edit_projet} />} />
          <Route path="/liste_projetapp" element={<PrivatePersonnelARoute component={Liste_projetapprouvés} />} />
          <Route path="/liste_projetdecaissé" element={<PrivatePersonnelARoute component={Liste_projetdecaissés} />} />
          <Route path="/view_p/:id" element={<PrivatePersonnelARoute component={View_p} />} />
          <Route path="/ajouter_candidat/:id" element={<PrivatePersonnelARoute component={Ajouter_candidat} />} />
          <Route path="/liste_candidatapp" element={<PrivatePersonnelARoute component={Liste_projetapprouvé} />} />
          <Route path="/liste_candidatattente" element={<PrivatePersonnelARoute component={Liste_candidatattente} />} />
          <Route path="/liste_candidatrejeté" element={<PrivatePersonnelARoute component={Liste_candidatrejeter} />} />
          <Route path="/view_candidatagence/:id" element={<PrivatePersonnelARoute component={View_candidat} />} />

          <Route path="/eventagence" element={<PrivatePersonnelARoute component={Evente_caisseagence} />} />

          /******************Personnel Siege */
          /******************Personnel Siege */
          <Route path="/homes" element={<PrivatePersonnelRoute component={Homes} />} />

          {/* <Route path="/p_user" element={<PrivatePersonnelRoute component={Profileuser} />} />
          <Route path="/edit" element={<PrivatePersonnelRoute component={EditUser}/> */}
          <Route path="/listec" element={<PrivatePersonnelRoute component={Listeclientsiege} />} />
          <Route path="/listed" element={<PrivatePersonnelRoute component={Listedemandesr} />} />
          <Route path="/listeda" element={<PrivatePersonnelRoute component={ListedApprouverr} />} />
          <Route path="/listepret" element={<PrivatePersonnelRoute component={Listepretsiege} />} />
          <Route path="/liste_attente" element={<PrivatePersonnelRoute component={Listattente} />} />
          <Route path="/liste_agence" element={<PrivatePersonnelRoute component={Listesagences} />} />
          <Route path="/liste_garant" element={<PrivatePersonnelRoute component={Listegarants} />} />
          <Route path="/view_candidat/:id" element={<PrivatePersonnelRoute component={Viewcandidat} />} />
          <Route path="/listepapprouver" element={<PrivatePersonnelRoute component={Listepapprouves} />} />
          <Route path="/liste_attenteprojet" element={<PrivatePersonnelRoute component={ListesProjets} />} />
          <Route path="/listeprejeter" element={<PrivatePersonnelRoute component={Listeprejeter} />} />
          <Route path="/listeparchiver" element={<PrivatePersonnelRoute component={Listeparchiver} />} />
          <Route path="/transClient/:id" element={<PrivatePersonnelRoute component={EventClientS} />} />
          <Route path="/candidature/:id" element={<PrivatePersonnelRoute component={ViewCondidature} />} />

          <Route path="/viewd/:id" element={<PrivatePersonnelRoute component={Viewdemandessiege} />} />
          <Route path="/viewdemande/:id" element={<PrivatePersonnelRoute component={Viewdemandee} />} />
          <Route path="/unauthorized" element={<NonAutorise />} />
          /****************sub */
          <Route path="/liste_sub_Comite" element={<PrivatePersonnelRoute component={ListeSubComite} />} />
          <Route path="/viewComite/:id" element={<PrivatePersonnelRoute component={ViewdemandesS} />} />
          <Route path="/viewSubS/:id" element={<PrivatePersonnelRoute component={View_d_subS} />} />
          <Route
            path="/soo"

            element={<PrivatePersonnelRoute component={ListedSubApprouverssss} />}
          />
          <Route
            path="/ds"

            element={<PrivatePersonnelRoute component={ListedecaisserSubSEIGE} />}
          />

          <Route
            path="/Saa"

            element={<PrivatePersonnelRoute component={ListeSubArchivéesS} />}
          />
          <Route
            path="/Sii"

            element={<PrivatePersonnelRoute component={SUBENcourss} />}
          />

          <Route
            path="/se"

            element={<PrivatePersonnelRoute component={REJ} />}
          />

          <Route
            path="/app"

            element={<PrivatePersonnelRoute component={ListeSubApprouverrAS} />}
          />
          <Route
            path="/profile/:id"

            element={<PrivatePersonnelRoute component={ProfileClient} />}
          />









          /****************dir */





          <Route path="/homed" element={<PrivateDirecteurRoute component={Homed} />} />
          <Route path="/liste_clientD" element={<PrivateDirecteurRoute component={Listedesclients} />} />
          <Route path="/view_clientD/:id" element={<PrivateDirecteurRoute component={ViewClients} />} />
          <Route path="/liste_dr" element={<PrivateDirecteurRoute component={Listedesdemanderejeter} />} />
          <Route path="/liste_dapprouver" element={<PrivateDirecteurRoute component={Listedesdemandesapprouver} />} />
          <Route path="/liste_darchiver" element={<PrivateDirecteurRoute component={ListedemandeArchiver} />} />
          <Route path="/liste_dattente" element={<PrivateDirecteurRoute component={Listedemandeattente} />} />
          <Route path="/view_demandeD/:id" element={<PrivateDirecteurRoute component={View_demande} />} />
          <Route path="/listepret_cour" element={<PrivateDirecteurRoute component={Listepretencour} />} />
          <Route path="/listepret_decaisser" element={<PrivateDirecteurRoute component={Listepretdecaisser} />} />
          <Route path="/listepret_rem" element={<PrivateDirecteurRoute component={Listepretremboursé} />} />
          <Route path="/alimenter_c" element={<PrivateDirecteurRoute component={Alimentercaise} />} />
          <Route path="/viewprojet/:id" element={<PrivateDirecteurRoute component={View_projet} />} />
          <Route path="/l_p" element={<PrivateDirecteurRoute component={Listeprojetencours} />} />
          <Route path="/p_encours" element={<PrivateDirecteurRoute component={Listeprojetde} />} />
          <Route path="/l_ca" element={<PrivateDirecteurRoute component={Listecandidatsapp} />} />
          <Route path="/l_carejeter" element={<PrivateDirecteurRoute component={Listecandidatrejeter} />} />
          <Route path="/l_cattente" element={<PrivateDirecteurRoute component={Listecandidatattente} />} />
          <Route path="/ec" element={<PrivateDirecteurRoute component={Eventc} />} />
          <Route path="/subARCH" element={<PrivateDirecteurRoute component={ListeSubArchiveD} />} />
          <Route path="/subAPP" element={<PrivateDirecteurRoute component={ListeSubApprouverrD} />} />
          <Route path="/subATT" element={<PrivateDirecteurRoute component={ListeSubEnattenteD} />} />
          <Route path="/subREJ" element={<PrivateDirecteurRoute component={ListeSubRejeterDD} />} />
          <Route path="/subENC" element={<PrivateDirecteurRoute component={ListeSubENCOURS} />} />
          <Route path="/subDEC" element={<PrivateDirecteurRoute component={ListeSubDECaiise} />} />
          <Route path="/subS_view/:id" element={<PrivateDirecteurRoute component={ViewSUBDD} />} />
          <Route path="/liste_r" element={<PrivateDirecteurRoute component={ListeProjetsRemboursées} />} />
          <Route path="/ViewP/:id" element={<PrivateDirecteurRoute component={View_pretD} />} />
          <Route path="/ViewCond/:id" element={<PrivateDirecteurRoute component={ViewCndidatureD} />} />

        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
