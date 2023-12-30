import React from "react";
import {Cards} from "../components/card/Cards";
import {Slider} from "../components/slider/slider";

export class Service extends React.Component<any, any> {
    render() {
        return (
            /*Service */
            <section >

                <div className={'flex w-[100%] h-[850px] bg-gradient-to-r from-[#21cdc0] to-[#213360]'}>
                    <div className={'flex-col items-center justify-center mx-10 space-y-8 p-6 m-4 text-[white]'}>
                    <p className={'font-bold text-3xl mx-10'}>Medcity Has Touched The Lives Of Patients & Providing Care For The Sickest In Our Community</p>
                    <Cards />
                </div>
                </div>

                <div className={'flex '}>
                    <div className={'flex-col w-[100%] h-[520px] items-center justify-center mx-40 '}>
                        <h1 className={'text-4xl font-bold text-[#213360] my-2 p-8'}>Meet Our Doctors</h1>
                        <p className={'text-xl font-bold text-[#213360]  p-6 '}>Our administration and support staff all have exceptional
                            people skills and trained to assist you with all medical enquiries.</p>
                        <Slider/>
                    </div>

                </div>

            </section>
        );
    }

}