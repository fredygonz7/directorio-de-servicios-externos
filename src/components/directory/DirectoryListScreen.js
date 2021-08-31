import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
// import { useDirectories } from "../../hooks/useDirectories";
import { fetchAllDirectories, fetchDeleteDirectory } from "../../services/servicesDirectory";

export const DirectoryListScreen = () => {
    // const { isLoading, directories } = useDirectories();
    const [isLoading, setIsLoading] = useState(true);
    const [directories, setDirectories] = useState([]);
    
    useEffect(() => {
        fetchAllDirectories()
            .then(directories => {
                setIsLoading(false);
                setDirectories(directories);
            });
    }, []);

    const eliminarServicio = (id) => {
        // console.log(id);
        if (window.confirm("Realmente desea eliminar el registro")) {
            setIsLoading(true);
            fetchDeleteDirectory(id)
                .then(data => {
                    console.log("Eliminado", data.data)
                    fetchAllDirectories()
                        .then(directories => {
                            setIsLoading(false);
                            setDirectories(directories);
                        });
                }).catch(err => {
                    console.log(err);
                });
        }
        // .then(data => {
        //     console.log("Eliminado", data)
        // }, error => {
        //     console.log("Error al eliminar", error)
        // })*/
    }
    return (
        <div className="container">
            <h1>Lista de lugares</h1>
            <hr />

            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: 150 }}>Nombre</th>
                        <th style={{ width: 150 }}>PaginaWeb</th>
                        <th style={{ width: 150 }}>CorreoElectronico</th>
                        <th style={{ width: 150 }}>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        directories.map(({ id, NombreServicio, PaginaWeb, CorreoElectronico }) => (
                            <tr key={id}>
                                <td>{NombreServicio}</td>
                                <td>{PaginaWeb}</td>
                                <td>{CorreoElectronico}</td>
                                <td><button type="button"
                                    onClick={eliminarServicio.bind(this, id)}
                                    className="btn btn-primary">
                                    Eliminar</button>
                                </td>
                            </tr>
                        ))
                        /*
                        directories.map(({ id, title }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td><button type="submit" className="btn btn-primary">Eliminar</button></td>
                            </tr>
                        ))*/
                    }
                </tbody>
            </table>
            {isLoading && <Loading />}
        </div>
    )
}