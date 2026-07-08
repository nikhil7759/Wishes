import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-jost font-light text-3xl md:text-[32px] uppercase tracking-[0.05em] text-black mb-4">
            Contact Us
          </h1>
          <div className="w-16 h-px bg-[#d1b19a] mx-auto mb-6"></div>
          <p className="font-jost text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
            We would love to hear from you. Visit one of our studios or reach out to us via email.
          </p>
        </div>

        {/* Contact Info - Studio 1 & Studio 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Studio 1 */}
          <div className="bg-[#f8f0e5] shadow-sm flex flex-col group transition-all hover:shadow-lg overflow-hidden border border-gray-100 rounded-sm">
            <div className="w-full aspect-[16/9] overflow-hidden bg-gray-200">
              <img 
                src="/Images/store image.png" 
                alt="Gurugram Studio" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-10 flex flex-col items-center text-center flex-grow">
              <h2 className="font-jost font-medium text-xl uppercase tracking-[0.1em] text-[#8b7d72] mb-6">
                Studio - 1
              </h2>
              <p className="font-jost font-light text-black text-[15px] leading-relaxed mb-8 h-[60px]">
                S.C.F 86, First Floor, Sector 14,<br/>
                Gurugram, Haryana &ndash; 122001
              </p>
              <div className="mt-auto flex items-center justify-center font-jost text-black text-[16px] tracking-wider">
                <span className="mr-3 text-[#b2a496] flex items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                +91-92897 14461
              </div>
            </div>
          </div>

          {/* Studio 2 */}
          <div className="bg-[#f8f0e5] shadow-sm flex flex-col group transition-all hover:shadow-lg overflow-hidden border border-gray-100 rounded-sm">
            <div className="w-full aspect-[16/9] overflow-hidden bg-gray-200">
              <img 
                src="/Images/about.jpg" 
                alt="Faridabad Studio" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-10 flex flex-col items-center text-center flex-grow">
              <h2 className="font-jost font-medium text-xl uppercase tracking-[0.1em] text-[#8b7d72] mb-6">
                Studio - 2
              </h2>
              <p className="font-jost font-light text-black text-[15px] leading-relaxed mb-8 h-[60px]">
                54b, Ground Floor, Omaxe World Street,<br/>
                Sector 79, Faridabad &ndash; 121004
              </p>
              <div className="mt-auto flex items-center justify-center font-jost text-black text-[16px] tracking-wider">
                <span className="mr-3 text-[#b2a496] flex items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                +91-74285 93716
              </div>
            </div>
          </div>

        </div>

        {/* Email Section */}
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center py-10 px-8 border-y border-[#d1b19a]/30">
          <h2 className="font-jost font-medium text-xl md:text-2xl uppercase tracking-[0.15em] text-[#8b7d72] mb-4">
            Email ID
          </h2>
          <a href="mailto:info@wishesindia.co.in" className="font-jost text-[16px] md:text-lg text-black hover:text-[#b2a496] transition-colors tracking-wide">
            info@wishesindia.co.in
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
