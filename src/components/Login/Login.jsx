import React from "react";
import { reduxForm } from "redux-form";
import styles from './Login.module.css';
import { FormControl } from "../common/FormsControls/FormControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import formStyle from '../common/FormsControls/FormControls.module.css';
import { createField } from "../common/FormsControls/FormControls";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div className={styles.container}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)

const LoginForm = ({ handleSubmit, error }) => {
    return <div >
        <form action="" onSubmit={handleSubmit}>
                { createField('Email', "email", [required], FormControl, "input", {type: "input"}) }
                { createField("password", "password", [required], FormControl, "input",  {type: "password"}) }
                { createField("rememberMe", "rememberMe", [], FormControl, "input", {type:"checkbox"}, 'remember me' )}
            {error && <div className={formStyle.formSummaryError}>{error}</div>}

            <div>
                <button type={"submit"}> login</button>
            </div>
        </form>
    </div>
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)