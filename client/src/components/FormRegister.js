import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


const FormRegister = () => {
    const navigate = useNavigate();
     const [infoMsg, setInfoMsg] = useState('');
    const [ShowPass, setShowPass] = useState(false);
    const [ShowconfirmPass, setShowConfirmPass] = useState(false);
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass:""
    });
    

    const passInp = useRef(null);
    const confirmPassInp = useRef(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data:response } = await axios.post('/api/user/register', values);
            console.log(response);
            navigate("/login");

        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response.data);
                setInfoMsg(error.response.data.msg);
            }
        }
    }

    useEffect(() => {
        ShowPass ? (passInp.current.type = 'text') : (passInp.current.type = 'password');
    }, [ShowPass]);

    useEffect(() => {
        ShowconfirmPass
            ? (confirmPassInp.current.type = 'text')
            : (confirmPassInp.current.type = 'password');
    }, [ShowconfirmPass]);

    return (
        <>
            <form autoComplete="off" action="" className="form" onSubmit={handleSubmit}>
                <div className="form__info">
                    <h4
                        className="form__info-msg"
                        style={infoMsg ? { padding: '10px' } : { padding: '0px' }}>
                        {infoMsg}
                        <span
                            onClick={() => setInfoMsg("")}
                            className="form__info-close"
                            style={infoMsg ? { display: 'inline-block' } : { display: 'none' }}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </h4>
                </div>
                <h2 className="form__title">Create a new account</h2>
                <div className="form__group-item">
                    <input
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        className="form__group-input"
                        type="text"
                        placeholder="Username"
                    />
                    <i className="fa-solid fa-user form__group-icon"></i>
                </div>
                <div className="form__group-item">
                    <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="form__group-input"
                        type="text"
                        placeholder="Email"
                    />
                    <i className="fa-solid fa-envelope form__group-icon"></i>
                </div>
                <div className="form__group-item">
                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        className="form__group-input"
                        type="password"
                        placeholder="Password"
                        ref={passInp}
                    />
                    {ShowPass ? (
                        <i
                            onClick={() => setShowPass(false)}
                            className="fa-solid fa-eye form__group-icon"></i>
                    ) : (
                        <i
                            onClick={() => setShowPass(true)}
                            className="fa-solid fa-eye-slash form__group-icon"></i>
                    )}
                </div>
                <div className="form__group-item">
                    <input
                        name="confirmPass"
                        value={values.confirmPass}
                        onChange={handleChange}
                        className="form__group-input"
                        type="password"
                        placeholder="Verify Password"
                        ref={confirmPassInp}
                    />
                    {ShowconfirmPass ? (
                        <i
                            onClick={() => setShowConfirmPass(false)}
                            className="fa-solid fa-eye form__group-icon"></i>
                    ) : (
                        <i
                            onClick={() => setShowConfirmPass(true)}
                            className="fa-solid fa-eye-slash form__group-icon"></i>
                    )}
                </div>
                <input
                    className="form__group-input form__group-input--btn"
                    type="submit"
                    value="Register"
                />
            </form>
        </>
    );
};

export default FormRegister;
