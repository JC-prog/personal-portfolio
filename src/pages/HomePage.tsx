import Navbar from "@/components/navbar";

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative">
        {/* Image section with overlapping elements */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 relative">
          <div className="relative">
            <div className="bg-indigo-100 rounded-lg w-full h-64 md:h-80 lg:h-96 overflow-hidden">
              <img 
                src="/api/placeholder/600/500" 
                alt="Designer team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Introduction Text */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          <div className="text-orange-500 font-medium mb-2">I'm a Designer</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            I Can Design Anything<br />You Want
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg">
            Hello there! I'm a web designer, and I'm very passionate and dedicated 
            to my work. With experience as a professional web developer, 
            I have acquired the skills and knowledge necessary to make your 
            project a success. I enjoy every step of the design process, from 
            discussion and collaboration.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0">
        <div className="w-32 h-32 bg-indigo-50 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;