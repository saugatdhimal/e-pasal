import styles from "../styles/Modal.module.scss";

function Modal({name, showModal, closeModal, deleteProduct}) {

	if(!showModal) {
		return null
	}

    return (
        <div id="myModal" className={styles.modal}>
            <div className={styles.modalContent}>
			<h2 className={styles.title}>{name}</h2>
			<p>Are You sure, You want to delete this Product?</p>
			<div className={styles.buttons}>
				<button onClick={closeModal}>Cancel</button>
				<button onClick={deleteProduct}>Yes</button>
			</div>
            </div>
        </div>
    );
}

export default Modal;
