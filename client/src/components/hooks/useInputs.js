import {useState, useCallback} from 'react';

function useInputs(initalForm){
    const [form, setForm] = useState(initalForm);

    const onChangeHandler = useCallback( e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    return [form, onChangeHandler];
}

export default useInputs;