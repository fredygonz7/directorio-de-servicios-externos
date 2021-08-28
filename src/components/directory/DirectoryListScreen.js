// import { useState } from "react";
import { Loading } from "../../components/Loading";
import { useResources } from "../../hooks/useResources";

export const DirectoryListScreen = () => {
    const { isLoading, resources } = useResources();
    console.log(resources);

    return (
        <div className="container">
            <h1>Lista de lugares</h1>
            <hr />
            
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:100}}>ID</th>
                        <th style={{ width: 150}}>Nombre</th>
                        <th style={{ width: 150}}>PaginaWeb</th>
                        <th style={{ width: 150}}>CorreoElectronico</th>
                        <th style={{ width: 150}}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map(({id,nombreServicio,PaginaWeb,CorreoElectronico}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{nombreServicio}</td>
                                <td>{PaginaWeb}</td>
                                <td>{CorreoElectronico}</td>
                                <td><button type="submit" className="btn btn-primary">Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {isLoading && <Loading />}
        </div>
    )
}