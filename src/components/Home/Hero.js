import React from 'react';

import workspace from '../../assets/landing/main image.png';
import IconCollection from '../IconCollection/IconCollection';
import Button from '../ui/Button';
import Image from 'next/image';



const Hero = () => {
    return (
        <section className="text-center max-w-8xl mx-auto pb-10 lg:pb-20 pt-[170px] lg:px-12.5 px-4 " id='hero'>
            <div className='max-w-6xl w-full mx-auto'>
                <h1 className="text-3.5xl md:text-5xl xl:text-6xl pb-3 md:pb-5 font-unbounded leading-9 md:leading-12 xl:leading-17 text-black text-center">Fashion, Sewing &  Tailoring Tutorial</h1>
                <h2 className="text-xl md:text-2xl xl:text-4xl text-secondary-5 uppercase leading-6 md:leading-7 text-normal font-unbounded pb-9 xl:pb-14 mb-0 md:mb-1">PROBABLY THE BEST SOLUTION FOR THAT, WHO LEARN FASHION</h2>
            </div>

            <div className="hero-image relative rounded-2.5xl mb-8">
                <Image width={1200} height={320} className='max-w-7.5xl w-full h-[320px] object-cover md:h-auto rounded-7' src={workspace} alt="Sewing workspace with machine and materials" />
                <div
                    className="absolute max-w-[300px] md:max-w-[620px] lg:max-w-[574px] w-full bottom-[-60px] md:bottom-[-30px] left-1/2 transform -translate-x-1/2 px-[21px] md:px-7 py-3 lg:py-6 rounded-2xl flex items-center gap-4 shadow-3 backdrop-blur-lg bg-white flex-col lg:flex-row">
                    <div className="cta-content flex items-center gap-3 md:gap-4 text-left text-primary-10">
                        <IconCollection
                            name="check-round-circle"
                            className="min-w-[34px] max-w-[34px] min-h-[34px] max-h-[34px]"
                        />
                        <span className="text-primary-10 text-lg md:text-xl font-normal leading-6 font-unbounded ">COMPLETELY FREE<br className='block md:hidden lg:block' />FOR STUDENTS</span>
                    </div>
                    <Button
                        variant="Primary"
                        size="Big"
                        icon={<IconCollection name="arrow-right" className="w-7 h-7" />}
                        iconPosition="right" >
                        START NOW
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;