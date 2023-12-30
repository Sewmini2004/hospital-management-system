import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Heading,
    Button,
    Divider,
    Image,
    Stack,
    ButtonGroup
} from '@chakra-ui/react'
import {FaHandHoldingHeart, FaHospitalUser, FaUserDoctor} from "react-icons/fa6";
import {FaAmbulance} from "react-icons/fa";
import {GiMedicines} from "react-icons/gi";
import {AiFillMedicineBox} from "react-icons/ai";

export class Cards extends React.Component<any, any> {
    render() {
        return (
            <>
                <div className={'flex '}>

                    <div>
                        <div className={'mx-40 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                            <Card maxW='sm'>
                                <CardBody className={'hover:bg-gray-200  text-[#213360] '}>
                                    <div><FaHandHoldingHeart className={'w-14 h-14 '}/></div>
                                    <Stack mt='6' spacing='3' className={'text-[#213360]'}>
                                        <h1 className={'font-bold text-xl '}>Medical Advices & Check Ups</h1>
                                    </Stack>

                                </CardBody>
                            </Card>

                        </div>

                        <div className={' mx-40 p-5 shadow-2xl  rounded-[2rem] m-5'}><Card maxW='sm'>
                            <CardBody  className={'hover:bg-gray-200  text-[#213360] '}>
                                <div><FaUserDoctor className={'w-14 h-14 '}/></div>
                                <Stack mt='6' spacing='3'>
                                    <h1 className={'font-bold text-xl text-[#213360]' }>Trusted Medical Treatment</h1>
                                </Stack>

                            </CardBody>
                        </Card></div>

                        <div className={'mx-40 p-5 shadow-2xl  rounded-[2rem] m-5'}><Card maxW='sm'>
                            <CardBody className={'hover:bg-gray-200  text-[#213360] '}>
                                <div><FaAmbulance className={'w-14 h-14 '}/></div>
                                <Stack mt='6' spacing='3'>
                                    <h1 className={'font-bold text-xl text-[#213360]'}>Emergency Help Available 24/7</h1>
                                </Stack>

                            </CardBody>
                        </Card></div>
                    </div>


                    <div>
                        <div className={' mx-20 p-5 shadow-2xl  rounded-[2rem] m-5'}>
                            <Card maxW='sm'>
                                <CardBody className={'hover:bg-gray-200  text-[#213360] '}>
                                    <div><GiMedicines className={'w-14 h-14 '}/></div>
                                    <Stack mt='6' spacing='3'>
                                        <h1 className={'font-bold text-xl text-[#213360]'}>Medical Research Professionals</h1>
                                    </Stack>

                                </CardBody>
                            </Card>
                        </div>

                        <div className={' mx-20 p-5 shadow-2xl  rounded-[2rem] m-5'}><Card maxW='sm'>
                            <CardBody className={'hover:bg-gray-200  text-[#213360] '} >
                                <div><AiFillMedicineBox className={'w-14 h-14 '}/></div>
                                <Stack mt='6' spacing='3'>
                                    <h1 className={'font-bold text-xl text-[#213360]'}>Only Qualified Doctors</h1>
                                </Stack>

                            </CardBody>
                        </Card></div>

                        <div className={' mx-20 p-5 shadow-2xl  rounded-[2rem] m-5'}><Card maxW='sm'>
                            <CardBody className={'hover:bg-gray-200  text-[#213360] '} >
                                <div><FaHospitalUser className={'w-14 h-14 '}/></div>
                                <Stack mt='6' spacing='3'>
                                    <h1 className={'font-bold text-xl text-[#213360]'}>Quality Care For Every Patient</h1>
                                </Stack>

                            </CardBody>
                        </Card></div>
                    </div>
                </div>


            </>


        );
    }

}