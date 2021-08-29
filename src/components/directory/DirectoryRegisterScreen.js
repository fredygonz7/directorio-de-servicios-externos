import React from 'react'
import { useForm } from '../../hooks/useForm';
// import logo from '../../logo.svg';

// import { sendForm } from '../../fetch/FetchGeneral';
// import { useHistory } from 'react-router-dom';
import { fetchCreateDirectory, fetchUpdateDirectory } from '../../services/servicesDirectory';

const DirectoryScreen = () => {
    const [formValues, handleInputChange, formReset] = useForm(
        {
            NombreServicio: '',
            TipoServicio: '',
            ServicioDomicilio: false,
            HorarioAtencion: '',
            PaginaWeb: '',
            CorreoElectronico: '',
        });

    const { NombreServicio,
        TipoServicio,
        ServicioDomicilio,
        HorarioAtencion,
        PaginaWeb,
        CorreoElectronico
    } = formValues

    const handleDirectoty = (event) => {

        event.preventDefault();
        
        // sendForm({ ...formValues, "tokenId": localStorage.getItem('token') }, formReset)
        // servicesDirectory.register({ ...formValues, "token": localStorage.getItem('token') }).then((
        fetchCreateDirectory(formValues).then((
            { data }) => {
            console.log(data);
            formReset();
        }, ({ response: { status, statusText } }) => {
            if (status === 400) {
                console.log("Error");
            }
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Directorio</h1>
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                <form onSubmit={handleDirectoty}>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div> */}
                    <div className="mb-3">
                        <input type="text" placeholder="NombreServicio" className="form-control"
                            name="NombreServicio" value={NombreServicio} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <select className="form-select" name="TipoServicio" value={TipoServicio} onChange={handleInputChange}>
                            <option>Seleccione una opción</option>
                            <option value="One">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {/* <input type="text" placeholder="TipoServicio" className="form-control"
                            name="TipoServicio" value={TipoServicio} onChange={handleInputChange} /> */}
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox"
                            name="ServicioDomicilio" checked={ServicioDomicilio} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="flexCheckServicioDomicilio">
                            ServicioDomicilio
                        </label>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="HorarioAtencion" className="form-control"
                            name="HorarioAtencion" value={HorarioAtencion} onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="PaginaWeb" className="form-control"
                            name="PaginaWeb" value={PaginaWeb} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder="CorreoElectronico" className="form-control"
                            name="CorreoElectronico" value={CorreoElectronico} onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
            </header>
        </div>
    )
};
export default DirectoryScreen;