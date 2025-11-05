import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiCalendar, FiArrowLeft, FiClock, FiShare2 } from "react-icons/fi";
import { BsTag } from "react-icons/bs";
import Navbar from '../components/Navbar'
import axios from "axios";
import BASE_URL from "../Api";

const NewsDetails = () => {
  const [news, setNews] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchNewsById = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/news/${id}`);
        setNews(res.data);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    };
    fetchNewsById();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.description.substring(0, 100) + "...",
          url: window.location.href,
        });
        console.log("Content shared successfully");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Share not supported on this browser");
    }
  };


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors mb-6 group"
            data-aos="fade-right"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to News</span>
          </button>

          {/* Main Content Card */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
            {/* Category Badge & Meta Info */}
            <div className="px-6 md:px-8 pt-6 md:pt-8">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <BsTag className="text-xs" />
                  {news?.newstag}
                </span>

                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="text-sm" />
                    <span>{new Date(news?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit"
                    })}</span>
                    </div>
                </div>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="ml-auto flex items-center gap-2 text-gray-500 hover:text-amber-600 transition-colors"
                  aria-label="Share article"
                >
                  <FiShare2 className="text-lg" />
                </button>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                {news?.title}
              </h1>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
              <img
                src={news?.newsimage}
                alt={news?.title}
                className="w-full h-full object-contain"
              />
             
            </div>

            {/* Description Content */}
            <div className="px-6 md:px-8 py-6 md:py-8">
              <div className=" max-w-none">
                <div
                  // key={news._id}
                  className="description text-gray-700 text-base md:text-lg leading-relaxed mb-4 text-justify"
                  data-aos="fade-up"
                  // data-aos-delay={news._id * 50}
                  dangerouslySetInnerHTML={{ __html: news?.description }}
                >
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Share this article:</span>
                  <button
                    onClick={handleShare}
                    className="text-amber-600 hover:text-amber-700 transition-colors font-semibold text-sm"
                  >
                    Share Now
                  </button>
                </div>

                <button
                  onClick={() => navigate(-1)}
                  className="text-gray-600 hover:text-amber-600 transition-colors font-semibold text-sm flex items-center gap-2"
                >
                  <FiArrowLeft />
                  Back to All News
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;


