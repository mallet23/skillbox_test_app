import React from "react";
import { MdAccountCircle } from "react-icons/md";

import { Modal, useModal } from "../../Modal";

import "./AccountButton.css";
import { AccountInfo } from "./AccountInfo";

const AccountButton: React.FC = () => {
  const { isOpen, toggle, close } = useModal();

  return (
    <>
      <MdAccountCircle className="accountButton_icon" onClick={toggle} />
      <Modal isOpen={isOpen} handleClose={close}>
        <AccountInfo />
      </Modal>
    </>
  );
};

const ComponentWrapper = React.memo(AccountButton);
export { ComponentWrapper as AccountButton };
