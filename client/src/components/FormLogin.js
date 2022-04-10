import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const FormLogin = () => {
    const navigate = useNavigate();
    const [ShowPass, setShowPass] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [infoMsg, setInfoMsg] = useState("")

    const passInp = useRef(null);
    
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: response } = await axios.post('/api/user/login', values);
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            console.log(response);
            setInfoMsg(response.msg);
            navigate('/');
            //window.location="/"
            window.location.reload()
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response.data)
                setInfoMsg(error.response.data.msg);
            }
        }
    };


    useEffect(() => {
        ShowPass ? (passInp.current.type = 'text') : (passInp.current.type = 'password');
    }, [ShowPass]);

    return (
        <>
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="form__info">
                    <h4
                        className="form__info-msg"
                        style={infoMsg ? { padding: '10px' } : { padding: '0px' }}>
                        {infoMsg}
                        <span
                            onClick={() => setInfoMsg('')}
                            className="form__info-close"
                            style={infoMsg ? { display: 'inline-block' } : { display: 'none' }}>
                            <i className="fa-solid fa-xmark"></i>
                        </span>
                    </h4>
                </div>
                <h2 className="form__title">Sign into your account</h2>
                <div className="form__group-item">
                    <input
                        autoComplete="off"
                        className="form__group-input"
                        type="text"
                        autoFocus
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <i className="fa-solid fa-envelope form__group-icon"></i>
                </div>
                <div className="form__group-item">
                    <input
                        autoComplete="off"
                        className="form__group-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
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
                <input
                    className="form__group-input form__group-input--btn"
                    type="submit"
                    value="Login"
                    autoComplete="off"
                />
            </form>
        </>
    );
};

export default FormLogin;
