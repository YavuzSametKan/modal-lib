import Header from "../base-modal/Header"
import Button from "../ui/Button"
import {createModal} from "../../utils/modal.js";

const Level1 = ({ data }) => {
    return (
        <>
            <Header title="Level 1" />
            <main className="flex flex-col px-6 py-4 gap-y-4">
                <article className="flex flex-col gap-y-2">
                    <h3 className="text-lg font-semibold">Example Modal Title (Level 1)</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </article>
                <Button
                    color="purple"
                    className="ml-auto"
                    onClick={() => createModal('level-2', {
                        hobbies: ['Programming', 'Playing Video Games', 'Swimming'],
                        weight: {value: 103, unit: 'kg'},
                        height: {value: 183, unit: 'cm'},
                        location: 'Istanbul, Türkiye'
                    })}
                >
                    Go to Level 2
                </Button>
            </main>
        </>
    )
}

export default Level1