import React from "react";
import "../../index.css";
import ten from "../../images/10.avif";
import responsive from "../../images/responsive.jpg";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Blog Post */}
      <main className="container mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={ten}
            alt="Blog Post Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Post Content */}
        <article className="bg-white p-6 rounded-lg shadow-lg">
          {/* Post Title */}
          <h2 className="text-4xl text-black font-bold mb-4">
            How to Improve Your Website's User Experience
          </h2>

          {/* Author and Date */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
            <img
              src="/Ludz.jpg"
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">Lusapho Matiti</p>
              <p>Published on Nov 15, 2024</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Using a website should feel easy and enjoyable, like flipping
              through pages of your favourite book, you shouldn't struggle using
              it. Whether you're a seasoned Web developer or{" "}
              <Link
                to="/blogs/Website-Essentials-for-Startups"
                className="text-blue-400 no-underline hover:underline"
              >
                small business
              </Link>{" "}
              owner, you'll walk away with practical tips to make your site more
              accessible, engaging and user-friendly.
            </p>
            <h3> Create a simpler design</h3>
            <p>
              A clean and simple design makes your website easier to use and
              remember. Users shouldn't have to hunt through clutter to find
              what they need. Focus on clear navigation, readable fonts and
              well-organized layout. Stick to just a few colours and keep the
              information short and to the point. Remember less is more, your
              goal is to guide users effortlessly to the info or actions they're
              looking for.
            </p>
            <blockquote>
              "Simplicity is the ultimate sophistication." - Leonardo da Vinci
            </blockquote>
            <h3>Improve mobile responsiveness</h3>
            <p>
              With so many people browsing on their phones, your website needs
              to look and work great on all screen sizes. Use a responsive
              design that adjusts automatically to fit mobile, tablet, and
              desktop screens. Buttons should be easy to tap, text should be
              readable without zooming, and images should resize without cutting
              off important details. A{" "}
              <Link
                to="10-UX-Tips-for-Small-Business-Sites"
                className="text-blue-400 no-underline hover:underline"
              >
                mobile-friendly
              </Link>{" "}
              site keeps visitors happy and engaged, no matter how they access
              it.
            </p>
            <figure>
              <img
                src={responsive}
                alt="Learning consistency"
                className="rounded-lg shadow-md"
              />
              <figcaption className="text-gray-500 text-center mt-2">
                Design for the user, not the device.
              </figcaption>
            </figure>
            <h3>Make your website load faster</h3>
            <p>
              Nobody likes waiting for a slow website. In fact, a few seconds
              can make visitors leave. Compress images, minimize code, and use
              caching to speed things up. If you're using videos, make sure
              they're optimized for web use. A faster website not only improves{" "}
              <Link
                to="10-UX-Tips-for-Small-Business-Sites"
                className="text-blue-400 no-underline hover:underline"
              >
                user experience
              </Link>{" "}
              but also helps with search engine rankings.
            </p>
            <blockquote>
              "A faster website is a better website." - Ludz
            </blockquote>
            <h3> Lastly, Test and iterate continuously.</h3>
            <p>
              The best websites are always improving. Regularly test your site
              by clicking around like a visitor would. Are the links working?
              Are the forms easy to fill out? Ask for feedback from real users
              and keep tweaking based on what you learn.
            </p>{" "}
            <p>
              Improving your website’s{" "}
              <Link
                to="10-UX-Tips-for-Small-Business-Sites"
                className="text-blue-400 no-underline hover:underline"
              >
                user experience
              </Link>{" "}
              doesn’t have to be overwhelming. By focusing on simplicity, mobile
              responsiveness, speed, and continuous improvement, you can create
              a site that visitors love to use. Start small, make changes step
              by step, and watch your user engagement grow.
            </p>{" "}
            <p>
              If you ever find yourself needing more guidance or a helping hand,
              You can{" "}
              <Link
                to="/contact"
                className="text-blue-400 no-underline hover:underline"
              >
                contact me
              </Link>{" "}
              to assist in making those improvements.
            </p>
          </div>
        </article>
        {/* Related Blog Cards */}
        <div className="mt-12 lg:w-full lg:flex lg:space-x-5 lg:mt-10 lg:px-6">
          <div className="flex-1 lg:w-1/4">
            <h3 className="text-blue-500 capitalize">Related Blog Posts</h3>

            {/* Card 1 */}
            <div className="mt-6">
              <Link
                to="/blogs/top-web-design-trends-to-watch-in-2025"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                Top Web Design Trends to Watch in 2025
              </Link>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            {/* Card 2 */}
            <div className="mt-6">
              <Link
                to="/blogs/website-essentials-for-startups"
                className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400"
              >
                Website Essentials for Startups
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
