import Header from "../base-modal/Header"
import Button from "../ui/Button"
import {destroyModal} from "../../utils/modal"

const Level2 = ({ data }) => {
    return (
        <>
            <Header title="Level 2"/>
            <main className="flex flex-col px-6 py-4 gap-y-4">
                <article className="flex flex-col gap-y-2">
                    <h3 className="text-lg font-semibold">Example Modal Title (Level 2)</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </article>
                <Button
                    color="purple"
                    className="mr-auto"
                    onClick={destroyModal}
                >
                    Go to Level 1
                </Button>
            </main>
        </>
    )
}

export default Level2