import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import NavBar from './components/navbar';
import Footer from './components/footer';



import { Navbar } from "flowbite-react";



export default function Home() {




  return (

    <>

    <Head>
    
    
      <link rel="shortcut icon" href="https://www.freepnglogos.com/uploads/orange-fox-head-for-logo-png-8.png"
     
 />
  <title> Fox Student 
      </title>
    </Head>
    
    <div className='flex flex-col h-screen justify-between'>

        <NavBar />




<main className='mb-auto'>

<div className="2xl:mx-auto 2xl:container flex justify-center">
            <div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
                {/* Carousel for Small-Sized Screen */}
                <CarouselProvider className="relative block sm:hidden" naturalSlideWidth={100} naturalSlideHeight={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider>
                            <Slide index={0}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <picture>
                                        <img src="https://i.ibb.co/VSsN4Jt/carousel-2.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <picture>
                                        <img src="https://i.ibb.co/phw8yGZ/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/g74VYR2/Group-46.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide index={2}>
                                <div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                        <picture>
                                        <img src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for Medium and Large-Sized Screen */}
                <CarouselProvider className="relative hidden sm:block" naturalSlideWidth={100} naturalSlideHeight={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={1} infinite={true} currentSlide={1}>
                    <div className="js-flickity flex justify-center items-center">
                        <ButtonBack role="button" aria-label="slide backward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <Slider className="carousel__sliderLarge">
                            <Slide className="carousel__inner-slideLarge" index={0}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/VSsN4Jt/carousel-2.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/tMB5CZW/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-3-1.png" alt="sitting area" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={1}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/phw8yGZ/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/g74VYR2/Group-46.png" alt="chairs" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <Slide className="carousel__inner-slideLarge" index={2}>
                                <div className="gallery-cell w-full h-full">
                                    <div className="relative w-full h-full lg:block hidden">#
                                    <picture>
                                        <img src="https://i.ibb.co/92ZYJyK/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                    <div className="relative w-full h-full lg:hidden">
                                    <picture>
                                        <img src="https://i.ibb.co/372ryYP/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-3-1.png" alt="chair" className="object-center object-cover w-full h-full" />
                                        </picture>
                                        <div className="pl-6 pb-6 lg:pl-8 lg:pb-8 absolute left-0 bottom-0">
                                            <h1 className="text-xl leading-5 lg:text-2xl lg:leading-normal font-medium text-white">Lounge Interior</h1>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        </Slider>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

            <style>
                {`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
            </style>
        </div>


<div className='text-center'> <h1 className='text-2xl px-2'> Are you looking for accomadation in 2023. We offer attractive accomadation exclusively to univesity students</h1>< h1 className='pt-10 px-2'> If you are looking for a clean and accredited accomadtion within 500 metres of the university campus</h1></div>
  


<div className=' text-center text-5xl py-80 text-rose-800' >
<Typewriter 
 options={ {   loop: true }}
  onInit={(typewriter) => {
 
    typewriter.typeString('Fox student Lets is under construction')
      .callFunction(() => {
        
      })
      .pauseFor(2500)
      .deleteAll()
      
      .callFunction(() => {
       
      })
      .typeString('Expected to arrive in November')
      .start();
     
  }}
/>
</div>


</main>

<Footer />


</div>
    
    </>
  )
}
