import React from 'react';
import { useHistory } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import logo from '../../logo.svg';
import { fetchAuthLogin } from '../../services/servicesAuth';

const LoginScreen = () => {

    const history = useHistory();

    const [formValues, handleInputChange] = useForm({ email: 'joelpahe18@gmail.com', password: 'password' });

    const { email, password } = formValues

    const handleDirectoty = (event) => {
        event.preventDefault();
        // sendForm(formValues, formReset)
        fetchAuthLogin(formValues).then(data => {
            localStorage.setItem("token", data.access_token)
            console.log(data.data);
            history.push('/directorio')
        }).catch(err => {
            console.log(err);
        });

        /*.then((
        { data: { access_token } }) => {
        localStorage.setItem("token", access_token)
        console.log(access_token);
        history.push('/directorio')
        }, ({ response: { status, statusText } }) => {
            // if (status === 400) {
            //     console.log("Error");
            // }
            console.log("no conecta");
        })*/

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