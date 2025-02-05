import React, { useEffect, useState } from 'react';
import mockData from '../../search-Page/mockData.json';
import { Link } from 'react-router-dom';

const RelatedVideos = () => {
  const [tutorials, setTutorials] = useState([]);
  const [videoDurations, setVideoDurations] = useState({});

  useEffect(() => {
    setTutorials(mockData.tutorials);
  }, []);

  const handleLoadedMetadata = (id, duration) => {
    setVideoDurations((prevDurations) => ({
      ...prevDurations,
      [id]: duration,
    }));
  };

  return (
    <div>
      <div className='bg-secondary-1 px-2 py-1 rounded font-inter text-sm font-normal leading-[21px] text-bw-9 flex flex-row items-center gap-2 w-fit mb-3'>
        <div>5 related videos </div>
        <div className='bg-black h-5 w-[1px]'></div>
        <div>32 videos in the same categorie</div>
      </div>
       <div className='flex flex-wrap gap-[28px]'>
      {tutorials.slice(0, 10).map((tutorial) => (
        <Link
          to={`/tutorial-details/${tutorial.id}`}
          key={tutorial.id}
          className="w-full max-w-[calc(50%-14px)]"
        >
          <div className="relative aspect-video rounded-lg">
            <video
              src={tutorial.video}
              alt={tutorial.title}
              className="w-full h-full object-cover rounded-lg"
              autoPlay={true}
              muted={true}
              onLoadedMetadata={(e) => handleLoadedMetadata(tutorial.id, e.target.duration)}
            />
            <span className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-inter">
              {videoDurations[tutorial.id] ? `${Math.floor(videoDurations[tutorial.id] / 60)}:${Math.floor(videoDurations[tutorial.id] % 60).toString().padStart(2, '0')}` : 'Loading...'}
            </span>
          </div>
          <h3 className="font-unbounded text-xl pt-3 font-normal leading-6 text-primary-9 line-clamp-1">{tutorial.title}</h3>
          <p className="font-inter text-sm font-normal leading-[21px] pt-1 text-secondary-6 line-clamp-2">{tutorial.description}</p>
        </Link>
      ))}
    </div>
   </div>
  );
};

export default RelatedVideos;