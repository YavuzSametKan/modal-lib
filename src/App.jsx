import Modal from "./components/base-modal"
import {createModal, useModals} from "./utils/modal"
import Button from "./components/ui/Button"

function App() {

    const modals = useModals()

    return (
        <main className="p-6">
                { modals.length > 0 &&
                    <Modal
                        closeOnOutsideClick={true}
                        className="rounded-md"
                    />
                }
            <Button
                size="large"
                onClick={() => createModal('level-1', {
                        name: 'Yavuz Samet',
                        surname: 'Kan'
                    })}
            >
                Open Modal
            </Button>
        </main>
    )
}

export default App
