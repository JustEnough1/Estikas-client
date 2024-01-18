import React, { ReactNode } from "react";
import "./Modal.css";

interface IModalProps {
    children: ReactNode;
}
interface IModalHeaderProps {
    children?: ReactNode;
}
interface IModalBodyProps {
    children?: ReactNode;
}
interface IModalFooterProps {
    children?: ReactNode;
}

export default function Modal({ children }: IModalProps) {
    return (
        <div className="row justify-content-center">
            <div className="modal col-lg-6 col-11">{children}</div>
        </div>
    );
}

Modal.Header = ({ children }: IModalHeaderProps) => {
    return <div className="modal__header">{children}</div>;
};

Modal.Body = ({ children }: IModalBodyProps) => {
    return <div className="modal__body">{children}</div>;
};

Modal.Footer = ({ children }: IModalFooterProps) => {
    return <div className="modal__footer">{children}</div>;
};
