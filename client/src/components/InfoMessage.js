import React from 'react'

const InfoMessage = ({ infoMsg, setInfoMsg }) => {
    return (
        <div className="form__info form__info--main">
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
    );
};

export default InfoMessage