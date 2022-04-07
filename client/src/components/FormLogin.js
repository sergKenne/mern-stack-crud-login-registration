import React, { useRef, useState, useEffect } from 'react';

const FormLogin = () => {
    const [ShowPass, setShowPass] = useState(false);
    //const [ShowconfirmPass, setShowConfirmPass] = useState(false);

    const passInp = useRef(null);
    //const confirmPassInp = useRef(null);

    useEffect(() => {
        ShowPass ? (passInp.current.type = 'text') : (passInp.current.type = 'password');
    }, [ShowPass]);

    // useEffect(() => {
    //     ShowconfirmPass
    //         ? (confirmPassInp.current.type = 'text')
    //         : (confirmPassInp.current.type = 'password');
    // }, [ShowconfirmPass]);

    return (
        <>
            <form autoComplete="off" action="" className="form">
                <h2 className="form__title">Sign into your account</h2>
                <div className="form__group-item">
                    <input
                        autoComplete="off"
                        className="form__group-input"
                        type="text"
                        autoFocus
                        placeholder="Email"
                    />
                    <i className="fa-solid fa-envelope form__group-icon"></i>
                </div>
                <div className="form__group-item">
                    <input
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
