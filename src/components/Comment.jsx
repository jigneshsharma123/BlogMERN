import { MdDelete } from "react-icons/MD"
import { BiEdit } from "react-icons/bi"

function Comment() {
    return (
        <div>
             <div className="px-2 py-2 bg-gray-200 rounded-lg my-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-600">@jignesh</h3>
                    <div className="flex justify-center items-center space-x-4">
                    <p className="text-gray-500 text-sm">20/02/2023</p>
                    <p className="text-gray-500 text-sm">16:45</p>
                    <div className="flex justify-center items-center space-x-2">
                        <p className=""><BiEdit/></p>
                        <p className=""><MdDelete/></p>
                    </div>
                    </div>
                </div>
                <p className="px-4 mt-2">Nice information</p>

              </div>
        </div>
    )
}

export default Comment
