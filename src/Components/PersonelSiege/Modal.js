import React from 'react';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import pretService from '../services/pretService';
import HeaderSiege from './HeaderSiege';


const Modal = ({ open, onClose, id_client, selectedIdDeemande, selectedpret, selectedtranche }) => {
    const { id } = useParams();
    const [montant_p, setMontant] = useState("")
    //const [client, setc] = useState("")
    //const [tranche, setTranche] = useState("")
    const [date_remb, setdater] = useState("")
    const [type_plan, setTypeplan] = useState("")
    //const [typepret, setTypepret] = useState("")
    const formdata = new FormData();
    const uc = new pretService();
    const onSubmit = () => {
        formdata.append("client.id_client", id_client)
        formdata.append("demandePret.id_demande", selectedIdDeemande)
        formdata.append("typepret", selectedpret)
        // console.log("idddddddddddd", id);
        formdata.append("montant_p", montant_p)
        //formdata.append("demandePret.tranche", tranche)
        formdata.append("date_remb", date_remb)
        formdata.append("type_plan", type_plan)

        formdata.append("tranche", selectedtranche)
        console.log("mmmmmmmmmmmm", montant_p)

        uc.create(formdata).then(() => {
        })
        Swal.fire(
            'Good job!',
            ' pret est ajouté',
            'success'
        )

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
                                    <input className="form-control col-md-7 col-xs-12" name="name" value={id_client} type="text"

                                    />

                                </div>
                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">ID Demande <span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" value={selectedIdDeemande} type="text"

                                    />

                                </div>
                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Type pret <span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" value={selectedpret} placeholder="commerce" type="text" required
                                    />

                                </div>

                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Montant net<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" pattern="^(?:[5-9][0-9]{2}|[1-9][0-9]{3}|10000)$" onChange={e => setMontant(e.target.value)} placeholder="both name(s) e.g Jon Doe" type="number"

                                    />

                                </div>

                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Date decaissement<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" placeholder="11/02/2011" type="date"

                                    />

                                </div>

                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-5 col-xs-16" htmlFor="name">Date Remboursement<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" onChange={e => setdater(e.target.value)} placeholder="11/03/2011" type="date"

                                    />

                                </div>

                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Tranche<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name" value={selectedtranche} type="text"

                                    />

                                </div>

                            </div>
                            <div className="item form-group">
                                <label className="control-label col-md-3 col-sm-5 col-xs-12" htmlFor="name">Type calendrier<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" onChange={e => setTypeplan(e.target.value)} name="name" placeholder="" type="text"

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

export default Modal;