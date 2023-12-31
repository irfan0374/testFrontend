import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image1 from "../../../../public/buildings/room1.jpg"
import Image2 from "../../../../public/buildings/room2.jpg"
import Image3 from "../../../../public/buildings/room3.jpg"
import Image4 from "../../../../public/buildings/room4.jpg"


const BHKCard = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className='container mx-auto flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                    <div className="da relative ">
                        <div className="absolute inset-0 bg-center dark:bg-black" />
                        <div className="group relative m-0  lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-5 sm:w-sm" onClick={() => navigate('/CardDetails', { state: {data:"1rk",value:"bhk"} })}>
                            <div className="z-10 lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                <img
                                    src={Image1}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
                                    1 RK
                                </h1>

                            </div>
                        </div>

                    </div>

                    <div className="da relative ">
                        <div className="absolute inset-0 bg-center dark:bg-black" />
                        <div className="group relative m-0  lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-5 sm:w-sm"onClick={() => navigate('/CardDetails', { state: {data:"2bhk",value:"bhk"} })}>
                            <div className="z-10 lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                <img
                                    src={Image2}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
                                    2 BHK
                                </h1>

                            </div>
                        </div>

                    </div>
                    <div className="da relative ">
                        <div className="absolute inset-0 bg-center dark:bg-black" />
                        <div className="group relative m-0  lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-5 sm:w-sm"onClick={() => navigate('/CardDetails', { state: {data:"3bhk",value:"bhk"} })}>
                            <div className="z-10 lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                <img
                                    src={Image3}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                    alt="3"
                                />
                            </div>
                            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
                                    3 BHK
                                </h1>

                            </div>

                        </div>
                    </div>
                    
                    <div className="da relative ">
                        <div className="absolute inset-0 bg-center dark:bg-black" />
                        <div className="group relative m-0  lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-5 sm:w-sm"onClick={() => navigate('/CardDetails', { state: {data:"4bhk",value:"bhk"} })}>
                            <div className="z-10  lg:h-48 lg:w-48 md:h-80 md:w-80 sm:h-96 sm:w-96 w-72 overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                <img
                                    src={Image4}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-2 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                                <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
                                    4 BHK
                                </h1>

                            </div>

                        </div></div>
                  

                </div>

            </div>
        </>
    )
}

export default BHKCard
