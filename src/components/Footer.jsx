import React from 'react';

const FooterStats = () => (
  <div className="bg-sky-200 py-10 w-full">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0 md:divide-x divide-cyan-200">
      <div className="flex-1 flex flex-col items-center px-8">
        <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">10+</span>
        <span className="text-base md:text-lg text-gray-500 font-semibold text-center">Surf Instructors Trained<br/>Developing local talent across borders.</span>
      </div>
      <div className="flex-1 flex flex-col items-center px-8">
        <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">10,000+</span>
        <span className="text-base md:text-lg font-semibold text-gray-500 text-center">Surf Sessions Delivered<br/>From beginners to wave chasers.</span>
      </div>
      <div className="flex-1 flex flex-col items-center px-8">
        <span className="text-4xl md:text-5xl font-thin text-gray-400 mb-2">17+</span>
        <span className="text-base md:text-lg font-semibold text-gray-500 text-center">Countries Represented by Our Guests<br/>Join an international surf tribe.</span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-[#0a67b3] text-white pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 sm:gap-10 md:gap-0">
        <div className="flex flex-col items-center md:items-start mb-6 sm:mb-8 md:mb-0 md:mr-8 lg:mr-10 md:pr-8 lg:pr-10">
          <img src="/logo1.png" alt="The Surfer Logo" className="h-16 sm:h-18 md:h-20 w-auto mb-4 sm:mb-6" />
          <div className="flex gap-3 sm:gap-4">
            <div className="bg-white/90 rounded-full p-1.5 sm:p-2 hover:bg-cyan-200 transition"><img src="/insta.png" alt="Instagram" className="h-5 sm:h-6 w-5 sm:w-6" /></div>
            <div className="bg-white/90 rounded-full p-1.5 sm:p-2 hover:bg-cyan-200 transition"><img src="/fb.png" alt="Facebook" className="h-5 sm:h-6 w-5 sm:w-6" /></div>
            <div className="bg-white/90 rounded-full p-1.5 sm:p-2 hover:bg-cyan-200 transition"><img src="/twt.png" alt="Twitter" className="h-5 sm:h-6 w-5 sm:w-6" /></div>
            <div className="bg-white/90 rounded-full p-1.5 sm:p-2 hover:bg-cyan-200 transition"><img src="/yt.png" alt="YouTube" className="h-5 sm:h-6 w-5 sm:w-6" /></div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">About us</h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">The Surfer Surf Camps in Sri Lanka Fully Owned By Local Surfer Who born and grow up in Weligama, Sri Lanka. Located Heart</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">The Surfer</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm">Blog</li>
              <li className="text-xs sm:text-sm">Contact us</li>
            </ul>
          </div>
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm">Terms of Conditions</li>
              <li className="text-xs sm:text-sm">Imprint</li>
              <li className="text-xs sm:text-sm">Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export { FooterStats, Footer };
