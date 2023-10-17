import Header from '../Compoments/Header';
function LayoutHeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="bg-gray-200 dark:bg-slate-800 fixed top-[14] left-0 w-full py-2 h-full">
                <div className="container mx-auto w-full flex gap-2">
                    <div className="h-full gap-2">{children}</div>
                </div>
            </div>
        </>
    );
}

export default LayoutHeaderOnly;
