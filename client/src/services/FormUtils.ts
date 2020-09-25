import Axios from "axios";
import { useEffect, useState } from "react";
import { ValueType } from "react-select";
import Option from '../models/Option.interface'

const FormUtils = {
    useOption<T>(name: string, mapper: (item: T) => Option): Option[] {
        const [options, setOptions] = useState<Option[]>([]);
    
        useEffect(() => {
            Axios.get(`http://localhost:5000/api/${name}`)
                .then((response) => response.data)
                .then((items) => items.map(mapper))
                .then(setOptions);
        }, [])
        return options;
    },
    
    useFormTextField(name: string, init: string) {
        const [value, setValue] = useState(init);
        return {
            value,
            name,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                return setValue(e.currentTarget.value);
            }
        }
    },
     
   useFormSelectField(name: string, options: Option[]) {
        const [value, setValue] = useState<ValueType<Option>>(options[0]);
        return {
            value,
            name,
            options,
            onChange: (o: ValueType<Option>) => {
                return setValue(o);
            }
        }
    }
}

export default FormUtils;
