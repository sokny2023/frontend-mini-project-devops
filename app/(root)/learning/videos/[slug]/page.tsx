import React from 'react';
import { notFound } from 'next/navigation';
import SidebarCourses from '@/components/sidebar/SidebarCourse';
import { videos } from '../page'; 
import Link from 'next/link';

const VideoPage = ({ params }: { params: { slug: string } }) => {
  const video = videos.find((v) => v.slug === params.slug);

  if (!video) {
    notFound(); 
  }

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <SidebarCourses />
      <div className="flex-1 p-8">
        {/* Video Player Section */}
        <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
        <iframe
          width="100%"
          height="400"
          src={video.link}
          title={video.title}
          style={{ borderRadius: '15px' }} 
          frameBorder="0"
          allowFullScreen
        ></iframe>

        {/* Description or additional content */}
        <p className="mt-4">{video.description}</p>

        {/* Sidebar with other videos */}
        <div className="mt-8 flex md:hidden">
          <h2 className="text-2xl font-bold">Other Videos</h2>
          <div className="grid grid-cols-1 gap-6 mt-4">
            {videos.filter(v => v.slug !== params.slug).map((v) => (
              <div key={v.slug} className="bg-gray-100 p-4 rounded">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p>{v.description}</p>
                {/* Link to each video */}
                <Link href={`/learning/videos/${v.slug}`} className="text-blue-600 hover:underline mt-2 inline-block">
                  Watch Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar for Sub Videos */}
      <aside className="hidden md:block w-1/4 p-4 bg-gray-50 border-l border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Other Videos</h2>
        <div className="space-y-4">
          {videos.filter(v => v.slug !== params.slug).map((v) => (
            <div key={v.slug} className="bg-gray-100 p-4 rounded dark:bg-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{v.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{v.description}</p>
              {/* Link to each video */}
              <Link href={`/learning/videos/${v.slug}`} className="text-blue-600 hover:underline mt-2 inline-block">
                Watch Now
              </Link>
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
};

export default VideoPage;