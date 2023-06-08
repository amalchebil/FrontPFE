import React, { useState, useEffect } from 'react';

import axios from 'axios';

import moment from 'moment';
import { Chart } from "react-google-charts";
import { LineChart } from 'react-google-charts';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import HeaderSiege from '../PersonelSiege/HeaderSiege';
const Index = () => {
  const [idg, setidg] = useState(localStorage.getItem('id_agence'))

  const processDataAndCreateChart = () => {

    const id = localStorage.getItem('id_agence');

    console.log("id", idg)

    const clientsMemeAgence = clientData.filter(client => client.agc.id == idg);

    console.log("hhhhaaj", clientsMemeAgence)

    const maleCount = clientsMemeAgence.filter((item) => item.sexe_c === 'Masculin').length;



    const femaleCount = clientsMemeAgence.filter((item) => item.sexe_c === 'Feminin').length;

    const chartData = [

      ['Genre', 'Nombre'],

      ['Hommes', maleCount],

      ['Femmes', femaleCount],

    ];



    return chartData;



  };

  const chartbar = () => {

    const agencyCounts = {};



    clientData.forEach((client) => {

      const agencyId = client.agc?.nom_agence;

      if (agencyCounts[agencyId]) {

        agencyCounts[agencyId] += 1;

      } else {

        agencyCounts[agencyId] = 1;

      }

    });



    const chartData = [["Agence", "Nombre de clients"]];

    Object.keys(agencyCounts).forEach((agency) => {

      chartData.push([agency, agencyCounts[agency]]);

    });



    return chartData;

  };

  const [clientData, setClientData] = useState([]);

  const [Demandes, setdemandes] = useState([]);

  const [projet, setprojet] = useState([]);

  const [sub, setsub] = useState([]);

  const [loading, setLoading] = useState(true);





  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    const token = localStorage.getItem('token')

    try {

      const response = await axios.get('http://localhost:8080/Client/GETALLClient', {

        headers: { "Authorization": `Bearer ${token}` }

      });

      setClientData(response.data);

      setLoading(false);

      const res = await axios.get('http://localhost:8080/DEMANDEPRET/GETALLDEMANDE', {

        headers: { "Authorization": `Bearer ${token}` }

      });

      setdemandes(res.data)



      setLoading(false);







      const resp = await axios.get('http://localhost:8080/DEMANDEPROJET/GETALLDEMANDE', {

        headers: { "Authorization": `Bearer ${token}` }

      });

      setprojet(resp.data)





      const respo = await axios.get('http://localhost:8080/DEMANDESUBVENTION/GETALLDEMANDE', {

        headers: { "Authorization": `Bearer ${token}` }

      });

      setsub(respo.data)

    } catch (error) {

      console.error('Error fetching client data:', error);

    }

  };



  const LineChart = () => {

    const Demandes = []; // Remplacez par votre tableau de données

    const sub = []; // Remplacez par votre tableau de données



    const demandCounts = {};

    Demandes.forEach((demande) => {

      const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD');

      if (demandCounts[creationDate]) {

        demandCounts[creationDate] += 1;

      } else {

        demandCounts[creationDate] = 1;

      }

    });



    const demandCounts2 = {};

    sub.forEach((demande) => {

      const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD');

      if (demandCounts2[creationDate]) {

        demandCounts2[creationDate] += 1;

      } else {

        demandCounts2[creationDate] = 1;

      }

    });



    const sortedDates = Object.keys(demandCounts).sort((a, b) => {

      return new Date(a) - new Date(b);

    });

    const sortedDates2 = Object.keys(demandCounts2).sort((a, b) => {

      return new Date(a) - new Date(b);

    });



    const chartData = sortedDates.map((date) => [

      new Date(date), // Convertir la date en objet de date JavaScript

      demandCounts[date],

    ]);

    const chartData2 = sortedDates2.map((date) => [

      new Date(date), // Convertir la date en objet de date JavaScript

      demandCounts2[date],

    ]);



    const data = [

      ['Date', 'Nombre de demandes'],

      ...chartData,

      ...chartData2,

    ];



    return data;

  }

  const LineChartComponent = () => {

    const Demandes = []; // Remplacez par votre tableau de données

    const sub = []; // Remplacez par votre tableau de données



    const demandCounts = {};

    Demandes.forEach((demande) => {

      const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD');

      if (demandCounts[creationDate]) {

        demandCounts[creationDate] += 1;

      } else {

        demandCounts[creationDate] = 1;

      }

    });



    const demandCounts2 = {};

    sub.forEach((demande) => {

      const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD');

      if (demandCounts2[creationDate]) {

        demandCounts2[creationDate] += 1;

      } else {

        demandCounts2[creationDate] = 1;

      }

    });



    const sortedDates = Object.keys(demandCounts).sort((a, b) => {

      return new Date(a) - new Date(b);

    });

    const sortedDates2 = Object.keys(demandCounts2).sort((a, b) => {

      return new Date(a) - new Date(b);

    });



    const lineChartData = [

      ['Date', 'Nombre de demandes'],

      ...sortedDates.map((date) => [new Date(date), demandCounts[date]]),

    ];



    const barChartData = [

      ['Date', 'Nombre de demandes'],

      ...sortedDates2.map((date) => [new Date(date), demandCounts2[date]]),

    ];



    return (

      <>

        <Chart

          width={'100%'}

          height={'400px'}

          chartType="LineChart"

          data={lineChartData}

          options={{

            title: 'Nombre de demandes par date (Ligne)',

            hAxis: {

              title: 'Date',

            },

            vAxis: {

              title: 'Nombre de demandes',

            },

          }}

        />

        <Chart

          width={'100%'}

          height={'400px'}

          chartType="ColumnChart"

          data={barChartData}

          options={{

            title: 'Nombre de demandes par date (Barres)',

            hAxis: {

              title: 'Date',

            },

            vAxis: {

              title: 'Nombre de demandes',

            },

          }}

        />

      </>

    );

  };




  const LineChart1 = () => {

    const Demandes = []; // Remplacez par votre tableau de données

    const sub = []; // Remplacez par votre tableau de données



    const demandCounts = {};

    Demandes.forEach((demande) => {

      const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD');

      if (demandCounts[creationDate]) {

        demandCounts[creationDate] += 1;

      } else {

        demandCounts[creationDate] = 1;

      }

    });



    const demandCounts2 = {};

    sub.forEach((demande) => {

      const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD');

      if (demandCounts2[creationDate]) {

        demandCounts2[creationDate] += 1;

      } else {

        demandCounts2[creationDate] = 1;

      }

    });



    const chartData = [

      ['Date', 'Nombre de demandes'],

      ...Object.entries(demandCounts).map(([date, count]) => [new Date(date).getTime(), count]),

      ...Object.entries(demandCounts2).map(([date, count]) => [new Date(date).getTime(), count]),

    ];



    return chartData;

  };





  const processDataAndCreateChartDemandes = () => {



    const demandesMemeAgence = Demandes.filter(item => item.client.agc.id == idg);



    const att = demandesMemeAgence.filter((item) => item.status === 'En_attente').length;

    const app = demandesMemeAgence.filter((item) => item.status === 'Approuver').length;

    const rej = demandesMemeAgence.filter((item) => item.status === 'Rejeter').length;



    const chartData = [

      ['Status', 'Nombre de demandes'],

      ['Approuvé', app],

      ['Rejeter', rej],

      ['En attente', att],

    ];



    return chartData;

  };



  const processDataAndCreateChartSub = () => {

    const demandessubMemeAgence = sub.filter(item => item.client.agc.id == idg);



    const att = demandessubMemeAgence.filter((item) => item.status === 'En_attente').length;

    const app = demandessubMemeAgence.filter((item) => item.status === 'Approuver').length;

    const rej = demandessubMemeAgence.filter((item) => item.status === 'Rejeter').length;



    const chartData = [

      ['Status', 'Nombre de demandes'],

      ['Approuvé', app],

      ['Rejeter', rej],

      ['En attente', att],

    ];



    return chartData;

  };



  const processDataAndCreateChartProjet = () => {

    const demandesprojetMemeAgence = projet.filter(item => item.client.agc.id == idg);



    const att = projet.filter((item) => item.status === 'En_attente').length;

    const app = projet.filter((item) => item.status === 'Approuver').length;

    const rej = projet.filter((item) => item.status === 'Rejeter').length;



    const chartData = [

      ['Status', 'Nombre de demandes'],

      ['Approuvé', app],

      ['Rejeter', rej],

      ['En attente', att],

    ];



    return chartData;

  };
  return <div className="container-scroller">
    {/* partial:../../partials/_navbar.html */}
    <HeaderSiege/>
    {/* partial */}
    <div className="container-fluid page-body-wrapper">
      {/* partial:../../partials/_sidebar.html */}
      <Sidebar />
      {/* partial */}








      <div className="main-panel">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title"> Acceuil</h3>
            <nav aria-label="breadcrumb">
              
            </nav>
          </div>
          <div className="row">

            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">

              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body" style={{ height: 100 }}>
                  <h4 className="card-title">Répartition par genre</h4>
                  <Chart chartType="PieChart"
                    height={'100%'}
                    data={processDataAndCreateChart()}
                    options={{

                      colors: ['#87CEEB', '#FFC0CB', '#0000FF'] // Remplacez ces couleurs par celles de votre choix
                    }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title"> Répartition des demandes de prets</h4>
                  <Chart

                    width={'100%'}

                    height={'400px'}

                    chartType="PieChart"

                    data={processDataAndCreateChartDemandes()}

                    options={{

                      pieHole: 0.4,

                      is3D: false,
                      colors: ['#7CFC00', '#FF6347', '#FFD700']
                      // Remplacez ces couleurs par celles que vous souhaitez utiliser
                    }

                    }

                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Répartition des demandes de subvention</h4>

                  <Chart

                    width={'100%'}

                    height={'400px'}

                    chartType="PieChart"

                    data={processDataAndCreateChartSub()}

                    options={{



                      pieHole: 0.4,

                      is3D: false,

                    }

                    }

                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Répartition des demandes du projets</h4>
                  <Chart

                    width={'100%'}

                    height={'400px'}

                    chartType="PieChart"

                    data={processDataAndCreateChartProjet()}

                    options={{

                      pieHole: 0.4,

                      is3D: false,

                    }

                    }

                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Pie chart</h4>
                  <canvas id="pieChart" style={{ height: 250 }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Scatter chart</h4>
                  <canvas id="scatterChart" style={{ height: 250 }} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* content-wrapper ends */}
        {/* partial:../../partials/_footer.html */}
        
        {/* partial */}
      </div>
      {/* main-panel ends */}
    </div>
  </div>
  {/* page-body-wrapper ends */ }

  {/* container-scroller */ }
  {/* plugins:js */ }
  {/* endinject */ }
  {/* Plugin js for this page */ }
  {/* End plugin js for this page */ }
  {/* inject:js */ }
  {/* endinject */ }
  {/* Custom js for this page */ }
  {/* End custom js for this page */ }

}



export default Index;