import {useState, useEffect} from "react";
import axios from "axios";

const useRequest = () => {
    const [items, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axios
            .get('https://api.unsplash.com/photos?page=1&client_id=_jsturDm6uZ8Rp4RVK73glpy84X2eDku7oWPKfHR6KM')
            .then(({data}) => {
                setItem(data);
            }).catch(err => {
            console.log(err);
            alert('Ошибка в useRequest');
        }).finally(() => {
                setIsLoading(false);
            }
        )
    }, []);

    return {items, isLoading,};

}

export default useRequest;