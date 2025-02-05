import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionSubTitle from '../ui/SectionSubTitle';

const AboutUs = () => {
  const stats = [
    {
      number: "200+",
      label: "Expert-Led Tutorials"
    },
    {
      number: "24/7",
      label: "Support Availability"
    },
    {
      number: "98%",

      label: "Satisfaction Rate"
    },
    {
      number: "50,000+",
      label: "Patterns Downloaded"
    }
  ];

  return (
    <section className="max-w-8xl mx-auto w-full pb-10  md:pb-20 pt-[170px] px-4 md:px-12.5 " id='about-us'>
      <div className=" max-w-8xl mx-auto flex lg:flex-row flex-col-reverse items-center gap-6 lg:gap-2 justify-between">

        <div className="max-w-full lg:max-w-[500px] xl:max-w-[800px] w-full">
          <div className='lg:flex hidden flex-col gap-4 pb-10'>
            <SectionTitle className='text-start text-2xl xl:!text-3.5xl ' title="About Us" />
            <SectionSubTitle className='text-start' subtitle="Passionate about empowering creators worldwide" />
          </div>

          <h3 className="font-unbounded font-normal text-lg lg:text-xl leading-5 lg:leading-6 text-primary-10 uppercase text-start pb-5">
            AT OUR CORE, WE ARE PASSIONATE ABOUT EMPOWERING CREATORS OF ALL LEVELS TO BRING THEIR SEWING AND DESIGN VISIONS TO LIFE.
          </h3>

          <div className="">
            <p className='font-inter font-normal text-sm leading-[21px] text-secondary-8 text-start pb-3'>
              Founded by a group of dedicated professionals with a shared love for creativity and craftsmanship, our portal has become a trusted resource for sewing enthusiasts, students, and organizations around the world. Whether you&apos;re just starting out or looking to refine your expertise, we offer a comprehensive learning platform tailored to your unique journey.
            </p>

            <div className="mission-statement">
              <h4 className='font-inter  text-sm leading-[21px] text-black font-bold text-start'>Our mission is simple:</h4>
              <p className='font-inter font-normal text-sm leading-[21px] text-secondary-8 text-start'>
                to make high-quality sewing and pattern-making education accessible to everyone. We provide expert-led tutorials, downloadable patterns, and hands-on tools that help turn your ideas into reality. Through our flexible subscription plans, we aim to serve individuals, students, and organizations with the resources they need to succeed.
              </p>
            </div>

            <p className='font-inter font-normal text-sm leading-[21px] text-secondary-8 text-start'>
              With a vibrant community of makers and a commitment to continuous improvement, we ensure that our platform evolves to meet the growing needs of our users. From foundational skills to advanced techniques, we&apos;re here to support your creativity at every stage. Join us, and let&apos;s craft something extraordinary together.
            </p>
          </div>
        </div>

        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 gap-5 align-content-start w-full">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card bg-white text-left">
              <h3 className='px-3 py-2.5 rounded-xl border border-primary-3 text-primary-10 font-unbounded font-normal lg:text-start text-center text-2.5xl lg:text-3.5xl w-full lg:w-fit mb-2 leading-6'>{stat.number}</h3>
              <p className='font-inter font-medium text-base leading-6 text-primary-8 lg:text-start text-center'>{stat.label}</p>
            </div>
          ))}
        </div>
         <div className='flex lg:hidden flex-col lg:gap-4 gap-2 '>
          <SectionTitle className='text-center' title="About Us" />
          <SectionSubTitle className='text-center' subtitle="Passionate about empowering creators worldwide" />
        </div>
      </div>


    </section>
  );
};

export default AboutUs;