import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState(null);
    const [displayService, setDisplayService] = useState(null);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setDisplayService(data)
            }
            )
    }, [])

    return { services, setServices, setDisplayService, displayService }
};

export default useServices;