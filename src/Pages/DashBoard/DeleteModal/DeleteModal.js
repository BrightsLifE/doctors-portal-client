import React from 'react';

const DeleteModal = ({ title, message, closeModal, handlerToDelete, deleteModal }) => {
    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">Close</label>
                        <label className="btn btn-primary text-white" onClick={() => handlerToDelete(deleteModal)}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;