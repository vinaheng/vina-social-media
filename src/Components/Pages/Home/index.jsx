import Container from './components/container';
import SlidbarRight from './components/SlidBarRight';

function Home() {
    return (
        <div className="container mx-0 flex flex-1 justify-between gap-2">
            <div className=" flex-1 max-h-[94vh] overflow-auto justify-center">
                <Container />
            </div>
            <div className="hidden lg:block flex-[.4] ">
                <SlidbarRight />
            </div>
        </div>
    );
}
export default Home;
