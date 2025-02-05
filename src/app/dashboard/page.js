"use client"
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Dashboard.css';
import mockData from '../search-Page/mockData.json';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import playlists from '@/assets/search/playlist/1.svg';
import videos from '@/assets/search/playlist/2.svg';
import watch from '@/assets/search/playlist/3.svg';
import Link from 'next/link';

import { PiCalendarDotsLight } from 'react-icons/pi';
import Image from 'next/image';
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow max-w-10 w-full h-10 rounded-full bg-white flex items-center justify-center`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <IoIosArrowForward className='text-2xl text-primary-10' />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <IoIosArrowBack className='text-2xl text-primary-10' />
    </div>
  );
};

const Dashboard = () => {
  const [recentlyWatched, setRecentlyWatched] = useState([]);
  const [videoDurations, setVideoDurations] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setRecentlyWatched(mockData.tutorials);
    setBookmarks(mockData.tutorials);
  }, []);

  const handleLoadedMetadata = (event, id) => {
    const duration = event.target.duration;
    setVideoDurations((prevDurations) => ({
      ...prevDurations,
      [id]: duration,
    }));
  };


  const playlistsData = [
    {
      id: 1,
      videoNumber: 7,
      title: 'playlists',
      icon: playlists,
    },
    {
      id: 2,
      videoNumber: 10,
      title: 'videos',
      icon: videos,
    },
    {
      id: 3,
      videoNumber: 10,
      title: 'videos to watch',
      icon: watch,
    },
  ]
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] pt-12 pb-16'>
      <h1 className='font-unbounded text-6.5xl leading-[68px] font-normal text-black'>Dashboard</h1>
      <div className='bg-secondary-1 rounded-2xl px-6 py-10 mt-[30px]'>
        <div>
          <h4 className='font-unbounded text-xl leading-[24px] font-normal pb-2 text-black'>Recently watched guides</h4>
          <p className='font-inter text-base leading-[21px] font-normal text-secondary-6'>Continue where you left off</p>
        </div>
        <Slider {...settings} className='mt-8 dashboard-slider' >
          {
            recentlyWatched.map((tutorial) => (
              <Link href={`/tutorial-details/${tutorial.id}`} key={tutorial.id} style={{ width: '304px' }}>
                <div className='w-full max-w-[280px]'>
                  <div className='relative aspect-video rounded-lg'>
                    <video
                      src={tutorial.video}
                      alt={tutorial.title}
                      className='w-full h-full object-cover rounded-lg'
                      autoPlay
                      muted
                      onLoadedMetadata={(event) => handleLoadedMetadata(event, tutorial.id)}
                    />
                    <span className='absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded'>
                      {videoDurations[tutorial.id] ? `${Math.floor(videoDurations[tutorial.id] / 60)}:${Math.floor(videoDurations[tutorial.id] % 60).toString().padStart(2, '0')}` : 'Loading...'}
                    </span>
                  </div>
                  <h3 className='font-unbounded text-base pt-2 font-normal leading-5 text-primary-9 '>{tutorial.title}</h3>
                  <p className='font-inter text-sm font-normal leading-[21px] pt-1 text-secondary-6 line-clamp-2'>{tutorial.description}</p>
                </div>
              </Link>
            ))
          }
        </Slider>
        <button
          className='font-inter font-normal font-sm leading-[21px] text-primary-10 underline pt-7'
        >
          Show all
        </button>

      </div>
      <div className='mt-5 flex gap-5'>
        <div className='max-w-[740px] w-full border border-secondary-3 p-5 rounded-lg'>
          <h5 className='font-unbounded font-normal text-lg leading-5 text-secondary-8'> Bookmarks  </h5>
          <div className='flex gap-4 items-stretch pt-6'>
            {
              bookmarks.slice(0, 3).map((tutorial) => (
                <div key={tutorial.id} className='w-full max-w-[217px] flex flex-col'>
                  <div className='relative aspect-video rounded-lg'>
                    <video
                      src={tutorial.video}
                      alt={tutorial.title}
                      autoPlay
                      muted
                      onLoadedMetadata={(event) => handleLoadedMetadata(event, tutorial.id)}
                      className='w-full h-full object-cover rounded-lg'
                    />
                    <span className='absolute top-2 right-2 bg-black text-white text-xs px-1 rounded'>
                      {videoDurations[tutorial.id] ? `${Math.floor(videoDurations[tutorial.id] / 60)}:${Math.floor(videoDurations[tutorial.id] % 60).toString().padStart(2, '0')}` : 'Loading...'}
                    </span>
                  </div>
                  <h3 className='font-inter text-sm pt-2 font-normal leading-[21px] text-primary-9 '>{tutorial.title}</h3>
                  <div className='flex-1 flex flex-col justify-end'>
                    <div className='flex items-center gap-1 mt-1'>
                      {
                        tutorial?.category && (
                          <div className='px-2 py-1 flex justify-center items-center rounded-xl border border-secondary-6 font-inter font-normal text-[10px] leading-[15px] text-secondary-6 '>{tutorial?.category}</div>
                        )
                      }
                      {
                        tutorial?.subcategory && (
                          <div className='px-2 py-1 flex justify-center items-center rounded-xl border border-secondary-6 font-inter font-normal text-[10px] leading-[15px] text-secondary-6 '>{tutorial?.subcategory}</div>
                        )
                      }
                      {tutorial?.gender && tutorial?.gender.map((data, index) => (
                        <div className='px-2 py-1 flex justify-center items-center rounded-xl border border-secondary-6 font-inter font-normal text-[10px] leading-[15px] text-secondary-6 ' key={index}>{data}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
        <div className='max-w-[360px] w-full border border-secondary-3 p-5 rounded-lg'>
          <h5 className='font-unbounded font-normal text-lg leading-5 text-secondary-8'> Playlists
            <div className='flex flex-col gap-5 mt-6'>
              {
                playlistsData.map((data) => (
                  <div key={data.id} className='flex items-center gap-2.5'>
                    <Image width={36} height={36} className='max-w-9 w-full h-9' src={data.icon} alt={data.title} />
                    <Link href={`/search?type=playlist&query=${data.title}`} className='font-inter font-normal text-base leading-6 text-primary-10 underline'> <span>{data.videoNumber}</span> {data.title}</Link>
                  </div>
                ))
              }
            </div>
          </h5>
        </div>
        <div className='max-w-[360px] w-full bg-primary-1 p-5 rounded-lg'>
          <h5 className='font-unbounded font-normal text-lg leading-5 text-secondary-8'> Subscription  </h5>
          <div className='flex flex-col gap-3 items-start mt-6'>
            <div className='border border-primary-3 px-3 py-2 rounded w-fit
                  font-unbounded font-semibold text-lg leading-5 text-primary-10
          '>Individual - Pro Plan</div>
            <div className='font-unbounded font-normal text-lg leading-5 tracking-[0.5px] text-primary-10'>$10/month</div>
          </div>

          <div className='mt-6 flex flex-col gap-2'>
            <p className='font-inter font-bold text-sm leading-[21px] text-secondary-6'>Next payment:</p>
            <div className='flex items-center gap-1 '>
              <PiCalendarDotsLight className='text-black text-xl' />
              <p className='font-inter font-normal text-base leading-6 text-black'>September 19, 2024</p>
            </div>
          </div>
          <div className='flex justify-end mt-6'>

            <button className='font-inter font-normal text-base leading-6 text-primary-10 underline text-right'>Go to Settings</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;