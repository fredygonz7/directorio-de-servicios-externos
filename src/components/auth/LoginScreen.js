import React from 'react';
import { useHistory } from 'react-router-dom';

// import { sendForm } from '../../fetch/FetchGeneral';
import { useForm } from '../../hooks/useForm';

import logo from '../../logo.svg';
import servicesAuth from '../../services/servicesAuth';

const LoginScreen = () => {

    const history = useHistory();

    const [formValues, handleInputChange] = useForm({ email: '', password: '' });
    
    const { email, password } = formValues

    const handleDirectoty = (event) => {
        event.preventDefault();
        // sendForm(formValues, formReset)
        servicesAuth.login(formValues).then((
            // { data: { access_token, token_type } }) => {
            
            // localStorage.setItem("token", access_token)
            // localStorage.setItem("token_type", token_type)
            { data: { id } }) => {

            localStorage.setItem("token", id)

            history.push('../../')
        }, ({ response: { status, statusText } }) => {
            if (status === 400) {
                console.log("Error");
            }
        }
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <img src={logo} className="App-logo" alt="logo" />
                {/* <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                <form onSubmit={handleDirectoty}>
                    <div className="mb-3">
                        <input type="text" placeholder="Email" autoComplete="off" className="form-control"
                            name="email" value={email} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="Contraseña" className="form-control"
                            name="password" value={password} onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Ingresar
                    </button>
                </form>
            </header>
        </div>
    );
}
export { LoginScreen };