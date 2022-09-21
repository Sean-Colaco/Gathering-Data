import React from "react";

import classes from './ErrorModal.module.css';

function ErrorModal(props){
    return(
        <div>
        <div className={classes.backdrop} onClick={props.toggleError}></div>
        <div className={classes.modal}>
            <header className={classes.header}>
                <h2>Error</h2>
            </header>
            <main className={classes.content}>
                <p>{props.message}</p>
            </main>
            <footer className={classes.actions}>
                <button className={classes.errorButton}  onClick={props.toggleError}>Okay</button>
            </footer>
        </div>
        </div>
    )
}

export default ErrorModal;