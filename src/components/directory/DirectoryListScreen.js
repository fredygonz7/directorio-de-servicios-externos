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
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map(({id,title}) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {isLoading && <Loading />}
        </div>
    )
}