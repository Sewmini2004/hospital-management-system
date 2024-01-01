import React from "react";
import {Cards} from "../components/card/Cards";
import {Slider} from "../components/slider/slider";
import {SizeAvatars} from "../components/sizeavatars/sizeAvatars";
import {Input} from "@chakra-ui/react";
import MyButton from "../components/button/myButton";

export class Service extends React.Component<any, any> {
    render() {
        return (
            /*Service */
            <section>

                <div>
                    <div className={'flex w-[100%] h-[900px] bg-gradient-to-r from-[#21cdc0] to-[#213360]'}>
                        <div className={'flex-col items-center justify-center mx-10 space-y-8 p-6 m-4 text-[white]'}>
                            <p className={'font-bold text-3xl mx-10'}>Medcity Has Touched The Lives Of Patients &
                                Providing Care For The Sickest In Our Community</p>
                            <Cards/>
                        </div>
                    </div>

                    <div className={'flex '}>
                        <div className={'flex-col w-[100%] h-[850px] items-center justify-center mx-40 '}>
                            <h1 className={'text-4xl font-bold text-[#213360] my-2 p-8'}>Meet Our Doctors</h1>
                            <p className={'text-xl font-bold text-[#213360]  p-6 '}>Our administration and support staff
                                all have exceptional
                                people skills and trained to assist you with all medical enquiries.</p>
                            <Slider/>
                        </div>

                    </div>

                    <div className={'w-[100%] h-[580px] p-20'} >
                        <div className={'flex justify-start items-end  p-20 '}>
                            <p className={' text-3xl font-bold text-[#213360] mx-17'}>We Provide All Aspects Of
                                Medical Practice For Your Whole Family!</p>

                        </div>
                        <div className={'flex flex-row justify-center items-end '}>
                            <SizeAvatars/>
                        </div>

                    </div>



                        <div className={'w-[50%] h-[400px] border-2 mx-40 p-7 rounded-lg shadow-lg shadow-gray-500/100'}>
                        <div className={'flex flex-col justify-center '}>
                            <h1 className={'text-4xl font-bold text-[#213360] my-4 '}>Book An Appointment</h1>
                            <p className={'text-s text-[#213360]'}>Please feel welcome to contact our friendly
                                reception staff with any general or medical enquiry.
                                Our doctors will receive or return any urgent calls.</p>
                        </div>
                        <div className={'flex flex-row justify-start my-10 gap-3 '}>
                            <Input placeholder='Basic usage'/>
                            <Input placeholder='Basic usage'/>

                        </div>

                            <MyButton children={'Book Appointment'}/>

                    </div>
                    </div>




            </section>

        );
    }

}