import { VscMail } from "react-icons/vsc";
import { PiBookOpenTextLight, PiNotebookLight  } from "react-icons/pi";
import { useNavigate } from "react-router";
import useScrollToTopNavigate from "../../routes/route";




const NewsMenu = () => {
    const router = useScrollToTopNavigate();

    const handleNewsletterClick = () => {
        router("/newsletter")
    }
    
    const handleChangelogClick = () => {
        router("/changelog")
    }
    return ( 
        <div className="border rounded-sm shadow-md bg-white absolute top-full
         text-gray-600">
            <div className="flex cursor-pointer p-2 my-1">
                <div className="flex flex-col items-start space-y-3 m-0.5">
                    <div className="flex items-center gap-4 group hover:bg-green-100 origin-left transition-colors duration-500 ease-in-out rounded-md p-2" onClick={handleNewsletterClick}>
                        <div className='bg-green-200 p-2 rounded-sm shadow-sm group-hover:bg-green-100 transition-colors duration-500 ease-in-out'>
                            <VscMail className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors duration-500 ease-in-out" />
                        </div>
                        <div>
                            <div className='font-semibold group-hover:text-green-600 transition-colors duration-500 ease-in-out'>
                                Newsletter
                            </div>
                            <div className='text-xs w-60 group-hover:text-green-700 transition-colors duration-500 ease-in-out'>
                                The best of Build Stack, every day
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 group hover:bg-blue-100 transition-colors duration-500 ease-in-out rounded-md p-2" onClick={handleChangelogClick}>
                        <div className='bg-blue-200 p-2 rounded-sm shadow-sm group-hover:bg-blue-100 transition-colors duration-500 ease-in-out'>
                            <PiNotebookLight className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition-colors duration-500 ease-in-out" />
                        </div>
                        <div>
                            <div className='font-semibold group-hover:text-blue-600 transition-colors duration-500 ease-in-out'>
                            Changelog
                            </div>
                            <div className='text-xs w-60 group-hover:text-blue-700 transition-colors duration-500 ease-in-out'>
                            New Build Stack features and releases
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default NewsMenu;