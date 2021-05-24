import styles from "../styles/Modal.module.scss";

function Modal({showModal, closeModal}) {

	if(!showModal) {
		return null
	}

    return (
        <div id="myModal" className={styles.modal}>
            <div className={styles.modalContent}>
			<h2 className={styles.title}>I am Product</h2>
			<p>Are You sure, You want to delete this Product?</p>
			<div className={styles.buttons}>
				<button onClick={closeModal}>Cancel</button>
				<button>Yes</button>
			</div>
            </div>
        </div>
    );
}

export default Modal;
