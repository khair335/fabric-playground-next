"use client"
import React, { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoBookmarkOutline, IoDownloadOutline, IoShareOutline, IoShareSocialOutline } from 'react-icons/io5';
import DetailsTab from './Tabs/Details';
import Details from './Tabs/Details';
import Measurements from './Tabs/Measurements';
import Resources from './Tabs/Resources';
import RelatedVideos from './Tabs/RelatedVideos';

const TutorialDetails = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [tab, setTab] = useState('details');
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const tabItems = ['details', 'measurements', 'resources', 'relatedVideos'];
  const tabContent = () => {
    switch (tab) {
      case 'details':
        return <Details />;
      case 'measurements':
        return <Measurements />;
      case 'resources':
        return <Resources />;
      case 'relatedVideos':
        return <RelatedVideos />;
      default:
        return null;
    }
  };
  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] pt-12 pb-16'>
      <div className='relative'>
        <video
          ref={videoRef}
          src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          alt='tutorial'
          className='w-full h-[600px] object-cover rounded-lg'
          autoPlay
          muted
        />
        <button
          onClick={togglePlayPause}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-16 w-full h-16 bg-white rounded-full text-primary-10 text-2xl  flex items-center justify-center shadow-2`}>
          {isPlaying ? <FaPause className='ml-0' /> : <FaPlay className='ml-2' />}
        </button>
      </div>
      <div className='flex justify-between items-start pt-6 pb-3'>
        <div className='flex-1 flex flex-col gap-4'>
          <h2 className='font-unbounded text-xl leading-6 font-normal text-primary-9 flex-1'>How to Sew a Zipper: Step-by-Step</h2>
          <p className='font-inter text-base leading-6 font-normal text-secondary-6'>This video demonstrates how to sew a zipper neatly and effectively, focusing on the key steps and techniques.</p>
          <div className='flex gap-4'>
            <div className='flex gap-[6px] items-center' >
              <p className='font-inter font-bold leading-[21px] text-secondary-6 text-base'>Views:</p>
              <div className='p-2 bg-secondary-6 rounded flex items-center justify-center font-noto text-white font-bold font-xs leading-[18px] h-[25px] w-fit'>254</div>
            </div>
            <div className='flex gap-[6px] items-center'>
              <p className='font-inter font-bold leading-[21px] text-secondary-6 text-base'>Duration:</p>
              <div className='flex justify-center items-center w-fit h-[25px] border border-secondary-6 rounded-xl p-2 font-noto text-secondary-6 font-bold font-xs leading-[18px]'>15:52</div> </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <button className='text-primary-10  text-[28px]'><IoBookmarkOutline /></button>
          <button className='text-primary-10 text-[28px]'><IoShareSocialOutline />
          </button>
          <button className='text-primary-10 text-[28px]'><IoIosHeartEmpty /></button>
        </div>
      </div>
      <div className='flex gap-12 my-5 bg-secondary-1 rounded-lg h-10 px-6 py-[11px]'>
        {
          tabItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setTab(item)}
              className={`font-inter font-bold text-base leading-[18px] uppercase border-b-2 pb-5 ${tab === item ?
                'border-primary-10 text-primary-10'
                :
                'text-black border-secondary-1'} `}>{item === 'details' ? 'Details' : item === 'measurements' ? 'Measurements' : item === 'resources' ? 'Resources' : item === 'relatedVideos' ? 'Related Videos' : ''}</button>
          ))
        }
      </div>
      <div className='pt-6'>
        {tabContent()}
      </div>
    </div>
  );
};

export default TutorialDetails;