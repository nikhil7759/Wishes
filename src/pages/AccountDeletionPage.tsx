import React from 'react';
import SEO from '../components/SEO';

const steps = [
  {
    step: '01',
    title: 'Open the Website',
    description: 'Locate the WishesIndia website or mobile application on your device and tap to open it.'
  },
  {
    step: '02',
    title: 'Find the Menu',
    description: 'Once inside the website, look for the main navigation menu icon at the top or bottom of your screen.'
  },
  {
    step: '03',
    title: 'Click on Account',
    description: 'In the menu, tap on the "Account" option to open your personal profile & account settings page.'
  },
  {
    step: '04',
    title: 'Scroll Down',
    description: 'On the account settings page, scroll down until you locate the "Delete Account" option (usually positioned near the bottom).'
  },
  {
    step: '05',
    title: 'Click on Delete Account',
    description: 'Tap on the option to begin the account deletion process.'
  },
  {
    step: '06',
    title: 'Confirm Deletion',
    description: 'A confirmation pop-up will appear. Carefully read the warning message and confirm if you wish to proceed. Tap "Yes" to finalize deletion.'
  }
];

const AccountDeletionPage: React.FC = () => {
  return (
    <div className="bg-[#f8f0e5] min-h-screen pt-20 md:pt-24 pb-24 font-jost select-none">
      <SEO
        title="Account Deletion Policy | Wishes by Om Sweets"
        description="Learn about the account deletion process at WishesIndia, data retention guidelines, and step-by-step instructions to delete your account."
      />

      {/* Signature Blush Pink Hero Banner */}
      <div className="relative w-full bg-[#f4c3c0] pt-12 md:pt-16 pb-16 md:pb-20 mb-16">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[75px] uppercase mr-1">
              A
            </span>
            ccount Deletion Policy
          </h1>
          <p className="font-jost text-[14px] md:text-[16px] text-black/80 font-light leading-relaxed max-w-2xl mx-auto tracking-wide mt-4">
            We value your privacy and transparency. Review the guidelines below regarding account removal and step-by-step instructions on how to permanently delete your account.
          </p>
        </div>

        {/* Scalloped Bottom Edge */}
        <div
          className="absolute -bottom-[2px] left-0 w-full h-[16px] pointer-events-none z-20"
          style={{
            backgroundImage: "radial-gradient(circle at 15px 15px, #f8f0e5 14.5px, transparent 15px)",
            backgroundSize: "30px 15px",
            backgroundRepeat: "repeat-x"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Important Warning Notice Card */}
        <div className="group relative p-6 md:p-8 bg-[#fffdfa] border border-[#e8dcc8] rounded-xl mb-12 shadow-sm">
          <div className="absolute inset-[5px] border border-dashed border-[#d1b19a] rounded-lg pointer-events-none opacity-30" />
          <div className="relative z-10 space-y-4 text-[#6b5a4e] font-light text-sm md:text-base leading-relaxed">
            <h2 className="font-jost text-xl md:text-2xl text-[#2c1f18] font-normal flex items-center gap-2">
              <span className="text-[#b49377]">⚠️</span> Important Information
            </h2>
            <p>
              Please be advised that proceeding with the deletion of your account will result in the permanent removal of all associated data, including Sales Data, User Data, photos, reviews, and other related information. Within 30 days, this information will be irretrievably eliminated from our system.
            </p>
            <p>
              We urge you to carefully consider before finalizing this significant decision. If you have any inquiries or concerns, our dedicated support team is readily available to assist you at{' '}
              <a href="mailto:info@wishesindia.com" className="text-[#b49377] underline hover:text-[#9a7b60] transition-colors">
                info@wishesindia.com
              </a>
              . We sincerely appreciate your patronage and regret any inconvenience caused. Thank you for your understanding.
            </p>
          </div>
        </div>

        {/* Section Heading: How to Delete Your Account */}
        <div className="text-center mb-10">
          <h2 className="font-jost text-2xl md:text-3xl text-[#2c1f18] font-light">
            <span className="font-burgues text-[50px] inline-block mr-1">H</span>
            ow to Delete Your Account
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c19e6e] to-transparent mx-auto mt-2" />
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-6 md:space-y-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative p-6 md:p-8 bg-[#fffdfa] border border-[#e8dcc8] rounded-xl transition-all duration-300 hover:shadow-md hover:border-[#d1b19a]"
            >
              <div className="absolute inset-[5px] border border-dashed border-[#d1b19a] rounded-lg pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 md:gap-6">
                {/* Step Badge */}
                <div className="w-9 h-9 rounded-full bg-[#f4c3c0]/50 border border-[#d1b19a]/60 flex items-center justify-center shrink-0 text-[#5a4d41] font-jost text-sm font-medium">
                  {item.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-jost font-normal text-lg md:text-xl text-[#2c1f18] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#6b5a4e] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-16 text-center bg-[#fffdfa] border border-[#e8dcc8] p-8 rounded-xl relative overflow-hidden">
          <div className="absolute inset-[5px] border border-dashed border-[#d1b19a] rounded-lg pointer-events-none opacity-30" />
          <div className="relative z-10">
            <h3 className="font-jost font-light text-2xl text-[#2c1f18] mb-2">
              <span className="font-burgues text-[45px] inline-block mr-1">N</span>
              eed Help With Account Deletion?
            </h3>
            <p className="font-jost font-light text-sm text-[#6b5a4e] mb-6">
              If you are facing issues deleting your account or need assistance from our team, please reach out to us.
            </p>
            <a
              href="mailto:info@wishesindia.com"
              className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[11px] font-medium tracking-[0.18em] px-8 py-3.5 rounded-sm transition-colors duration-300"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletionPage;
