import React from 'react';

const videos = [
  {
    title: "Beautiful Relaxing Music. Music To Calm...",
    duration: "1:27:03",
    channel: "RelaxationSleepMusic",
    views: "210 views",
    date: "Aug 14, 2022",
    thumbnail: "https://example.com/thumb1.jpg"
  },
  {
    title: "Best Soft Music for Relaxation, The Most...",
    duration: "—",
    channel: "Meditación Relax",
    views: "1.1K views",
    date: "Feb 2, 2020",
    thumbnail: "https://example.com/thumb2.jpg"
  },
  {
    title: "Relaxing Music For Stress Relief & Study...",
    duration: "1:44:14",
    channel: "Beautiful Piano",
    views: "63.1K views",
    date: "Aug 20, 2022",
    thumbnail: "https://example.com/thumb3.jpg"
  },
  {
    title: "Beautiful Relaxing Music for Stress Relief...",
    duration: "11:11",
    channel: "SoothingMusicClub",
    views: "193 views",
    date: "May 2022",
    thumbnail: "https://example.com/thumb4.jpg"
  },
];

const VideoCard = ({ video }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative">
      <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
      {video.duration && video.duration !== "—" && (
        <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </span>
      )}
    </div>
    <div className="p-4">
      <h4 className="text-md font-semibold text-gray-800 mb-1">{video.title}</h4>
      <p className="text-sm text-gray-600">{video.channel} • {video.views}</p>
      <p className="text-xs text-gray-400">{video.date}</p>
    </div>
  </div>
);

const RelaxingMusicPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">🎶 Soothing Songs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default RelaxingMusicPage;
