import { LuCalendarCheck } from "react-icons/lu";
import { PiFireLight, PiChatsLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useScrollToTopNavigate from "../../routes/route";


const CommunityMenu = () => {

    const router = useScrollToTopNavigate();

    return (
        <div className="border rounded-sm shadow-md bg-white absolute top-full
         text-gray-600">
            <div className="flex cursor-pointer p-2 my-1">
                <div className="flex flex-col items-start space-y-3 m-0.5">
                    <div className="flex items-center gap-4 group hover:bg-green-100 origin-left transition-colors duration-500 ease-in-out rounded-md p-2" onClick={() => router('/discussions')}>
                        <div className='bg-green-200 p-2 rounded-sm shadow-sm group-hover:bg-green-100 transition-colors duration-500 ease-in-out'>
                            <PiChatsLight className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors duration-500 ease-in-out" />
                        </div>
                        <div>
                            <div className='font-semibold group-hover:text-green-600 transition-colors duration-500 ease-in-out'>
                                Discussions
                            </div>
                            <div className='text-xs w-60 group-hover:text-green-700 transition-colors duration-500 ease-in-out'>
                                Ask questions, find support, and connect
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group hover:bg-red-100 transition-colors duration-500 ease-in-out rounded-md p-2">
                        <div className='bg-red-200 p-2 rounded-sm shadow-sm group-hover:bg-red-100 transition-colors duration-500 ease-in-out'>
                            <PiFireLight className="w-6 h-6 text-gray-500 group-hover:text-red-600 transition-colors duration-500 ease-in-out" />
                        </div>
                        <div>
                            <div className='font-semibold group-hover:text-red-600 transition-colors duration-500 ease-in-out'>
                            Streaks
                            </div>
                            <div className='text-xs w-60 group-hover:text-red-700 transition-colors duration-500 ease-in-out'>
                            The most active community members
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group hover:bg-blue-100 transition-colors duration-500 ease-in-out rounded-md p-2">
                        <div className='bg-blue-200 p-2 rounded-sm shadow-sm group-hover:bg-blue-100 transition-colors duration-500 ease-in-out'>
                            <LuCalendarCheck className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors duration-500 ease-in-out" />
                        </div>
                        <div>
                            <div className='font-semibold group-hover:text-blue-600 transition-colors duration-500 ease-in-out'>
                            Events
                            </div>
                            <div className='text-xs w-60 group-hover:text-blue-700 transition-colors duration-500 ease-in-out'>
                            Meet others online and in-person
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default CommunityMenu;