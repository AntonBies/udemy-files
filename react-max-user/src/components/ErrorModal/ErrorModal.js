import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

import Button from "../Button/Button";
import Card from "../Card/Card";

const Backdrop = ({ handleClick }) => {
  return <div className={styles.backdrop} onClick={handleClick} />;
};

const ModalOverlay = ({ title, message, handleClick }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={handleClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, handleClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop handleClick={handleClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          handleClick={handleClick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
