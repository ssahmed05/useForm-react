import { useState } from "react"

const useForm = () => {
    const [state, setstate] = useState({});
    
    const handleChange = e => {
        setstate(state => ({...state, [e.target.name] : e.target.value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(state);
    }

    return [state, handleChange, handleSubmit];

}

export default useForm
