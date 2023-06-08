import React from 'react';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import pretService from './services/pretService';
import axios from 'axios';

import HeaderSiege from './HeaderSiege';

const Modalpret = ({ open, onClose, id_pret, selectedIdDeemande, selectedId, selectedtranche }) => {
    const { id } = useParams();
    const [montant_p, setMontant] = useState("")
    const [pretId, setPret] = useState("")
    //const [client, setc] = useState("")
    //const [tranche, setTranche] = useState("")

    //const [typepret, setTypepret] = useState("")
    const formdata = new FormData();
    const uc = new pretService();

    console.log("mmmm", montant_p);
    console.log("eeeeeeeee", selectedId);
    const onSubmit = () => {
        const x = localStorage.getItem('token')
        // formdata.append("id_pret", selectedId)

        // formdata.append("montant", montant_p)


        axios.post(`http://localhost:8080/transfert/RembourserPret/${selectedId}?montant=${montant_p}`,
            {
                "montant": montant_p

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
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">ID client <span className="required">*</span>
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

export default Modalpret;