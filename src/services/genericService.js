import React ,{useState} from 'react';
import TransferReason from '../AssetTransfer/TransferReason';

export function useStepFlow(initialValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({})
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}
export function getStepContent(stepIndex,props) {
    switch (stepIndex) {
      case 0:
        return <TransferReason
          values ={props.values}
        />;
      case 1:
        return "Step2";
      case 2:
        return "Step3-Final Step";

      default:
        return "Unknown stepIndex";
    }
 
}