import React, { useEffect } from "react";
import "../styling/Blogs.css";
import "../index.css";
import ux from "../images/ux.avif";
import startup from "../images/startup.jpg";
import ten from "../images/10.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#FAFAFA] ">
      <div className=" bg-[#FAFAFA]  container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Build a Website That Works: Tips, Tricks, and Essentials.
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Building a great website doesn’t have to be complicated. Whether
            you're a small business, a startup, or just want to improve your
            site’s user experience, these guides cover the basics and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={ten}
              alt="improve websites user experience"
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20  bg-white rounded-md shadow ">
              <Link
                to="/blogs/how-to-improve-your-websites-user-experience"
                className="font-semibold text-black hover:underline  md:text-xl"
              >
                How to Improve Your Website's User Experience
              </Link>
              <p className="mt-3 text-sm text-black  md:text-sm">
                Learn easy ways to make your site smoother to use and more
                enjoyable. Simple tweaks can make all the difference in keeping
                people on your page.
              </p>
              <p className="mt-3 text-sm text-blue-500">Lusapho Matiti</p>
            </div>
          </div>

          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={ux}
              alt="web design trends"
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
              <Link
                to="/blogs/top-web-design-trends-to-watch-in-2025"
                className="font-semibold text-black hover:underline  md:text-xl"
              >
                Top Web Design Trends to Watch in 2025
              </Link>
              <p className="mt-3 text-sm text-black md:text-sm">
                Make your small business website work better for visitors with
                these quick, practical tips. From easy navigation to
                mobile-friendly design, see how small changes can bring big
                results.
              </p>
              <p className="mt-3 text-sm text-blue-500">Lusapho Matiti</p>
            </div>
          </div>
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src={startup}
              alt="Website Essentials for startups"
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
              <Link
                to="/blogs/Website-Essentials-for-Startups"
                className="font-semibold text-black hover:underline  md:text-xl"
              >
                Website Essentials for Startups
              </Link>
              <p className="mt-3 text-sm text-black md:text-sm">
                Starting up? Get the must-haves for a website that makes a great
                first impression. Clear, simple design and a friendly layout
                help show off what your new business is all about.
              </p>
              <p className="mt-3 text-sm text-blue-500">Lusapho Matiti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
