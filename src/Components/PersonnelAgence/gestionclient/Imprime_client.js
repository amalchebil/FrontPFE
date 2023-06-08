import React from 'react';
import './upload.css'    // Fichier CSS pour styliser la composante
import ReactToPrint from 'react-to-print';

const Imprime_client = () => {
    console.log("heeeere");
    const searchParams = new URLSearchParams(window.location.search);
    const nom = searchParams.get('nom');
    const prenom = searchParams.get('prenom');
    //const email = searchParams.get('email');
    const cin = searchParams.get('cin');
    const numc = searchParams.get('numc');
    const date = searchParams.get('date');
    const numt = searchParams.get('numt');
    const adresse = searchParams.get('adresse');
    const email = searchParams.get('email');
    const genre = searchParams.get('genre');
    const montant_emprunte = searchParams.get('montantpret');
    const montant_projet = searchParams.get('montantprojet');
    const montant_sub = searchParams.get('montantsub');
    const id = searchParams.get('id');

    const componentRef = React.useRef();

    return (
        <div>


            <div className="container" ref={componentRef}>
                <div className="client-info-container">
                    <h1 style={{ textAlign: 'center', color: 'violet' }}>Informations du client</h1>
                    <div className="client-info" style={{ textAlign: 'center' }}>
                        <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Informations essentielles</h2>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>ID :</strong> {id}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Numéro de cin :</strong> {cin}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Nom et prénom:</strong> {nom} {prenom}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>email :</strong>{email}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>numero de télephone:</strong>{numt}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Date de naissance :</strong>{date}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Adresse :</strong>{adresse}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Genre :</strong>{genre}</p>

                        <h2 style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Informations complémentaires</h2>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Montant de prêt :</strong>{montant_emprunte}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Montant de projet :</strong>{montant_projet}</p>
                        <p><strong style={{ fontWeight: 'bold', color: 'black' }}>Montant du subventions :</strong>{montant_sub}</p>
                    </div>
                </div>
            </div>

            <div >
                <ReactToPrint
                    trigger={() => <button className="btn btn-success btn-sm" style={{ marginLeft: 50 }}>imprimer</button>}
                    content={() => componentRef.current}
                    documentTitle="informations"
                />

            </div>

        </div>
    );
}



export default Imprime_client;
