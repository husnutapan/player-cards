import React from "react";
import Modal from 'react-bootstrap4-modal';
import Button from "../../atoms/Button";

type Props = {
    children?: React.ReactNode,
    isOpen?: boolean,
    popupName?: string,
    closePopup?: Function
}

const Popup = (props: Props): React.Element<*> => {
    const {isOpen, popupName,closePopup} = props;
    if (isOpen) {
        return (
            <Modal visible={true}>
                <div className="modal-header">
                    <h5 className="modal-title">{popupName}</h5>
                </div>
                <div className="modal-body">
                    <p>Enemy vessel approaching!</p>
                </div>
                <div className="modal-footer">
                    <Button type="secondary" onClick={closePopup}>Close</Button>
                    <Button type="primary" onClick={closePopup}>Apply</Button>
                </div>
            </Modal>
        )
    } else return null;

};
export default Popup