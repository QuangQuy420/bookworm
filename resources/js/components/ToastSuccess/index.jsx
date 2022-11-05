import React from "react";
import './style.scss'

function ToastSuccess(props) {
    const {title, content} = props
    return (
        <div className="toast__message-success">
            <div className="toast__icon">
                <img src="/images/check.png" alt="" />
            </div>
            <div className="toast__content">
                <p className="toast__content-title">
                    {title}
                </p>
                <p className="toast__content-message">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default ToastSuccess;
