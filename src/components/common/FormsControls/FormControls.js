import React from "react";
import styles from './FormControls.module.css';
import { Field } from "redux-form";

export const FormControl = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
        <div>
            <props.elementType {...input} {...props} />
        </div>

        {hasError && <span>{meta.error}</span>}
    </div>
}

export const createField = (placeholder, name, validators, components, elementType, props={}, text='') => {
    return <div>
        <Field placeholder={placeholder}
            validate={validators}
            name={name}
            component={components}
            elementType={elementType} 
            {...props}/> {text}
    </div>

}