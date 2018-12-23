import React, { Component } from "react";

export const Modal = ({ handleClose, show, children }) => {
    console.log('modal');
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
            </section>
            <button onClick={handleClose}>close</button>
        </div>
    );
};
