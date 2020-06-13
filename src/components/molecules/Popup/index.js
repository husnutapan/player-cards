import React from "react";
import Modal from 'react-bootstrap4-modal';

type Props = {
    children?: React.ReactNode,
    isOpen?: boolean
}


const Popup = (props: Props): React.Element<*> => {
    const {isOpen} = props;
    if (isOpen) {
        return (
            <Modal visible={true}>
                <div className="modal-header">
                    <h5 className="modal-title">Red Alert!</h5>
                </div>
                <div className="modal-body">
                    <p>Enemy vessel approaching!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary">
                        Panic
                    </button>
                    <button type="button" className="btn btn-primary">
                        Fire phasers
                    </button>
                </div>
            </Modal>
        )
    } else return null;

};
export default Popup