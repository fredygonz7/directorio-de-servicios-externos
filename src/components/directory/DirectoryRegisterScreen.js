import React from 'react'
import { useForm } from '../../hooks/useForm';
// import logo from '../../logo.svg';

// import { sendForm } from '../../fetch/FetchGeneral';
// import { useHistory } from 'react-router-dom';
import { fetchCreateDirectory } from '../../services/servicesDirectory';

const DirectoryRegisterScreen = () => {
    const [formValues, handleInputChange, formReset] = useForm({
        //     NombreServicio: '',
        //     TipoServicio: '',
        //     ServicioDomicilio: false,
        //     HorarioAtencion: '',
        //     PaginaWeb: '',
        //     CorreoElectronico: '',
        //     CorreoElectronico_confirmation: ''
        // });
        NombreServicio: 'Abastos El Ajonjoli',
        TipoServicio: 'tienda',
        ServicioDomicilio: false,
        HorarioAtencion: '7am - 7pm ',
        PaginaWeb: 'http://www.ajonjoli.com',
        CorreoElectronico: 'ajonjoli.sincelejo@gmail.com',
        CorreoElectronico_confirmation: 'ajonjoli.sincelejo@gmail.com'
    });

    const { NombreServicio,
        TipoServicio,
        ServicioDomicilio,
        HorarioAtencion,
        PaginaWeb,
        CorreoElectronico,
        CorreoElectronico_confirmation
    } = formValues

    const registerDirectoty = (event) => {
        event.preventDefault();
        console.log(formValues);
        fetchCreateDirectory(formValues)
            .then(data => {
            console.log(data.message, data)
            formReset();
        }).catch(err => {
            console.log("Error", err);
        });

        //     .then((
        //     { data }) => {
        //     console.log(data.message);
        //     formReset();
        // }, ({ response: { status, statusText } }) => {
        //     if (status === 400) {
        //         console.log("Error");
        //     }
        // })
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Directorio</h1>
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p> */}
                <form onSubmit={registerDirectoty}>
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
                            <option>Seleccione un tipo de servicio</option>
                            <option value="drogueria">Drogueria</option>
                            <option value="tienda">Tienda</option>
                            <option value="otro">Otro</option>
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
                        <input type="email" placeholder="CorreoElectronico_confirmation" className="form-control"
                            name="CorreoElectronico_confirmation" value={CorreoElectronico_confirmation} onChange={handleInputChange} />
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
export default DirectoryRegisterScreen;