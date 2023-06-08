import React from 'react';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import ProjetService from '../../services/projetService';


const ModalProjet = ({ open, onClose, clientId, selectedId, selectedtranche }) => {
    const { id } = useParams();
    const [montant_projet, setMontant] = useState("")
    const [pretId, setPret] = useState("")
    //const [client, setc] = useState("")
    //const [tranche, setTranche] = useState("")

    //const [typepret, setTypepret] = useState("")
    const formdata = new FormData();
    const uc = new ProjetService();

    console.log("mmmm", montant_projet);
    console.log("eeeeeeeee", selectedId);
    console.log("d", clientId);

    const onSubmit = () => {
        const x = localStorage.getItem('token')
        // formdata.append("id_pret", selectedId)

        // formdata.append("montant", montant_p)


        axios.post(`http://localhost:8080/transfert/RembourserProjet/${selectedId}?montant=${montant_projet}`,
            {
                "montant": montant_projet

            },
            { headers: { "Authorization": `Bearer ${x}` } }

        ).then(() => {
        })
        Swal.fire(
            'Good job!',
            ' pret est ajouté',
            'success'
        ).catch((err) => {

            console.log(err);

        })


    }

    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContainer'
            >
                <div className='modalRight'>
                    <p className='closeBtn' onClick={onClose}>
                        X
                    </p>
                    <div className='content'>
                        <form className="form-horizontal form-label-left" onSubmit={(e) => onSubmit(e)}>
                            <p className='cp'>Création de pret </p><br></br><br></br>

                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">ID projet <span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" value={selectedId} type="text"

                                    />

                                </div>
                            </div>


                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Montant net<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" onChange={e => setMontant(e.target.value)} placeholder="montant" type="number"

                                    />

                                </div>

                            </div>


                            <div className='btnContainer'>
                                <button id="send" type="submit" className="btnOutline" >Submit</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default ModalProjet;