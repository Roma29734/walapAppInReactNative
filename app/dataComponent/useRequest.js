import {useState, useEffect} from "react";
import axios from "axios";
import apiKey from "../../Keys";

const useRequest = () => {
    const [items, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://api.unsplash.com/photos?page=1&client_id=${apiKey}`)
            .then(({data}) => {
                setItem(data);
            }).catch(err => {
            console.log(err);
            alert(`Ошибка в useRequest ${apiKey}`);
        }).finally(() => {
                setIsLoading(false);
            }
        )
    }, []);

    return {items, isLoading,};

}

export default useRequest;