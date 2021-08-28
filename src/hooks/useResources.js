import { useEffect, useState } from 'react'
import { fetchAllResources } from '../services/servicesDirectory';

export const useResources = () => {
    const [isLoading, setisLoading] = useState(true);
    const [resources, setResources] = useState([]);

    useEffect(() => {
        // carga de los resources
        fetchAllResources()
            .then(resources => {
                setisLoading(false);
                setResources(resources);
            });
    }, [])

    return {
        isLoading,
        resources
    }
}
