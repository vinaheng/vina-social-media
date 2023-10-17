import imgSponsor from '@/assets/11-amazon-sponsored-products.jpg';
function spornser() {
    return (
        <div className="bg-white dark:bg-slate-800 max-h-[40vh] overflow-hidden p-5 rounded-lg">
            <div className="flex items-center">
                <h3 className="font-bold">Sponsor</h3>
            </div>
            <div className="flex items-center mt-2">
                <img src={imgSponsor} alt="" className="w-full h-[10rem] object-cover rounded-lg" />
            </div>
            <div className="flex items-center mt-1">
                <h3 className="text-sm font-bold">Amazon Sponsored Products: A Brief Overview</h3>
            </div>
            <p className="mt-2">
                Amazon Sponsored Products are one of the best ways to drive traffic to your product pages and increase
                your revenue. However, there are millions of sellers on Amazon and the number keeps growing.
            </p>
        </div>
    );
}

export default spornser;
