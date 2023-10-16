import styles from "./Modal.module.css";

interface ModalProps {
  closeModal: () => void;
  clearLocalStorage: () => void;
}

export const Modal = ({ closeModal, clearLocalStorage }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={`${styles["modal-box"]} modal-box`}>
        <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
        <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
        <div className="modal-action">
          <button onClick={clearLocalStorage} className="btn btn-primary">
            네
          </button>
          <button onClick={closeModal} className="btn btn-outline">
            아니오
          </button>
        </div>
      </div>
    </div>
  );
};
