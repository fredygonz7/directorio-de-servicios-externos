import { useEffect, useState } from 'react'
import { fetchAllDirectories } from '../services/servicesDirectory';

export const useDirectories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [directories, setDirectories] = useState([]);

    useEffect(() => {
        // carga de los directories
        fetchAllDirectories()
            .then(directories => {
                setIsLoading(false);
                setDirectories(directories);
            });
    }, []);

    return {
        isLoading,
        directories
    }
}
