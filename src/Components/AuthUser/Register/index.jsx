import { Fragment, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOpenRegister } from '@/redux/OpenRegister';
import { Dialog, Transition } from '@headlessui/react';
import { IoCloseSharp } from 'react-icons/io5';
import { LiaCopyrightSolid } from 'react-icons/lia';
const months = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
];

export default function RegisterModal() {
    //
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentDay = currentDate.getDate();
    const yearsToShow = 100; // Show years up to 100 years ago
    const [month, setMonth] = useState(months[currentMonth]['name']);
    const [yaer, setYear] = useState(currentYear);
    const [day, setDay] = useState(currentDay);

    const [lenghtDay, setLenghtDay] = useState(months[currentMonth]['days']);
    const checkMonth = (e) => {
        // setLenghtDay();
        const index = months.findIndex((month) => month.name === e.target.value);
        setLenghtDay(months[index]['days']);
        setMonth(e.target.value);
    };
    //
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
    const cancelButtonRef = useRef(null);
    useEffect(() => {
        dispatch(setOpenRegister(open));
    }, [open]);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={() => setOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden p-4 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="font-bold text-3xl">Sign Up</h1> {/* Fixed "Sig Up" typo */}
                                    <p>It's quick and easy.</p>
                                </div>
                                <div
                                    className="hover:bg-red-500 p-1 bg-red-600 rounded-full"
                                    onClick={() => setOpen(false)}
                                >
                                    <IoCloseSharp className="text-lg text-white" />
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="block gap-2 items-center lg:flex">
                                <input
                                    type="text"
                                    placeholder="First name" // Fixed "Fist name" typo
                                    className="w-full flex-1 mt-2  rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full flex-1  mt-2 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Mobile number or email address"
                                className="w-full flex-1  mt-2 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <input
                                type="text"
                                placeholder="New password"
                                className="w-full flex-1  mt-2 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div className="mt-2">
                                <p>Date of birth</p>
                                <div className="flex gap-2">
                                    <select
                                        id="currency"
                                        name="currency"
                                        value={day}
                                        onChange={(e) => {
                                            setDay(e.target.value);
                                        }}
                                        className="h-full w-full cursor-pointer rounded-md border-2 bg-transparent py-1 pl-2  text-gray-500 focus:ring-2  focus:ring-indigo-200 sm:text-sm"
                                    >
                                        {[...Array(lenghtDay).keys()].map((i) => (
                                            <option key={i} value={i + 1}>
                                                {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        id="currency"
                                        name="currency"
                                        value={month}
                                        onChange={(e) => checkMonth(e)}
                                        className="h-full w-full cursor-pointer rounded-md border-2 bg-transparent py-1 pl-2  text-gray-500 focus:ring-2  focus:ring-indigo-200 sm:text-sm"
                                    >
                                        {months.map((month, index) => (
                                            <option key={index} value={month.name}>
                                                {month.name}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        id="currency"
                                        name="currency"
                                        value={yaer}
                                        onChange={(e) => {
                                            setYear(e.target.value);
                                        }}
                                        className="h-full cursor-pointer w-full rounded-md border-2 bg-transparent py-1 pl-2  text-gray-500 focus:ring-2  focus:ring-indigo-200 sm:text-sm"
                                    >
                                        {[...Array(yearsToShow + 1).keys()].map((i) => (
                                            <option key={i} value={currentYear - i}>
                                                {currentYear - i}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p>Gender</p>
                                <div className="flex gap-2">
                                    <label className="flex items-center p-2 border border-gray-200 rounded cursor-pointer">
                                        <p className="w-full">Female</p>
                                        <input
                                            checked
                                            type="radio"
                                            value=""
                                            name="bordered-radio"
                                            className="w-full ml-4 text-blue-600 bg-gray-100 border-gray-300 dark:border-gray-600"
                                        />
                                    </label>
                                    <label className="flex items-center p-2 border border-gray-200 rounded cursor-pointer">
                                        <p className="w-full">Male</p>
                                        <input
                                            type="radio"
                                            value=""
                                            name="bordered-radio"
                                            className="w-full ml-4 text-blue-600 bg-gray-100 border-gray-300"
                                        />
                                    </label>
                                    <input
                                        type="submit"
                                        value="Register"
                                        className="w-full  bg-slate-800 hover:bg-slate-600 text-white font-bold rounded-md active:bg-slate-800"
                                    />
                                </div>
                            </div>
                            <hr className="my-4" />
                            <p>
                                People who use our service may have uploaded your contact information to VINA Social
                                Media.
                            </p>
                            <br />
                            <p>
                                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may
                                receive SMS notifications from us and can opt out at any time.
                            </p>
                            <hr className="my-4" />
                            <div className="flex justify-center">
                                <LiaCopyrightSolid className="text-lg" /> <p className="ml-1">VINA Social Media 2023</p>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
