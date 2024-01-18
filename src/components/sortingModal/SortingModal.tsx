import React from "react";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import "./SortingModal.css";

interface ISortingModalProps {
    closeModalCallback: Function;
}

export default function SortingModal({
    closeModalCallback,
}: ISortingModalProps) {
    return (
        <Modal>
            <Modal.Header>
                <div className="row align-items-center">
                    <div className="col">
                        <h5>Сортировки</h5>
                    </div>
                    <div className="col-auto">
                        <i
                            className="bi bi-x-lg"
                            onClick={() => closeModalCallback()}
                        ></i>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body></Modal.Body>
        </Modal>
    );
}
