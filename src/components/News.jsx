import  { useContext, useEffect } from "react";
import AOS from "aos";
import { Link } from 'react-router-dom'
import "aos/dist/aos.css";
import { FiCalendar} from "react-icons/fi";
import { newsCreate } from "../contextapi/NewsContextApi";

const News = () => {
  const { newsData } = useContext(newsCreate)

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\u0B80-\u0BFF\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100 relative min-h-screen ">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="w-full px-6 md:w-[93%] mx-auto relative z-10">
        <div className="text-left mb-12 md:mb-16 " data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Cinema News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Updates</span>
          </h2>
          <p className="text-gray-600 text-md max-w-2xl ">
            Stay updated with the latest happenings in Tamil cinema industry
          </p>
        </div>

        {/* Featured News - Large Card with Image */}
        <div className="grid md:grid-cols-3 grid-cols-1 mb-6 md:mb-8  gap-4" data-aos="fade-up" data-aos-delay="200">
          <div className=" col-span-2 relative ">
            {newsData.map((news) => (
              <Link to={`/news/${createSlug(news.title)}/${news._id}`} key={news._id}>
                <div key={news.id} className="group transition-all duration-500 border border-black/10 rounded-lg bg-white mb-4" >
                  
                  <div className=" col-span-2 p-3 md:p-6 lg:p-7 flex flex-col justify-center " >
                    <div className="flex items-center gap-3 mb-4">
                      <span className=" font-rozha bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {news.newstag}
                      </span>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="text-xs" />
                          <span>{new Date(news.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                          })}</span>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-lg  md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors ">
                      {news.title}
                    </h1>
                    <div className="relative overflow-hidden w-full md:h-80 h-50 mb-4">
                      <img
                        src={news.newsimage}
                        alt={news.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="description text-gray-600 text-justify text-base md:text-md mb-4 leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: news.description }}>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>


          <div className="relative">
            <div className="sticky top-24 left-0 z-10">
              <p className="font-semibold text-lg text-black/70 mb-3">Recent News</p>
              {newsData
                .filter((item) => {
                  const createdDate = new Date(item.createdAt);
                  const today = new Date();
                  const yesterday = new Date(today);
                  yesterday.setDate(today.getDate() - 1);

                  return (
                    createdDate.getFullYear() === yesterday.getFullYear() &&
                    createdDate.getMonth() === yesterday.getMonth() &&
                    createdDate.getDate() === yesterday.getDate()
                  );
                })
                .map((item) => (
                  <Link to={`/news/${createSlug(item.title)}/${item._id}`} key={item._id}>
                    <div className="grid grid-cols-3 border gap-3 border-black/10 p-3 rounded-lg bg-white mb-2 group ">
                      <div className="group-hover:scale-105 transition-all duration-200">
                        <img
                          src={item?.newsimage}
                          alt="News"
                          className="object-cover w-full h-20 rounded-lg"
                        />
                      </div>
                      <div className="col-span-2 flex flex-col justify-around">
                        <h1 className="text-black text-md line-clamp-2 group-hover:text-amber-600 transition-all duration-200">
                          {item?.title}
                        </h1>
                        <p className="text-gray-500 text-sm flex items-center gap-2">
                          <FiCalendar />{" "}
                          {new Date(item.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default News;
