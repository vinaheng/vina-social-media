import Header from '../Compoments/Header';
import Sidebar from './Components/Sidebar';
function defaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="bg-gray-200 dark:bg-slate-600 fixed top-[14] left-0 w-full py-2 h-full ">
                <div className=" lg:container md:container mx-auto flex  gap-2">
                    <div className="hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="h-full flex flex-1 gap-2">{children}</div>
                </div>
            </div>
        </>
    );
}

export default defaultLayout;
