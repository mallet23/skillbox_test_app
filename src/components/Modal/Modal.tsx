import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  id?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleClose,
  id = "common-modal",
}) => {
  const wrapper = useMemo(() => {
    let element = document.getElementById(id);
    if (!element) {
      element = createWrapperAndAppendToBody(id);
    }
    return element;
  }, [id]);

  useEffect(() => {
    return () => {
      let element = document.getElementById(id);
      if (element) {
        document.removeChild(element);
      }
    };
  }, [id]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal_backport">
      <div className="modal">
        <div>{children}</div>
        <AiOutlineClose
          onClick={handleClose}
          className="modal_close-btn"
          title="Close"
        />
      </div>
    </div>,
    wrapper,
  );
};

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}
