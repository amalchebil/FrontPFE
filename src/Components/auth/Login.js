import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css' ;

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setErrorMessage('Veuillez remplir tous les champs');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                email: email,
                password: password,
            });
            console.log(response.data)
            const { token, role, firstName, lastName } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            localStorage.setItem('user_id', response.data.user_id);
            localStorage.setItem('firstname', response.data.firstname);
            localStorage.setItem('lastname', response.data.lastname);
            localStorage.setItem('id_agence', response.data.id_agence);

            console.log("this", response.data.id_agence);
            console.log('role', role);
            switch (role) {
                case 'Admin':
                    navigate('/liste_personnel');
                    break;
                case 'PersonnelA':
                    navigate('/index');
                    break;
                case 'PersonnelS':
                    navigate('/homes');
                    break;
                default:
                    navigate('/homed');
                    break;
            }

        }
        catch (error) {
            setErrorMessage('Email ou mot de passe incorrect');
        }
    };

    return <div>
        <div >
        <h1 style={{ color:'#7FFFD4',padding: '10px', textAlign: 'right' , display: 'flex'}}>Bienvenue</h1>
      </div>
    <div class="auth-wrapper">

        <div className="auth-content">
     
            <div className="auth-bg">
                <span className="r" />
                <span className="r s" />
                <span className="r s" />
                <span className="r" />
            </div>
           
           
            <div className="card" style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <a ><img src="../../assets/images/Utss.jpg" alt="logo" style={{height:100,marginTop:60}} /></a> 
        {/* <a className="navbar-brand brand-logo-mini" href="../../index.html"><img src="../../assets/images/Utss.png" alt="logo" /></a> */}
    </div>
    <h2>Union Tunisienne de Solidarité Sociale</h2>
                <div className="card-body text-center">
                    <form onSubmit={handleSubmit}>
                        

                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" className="form-control" name="current-password" placeholder="Mot de passe"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }} />
                        </div>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}

<button class="btn1">
  <span>Valider</span>
</button>

                    </form></div>
            </div>
        </div>

    </div>
    </div>
    {/* container-scroller */ }
    {/* plugins:js */ }
    {/* endinject */ }
    {/* Plugin js for this page */ }
    {/* End plugin js for this page */ }
    {/* inject:js */ }
    {/* endinject */ }


    ;
}


export default Login;