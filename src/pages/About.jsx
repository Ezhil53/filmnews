
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../assets/images/Hero-Banner.webp";
import frame from "../assets/images/1.png";
import frame2 from "../assets/images/diamond.png";
import { BsInstagram } from "react-icons/bs";
import Diamond from '../assets/images/D01.png'
import Navbar from '../components/Navbar'
import { FiAward, FiStar } from "react-icons/fi";

const About = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <>
      <Navbar />
     <div className="overflow-hidden">
  {/* Hero Section with Animations */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 -z-10">
      <img
        src={banner}
        className="w-full h-full object-cover transition-transform duration-[8000ms]"
        alt="cinema background"
        style={{
          transform: `scale(1.1) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent animate-pulse"></div>
    </div>

    {/* Floating Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto flex items-center justify-start">
      <div
        className="w-full md:w-auto"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        {/* Tagline Badge */}
        <div
          className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6"
        >
          <FiStar className="text-amber-400 animate-spin-slow" style={{ animationDuration: '8s' }} />
          <span className="text-amber-400 font-semibold text-sm">Where Cinema Legends Are Made</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-left">
          <span className="text-white block mb-2">The Legacy of bringing</span>
          <span className="text-white block">Cinematic visions to </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-600 to-amber-800 inline-block animate-gradient">
            LIFE
          </span>
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mb-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-500/50">
            <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">600+</div>
            <div className="text-xs md:text-sm text-gray-400">Films Promoted</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-500/50" style={{ transitionDelay: '100ms' }}>
            <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">40+</div>
            <div className="text-xs md:text-sm text-gray-400">Years Legacy</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-500/50" style={{ transitionDelay: '200ms' }}>
            <div className="text-2xl md:text-4xl font-bold text-amber-500 mb-1">100%</div>
            <div className="text-xs md:text-sm text-gray-400">Dedication</div>
          </div>
        </div>
      </div>
    </div>

  </section>

  {/* First Section - Film News Anandan with Enhanced Design - LIGHT THEME */}
  <section className="py-16 md:py-28 font-[Rubik] bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
    </div>

    <div className="w-full px-6 md:w-[85%] mx-auto relative z-10">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-16">
        <div className="w-full md:w-[50%] mx-auto group">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src={frame}
                className="w-full md:w-[90%] mx-auto object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                alt="Film News Anandan"
              />
              {/* Award Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-4 shadow-xl border-4 border-white animate-pulse">
                <FiAward className="text-3xl text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] mx-auto">
          <div>
            <div
              className="flex flex-col gap-y-6 md:gap-y-8"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="inline-flex items-center gap-2 text-amber-600">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <span className="text-sm font-semibold tracking-wider">THE PIONEER</span>
              </div>

              <h3 className="font-extrabold text-3xl md:text-5xl text-gray-900 leading-tight">
                Film News Anandan
              </h3>

              <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                Icon of Tamil Cinema History
              </h4>

              <div className="flex flex-col gap-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-amber-600 before:rounded-full">
                  An influential film historian, photographer, and PRO, Anandan captured the essence of Kollywood's evolution with unmatched dedication.
                </p>
                <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-amber-600 before:rounded-full">
                  His iconic work with MGR, Sivaji Ganesan, and countless stars immortalized the industry's milestones. Recipient of the prestigious Kalaimamani Award, his invaluable contributions continue through his son, Diamond Babu.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
                <span className="text-amber-600 font-semibold text-sm">Kalaimamani Awardee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Second Section - Diamond Babu with Interactive Elements - LIGHT THEME */}
  <section className="py-16 md:py-28 font-[roboto] bg-gradient-to-b from-gray-100 via-gray-50 to-white relative overflow-hidden">
    {/* Animated Grid Background */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
    </div>

    <div className="w-full px-6 md:w-[85%] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
        <div className="w-full md:w-[50%] mx-auto">
          <div>
            <div
              className="flex flex-col gap-y-6 md:gap-y-8"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="inline-flex items-center gap-2 text-amber-600">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
                <span className="text-sm font-semibold tracking-wider">THE VOICE</span>
              </div>

              <h3 className="font-extrabold text-3xl md:text-5xl text-gray-900 leading-tight font-[Rubik]">
                Diamond Babu
              </h3>

              <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
                The Voice Behind Tamil Cinema
              </h4>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Over <span className="text-amber-600 font-bold text-md">40 years of excellence</span> in film publicity and public relations. Crafting the success stories of <span className="text-amber-600 font-bold">600+ films</span>, Diamond Babu is a trusted name in Kollywood.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                With deep-rooted industry connections, unmatched promotional expertise, and a legacy inherited from the legendary Film News Anandan, he continues to be the go-to PRO for Tamil cinema's biggest names.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-amber-100 border border-amber-300 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-200 transition-all cursor-default">
                  Film Publicity
                </span>
                <span className="bg-amber-100 border border-amber-300 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-200 transition-all cursor-default">
                  Public Relations
                </span>
                <span className="bg-amber-100 border border-amber-300 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-200 transition-all cursor-default">
                  Media Management
                </span>
              </div>

              <a href="https://www.instagram.com/idiamondbabu/?hl=en" target="_blank" className="pt-4">
                <button className="group p-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold shadow-xl h-14 rounded-[30px] flex items-center gap-x-0 text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-amber-500/30 border border-gray-600">
                  <span className="px-6">Contact Now</span>
                  <div className="p-3 rounded-full bg-gradient-to-r from-[#ff0664] to-[#ff3385] h-full flex items-center group-hover:from-[#ff3385] group-hover:to-[#ff0664] transition-all duration-300">
                    <BsInstagram className="text-white text-2xl md:text-2xl font-bold group-hover:rotate-12 transition-transform" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] mx-auto group">
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-l from-amber-400 to-amber-600 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative">
              <img
                src={frame2}
                className="w-full md:w-[90%] mx-auto object-center rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                alt="Diamond Babu"
              />
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-32 border-t-4 border-r-4 border-amber-500 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-32 border-b-4 border-l-4 border-amber-500 rounded-bl-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

    </>
  )
}

export default About
