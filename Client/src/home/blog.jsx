import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Is It Real Love? How to Tell If Your Relationship Is Toxic",
      time: "11 min read",
      description: "What are the red flags you keep ignoring while being in a relationship?",
      image: "/toxic-relationship.png", // You should place this image in the public folder
      linkText: "Read post →",
    },
    {
      title: "7 Types of Abuse and How to Recognize Them",
      time: "8 min guide",
      description: "Learn to distinguish the different forms of abuse and their characteristics",
      image: "/types-of-abuse.png",
      linkText: "Read guide →",
    },
    {
      title: "Understanding Trauma and Ways to Approach Someone with PTSD",
      time: "14 min read",
      description: "What is trauma? How does it affect you? How to help people cope with it?",
      image: "/ptsd-trauma.png",
      linkText: "Read post →",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Learn & Get Inspired</h2>
        <p className="mt-2 text-gray-600">
          Read our latest blog posts and gain valuable insights
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {post.title} <span className="text-sm text-gray-500"> {post.time}</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <a href="#" className="text-purple-700 font-medium hover:underline">
                {post.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
