import React from 'react';
import { Bar } from 'react-chartjs-2';

import axios from 'axios';



import moment from 'moment';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Chart = () => {
    const [clientData, setClientData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [Demandes, setdemandes] = useState([]);

    const [projet, setprojet] = useState([]);

    const [sub, setsub] = useState([]);
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



    const navigate = useNavigate()
    const logout = () => {


        console.log("hhhhhhh")
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/', { replace: true });
    }







    useEffect(() => {

        fetchData();

    }, []);



    // ChartDataUtils.js



    const chartbar = () => {
        const agencyCounts = {};

        clientData.forEach((client) => {

            const agencyId = client.agc.nom_agence// Remplacez par la propriété correspondante de votre objet client

            if (agencyCounts[agencyId]) {

                agencyCounts[agencyId] += 1;

            } else {

                agencyCounts[agencyId] = 1;

            }

        });



        const chartData = {

            labels: Object.keys(agencyCounts),

            datasets: [

                {

                    label: 'Nombre de clients par agence',

                    data: Object.values(agencyCounts),

                    backgroundColor: [

                        'rgba(75, 192, 192, 0.2)',

                        'rgba(255, 99, 132, 0.2)',

                        // Ajoutez les 22 autres couleurs ici

                        // Par exemple :

                        'rgba(255, 205, 86, 0.2)',

                        'rgba(54, 162, 235, 0.2)',

                        // ...

                    ],

                    borderColor: 'rgba(0, 0, 0, 1)',

                    borderWidth: 1,

                },

            ],

        };



        return chartData;

    };

    const processDataAndCreateChart = () => {

        const att = Demandes.filter((item) => item.status === "En_attente").length;

        const app = Demandes.filter((item) => item.status === "Approuver").length;

        const rej = Demandes.filter((item) => item.status === "Rejeter").length;



        const chartData = {

            title: 'Répartition des demandes de prets',

            labels: ['Approuvé', 'Rejeter', 'en attente'],

            datasets: [

                {

                    data: [rej, app, att],

                    backgroundColor: [

                        'rgba(75, 192, 192, 0.2)',

                        'rgba(255, 99, 132, 0.2)',

                        // Ajoutez les 22 autres couleurs ici

                        // Par exemple :

                        'rgba(255, 205, 86, 0.2)',



                        // ...

                    ],

                    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],

                    borderWidth: 1,

                },

            ],



        };



        return chartData;

    };

    const processDataAndCreateChartSub = () => {

        const att = sub.filter((item) => item.status === "En_attente").length;

        const app = sub.filter((item) => item.status === "Approuver").length;

        const rej = sub.filter((item) => item.status === "Rejeter").length;



        const chartData = {

            title: 'Répartition des demandes de subvention',



            labels: ['Approuvé', 'Rejeter', 'en attente'],

            datasets: [

                {

                    data: [rej, app, att],

                    backgroundColor: [

                        'rgba(75, 192, 192, 0.2)',

                        'rgba(255, 99, 132, 0.2)',

                        // Ajoutez les 22 autres couleurs ici

                        // Par exemple :

                        'rgba(255, 205, 86, 0.2)',



                        // ...

                    ],

                    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],

                    borderWidth: 1,

                },

            ],



        };



        return chartData;

    };

    const processDataAndCreateChartProjet = () => {

        const att = projet.filter((item) => item.status === "En_attente").length;

        const app = projet.filter((item) => item.status === "Approuver").length;

        const rej = projet.filter((item) => item.status === "Rejeter").length;



        const chartData = {

            title: 'Répartition des demandes de candidature projet',



            labels: ['Approuvé', 'Rejeter', 'en attente'],

            datasets: [

                {

                    data: [rej, app, att],

                    backgroundColor: [

                        'rgba(75, 192, 192, 0.2)',

                        'rgba(255, 99, 132, 0.2)',

                        // Ajoutez les 22 autres couleurs ici

                        // Par exemple :

                        'rgba(255, 205, 86, 0.2)',



                        // ...

                    ],

                    borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],

                    borderWidth: 1,

                },

            ],



        };



        return chartData;

    };

    const lineaire = () => {

        const demandCounts = {};

        const demandCounts2 = {}; // Deuxième série de données

        const demandCounts3 = {};

        Demandes.forEach((demande) => {



            const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD'); if (demandCounts[creationDate]) {

                demandCounts[creationDate] += 1;

            } else {

                demandCounts[creationDate] = 1;

            }

        });

        sub.forEach((demande) => {



            const creationDate = moment(demande.dateAttribut).format('YYYY-MM-DD'); if (demandCounts2[creationDate]) {

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



        // Création de l'objet de données pour le graphique linéaire

        const chartData = {

            labels: sortedDates, sortedDates2, // Les dates de création

            datasets: [

                {

                    label: 'Nombre de demandes',

                    data: sortedDates.map((date) => ({ x: date, y: demandCounts[date] })), // Utiliser un tableau d'objets avec les propriétés x et y

                    borderColor: 'rgba(75, 192, 192, 1)',

                    borderWidth: 1,

                    fill: false



                },

                {

                    label: 'Série 2',

                    data: sortedDates2.map((date) => ({ x: date, y: demandCounts2[date] })), // Utiliser un tableau d'objets avec les propriétés x et y

                    borderColor: 'rgba(255, 99, 132, 1)',

                    borderWidth: 1,

                },

            ],

            options: {

                responsive: true,

                scales: {

                    x: {

                        type: 'time',

                        time: {

                            unit: 'day',

                            displayFormats: {

                                day: 'YYYY-MM-DD', // Format d'affichage des dates sur l'axe x

                            },

                        },

                    },

                },

            },

        };

        return chartData;

    }







    return <Bar data={chartbar()} />
        ;
}

export default Chart;