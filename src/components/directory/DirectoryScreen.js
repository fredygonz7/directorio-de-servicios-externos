import React from 'react'
import { useForm } from '../../hooks/useForm';
// import logo from '../../logo.svg';

// import { sendForm } from '../../fetch/FetchGeneral';
// import { useHistory } from 'react-router-dom';
import { servicesDirectory} from '../../services/servicesDirectory';

const DirectoryScreen = () => {
    // const history = useHistory();

    const [formValues, handleInputChange, formReset] = useForm(
        {
            nombreservicio: '',
            // direccionservicio: '',
            // sectorbarrio: '',
            // coordenadalatitud: '',
            // coordenadalongitud: '',
            // telefonofijo: '',
            // telefonomovil: '',
            tiposervicio: '',
            serviciodomicilio: false,
            horarioatencion: '',
            paginaweb: '',
            correoelectronico: '',
        });

    const { nombreservicio,
        // direccionservicio,
        // sectorbarrio,
        // coordenadalatitud,
        // coordenadalongitud,
        // telefonofijo,
        // telefonomovil,
        tiposervicio,
        serviciodomicilio,
        horarioatencion,
        paginaweb,
        correoelectronico
    } = formValues

    const handleDirectoty = (event) => {

        event.preventDefault();
        
        // sendForm({ ...formValues, "tokenId": localStorage.getItem('token') }, formReset)
        // servicesDirectory.register({ ...formValues, "token": localStorage.getItem('token') }).then((
        servicesDirectory.register(formValues).then((
            // { data: { access_token, token_type } }) => {

            // localStorage.setItem("token", access_token)
            // localStorage.setItem("token_type", token_type)
            { data }) => {
            console.log(data);
            formReset();
            // localStorage.setItem("token", id)

            // history.push('../../')
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
                        <input type="text" placeholder="nombreservicio" className="form-control"
                            name="nombreservicio" value={nombreservicio} onChange={handleInputChange} />
                    </div>
                    {/* <div>
                        <input type="text" placeholder="direccionservicio"
                            name="direccionservicio" value={direccionservicio} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="sectorbarrio"
                            name="sectorbarrio" value={sectorbarrio} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="coordenadalatitud"
                            name="coordenadalatitud" value={coordenadalatitud} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="coordenadalongitud"
                            name="coordenadalongitud" value={coordenadalongitud} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="telefonofijo"
                            name="telefonofijo" value={telefonofijo} onChange={handleInputChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="telefonomovil"
                            name="telefonomovil" value={telefonomovil} onChange={handleInputChange} />
                    </div> */}
                    <div className="mb-3">
                        <select className="form-select" name="tiposervicio" value={tiposervicio} onChange={handleInputChange}>
                            <option>Seleccione una opción</option>
                            <option value="One">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        {/* <input type="text" placeholder="tiposervicio" className="form-control"
                            name="tiposervicio" value={tiposervicio} onChange={handleInputChange} /> */}
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox"
                            name="serviciodomicilio" checked={serviciodomicilio} onChange={handleInputChange} />
                        <label className="form-check-label" htmlFor="flexCheckserviciodomicilio">
                            serviciodomicilio
                        </label>
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="horarioatencion" className="form-control"
                            name="horarioatencion" value={horarioatencion} onChange={handleInputChange} />
                    </div>

                    <div className="mb-3">
                        <input type="text" placeholder="paginaweb" className="form-control"
                            name="paginaweb" value={paginaweb} onChange={handleInputChange} />
                    </div>
                    <div className="mb-3">
                        <input type="email" placeholder="correoelectronico" className="form-control"
                            name="correoelectronico" value={correoelectronico} onChange={handleInputChange} />
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