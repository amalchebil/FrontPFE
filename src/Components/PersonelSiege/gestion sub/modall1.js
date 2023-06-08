import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import SubSerivce from '../../services/SubService';
const Modal5 = ({ open, onClose, id_client, selectedIdDeemande }) => {
    const { id } = useParams();
    const [montant_p, setMontant] = useState("")
    //const [client, setc] = useState("")
    //const [tranche, setTranche] = useState("")
    // const [date_remb, setdater] = useState("")
    // const [type_plan, setTypeplan] = useState("")
    //const [typepret, setTypepret] = useState("")
    const formdata = new FormData();
const ur = new SubSerivce();
    const onSubmit = () => {
        formdata.append("client.id_client", id_client)
        formdata.append("demandeSubvention.id_demande", selectedIdDeemande)
     
        
        formdata.append("montant_sub", montant_p)
        
        console.log("mmmmmmmmmmmm", montant_p)
        ur.create(formdata).then(() => {
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
                            <p className='cp'>Création du subvention</p><br></br><br></br>

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
                                <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="name">Montant net<span className="required">*</span>
                                </label>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <input className="form-control col-md-7 col-xs-12" name="name"  onChange={e => setMontant(e.target.value)} placeholder="both name(s) e.g Jon Doe" type="number"

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

export default Modal5;