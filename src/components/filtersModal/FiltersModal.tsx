import React from "react";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import "./FiltersModal.css";

interface IFiltersModalProps {
    closeModalCallback: Function;
}

export default function FiltersModal({
    closeModalCallback,
}: IFiltersModalProps) {
    return (
        <Modal>
            <Modal.Header>
                <div className="row align-items-center">
                    <div className="col">
                        <h5>Фильтры</h5>
                    </div>
                    <div className="col-auto">
                        <i
                            className="bi bi-x-lg"
                            onClick={() => closeModalCallback()}
                        ></i>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="mt-3">
                    <div className="mb-4">
                        <Dropdown heading={"Категории"} options={["Все"]} />
                    </div>
                    <div className="mb-4">
                        <Dropdown
                            heading={"Кол-во слов"}
                            options={[
                                "менее 25",
                                "менее 50",
                                "менее 100",
                                "100+",
                            ]}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="row mt-5">
                    <div className="col-6">
                        <Button
                            text={"Применить фильтры"}
                            btnColor={"black"}
                            onClick={() => {}}
                        />
                    </div>
                    <div className="col-6">
                        <Button
                            text={"Очистить фильтры"}
                            btnColor={"danger-outline"}
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
}
