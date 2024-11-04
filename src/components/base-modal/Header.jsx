import {IoCloseCircle} from "react-icons/io5"
import {destroyModal} from "../../utils/modal"

const Header = ({ title }) => {
    return (
        <header className="px-6 py-4 flex justify-between items-center border-b-2 border-b-zinc-300">
            <h1 className="text-xl font-semibold">{title}</h1>
            <button onClick={destroyModal}>
                <IoCloseCircle className="size-8 text-red-500 hover:scale-110 transition-transform"/>
            </button>
        </header>
    )
}

export default Header