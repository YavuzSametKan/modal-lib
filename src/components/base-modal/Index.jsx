import modalData from "../../modals"
import {destroyAllModal, destroyModal, useModals} from "../../utils/modal"
import {useEffect} from "react";

const Index = ({ closeOnOutsideClick = false, className = "" }) => {
    const modals = useModals();

    const handleOutsideClick = (e) => {
        if (closeOnOutsideClick && e.target.id === "modal-overlay") {
            destroyAllModal();
        }
    };

    const handleEscapeKey = e => e.key === "Escape" && destroyModal()

    useEffect(() => {
        // Closing modal when Esc is pressed
        window.addEventListener('keydown', handleEscapeKey);

        // Remove listener when modal unmount
        return () => window.removeEventListener('keydown', handleEscapeKey);
    }, []);

    return (
        <div
            id="modal-overlay"
            className="modal-overlay bg-black/50 w-full h-screen fixed inset-0 z-10 flex items-center justify-center"
            onClick={handleOutsideClick}
        >
            <div
                className={`modal-container bg-white w-[60%] ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {modals.map((modal, i) => {
                    const modalDataItem = modalData.find((m) => m.name === modal.name);
                    if (!modalDataItem) return null;

                    const { element: ModalContentComponent } = modalDataItem;

                    return (
                        <div
                            key={modal.name + "-" + i}
                            className="hidden last:block"
                        >
                            <ModalContentComponent data={modal.data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;