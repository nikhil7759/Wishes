import React, { useState } from 'react';

const BulkOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
    alert('Thank you for your inquiry. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-[#f8f0e5] pt-10 pb-20 font-jost">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center mb-16">
        <h1 className="text-3xl md:text-5xl text-[#2b4c3b] mb-4 tracking-wide uppercase">
          Celebrate Every Occasion with Elegance
        </h1>
        <p className="text-base md:text-lg text-gray-700 font-light max-w-3xl mx-auto mb-10">
          At WishesIndia, we believe that every celebration deserves a touch of sweetness and sophistication. 
          Perfect for corporate gifting, weddings, and special events.
        </p>
        
        {/* How it works simple text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-[#2b4c3b]">
          <div className="p-4 border border-[#d1b19a] rounded-lg bg-white/50">
            <h3 className="font-medium mb-2">1. Share Your Requirement</h3>
          </div>
          <div className="p-4 border border-[#d1b19a] rounded-lg bg-white/50">
            <h3 className="font-medium mb-2">2. Personalized Curation</h3>
          </div>
          <div className="p-4 border border-[#d1b19a] rounded-lg bg-white/50">
            <h3 className="font-medium mb-2">3. Approval &amp; Production</h3>
          </div>
          <div className="p-4 border border-[#d1b19a] rounded-lg bg-white/50">
            <h3 className="font-medium mb-2">4. Delivery &amp; Delight</h3>
          </div>
        </div>
      </div>

      {/* Form Section Split Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-start bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#d1b19a]/30">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-5/12">
            <h2 className="text-2xl md:text-4xl text-[#2b4c3b] mb-6 tracking-wide leading-tight">
              Let’s Craft Something Memorable Together
            </h2>
            <p className="text-gray-600 font-light text-lg mb-6 leading-relaxed">
              From corporate gifts to wedding hampers, WishesIndia crafts unforgettable gifting experiences. 
              Tell us your vision — we’ll handle everything from curation to packaging with elegance and care.
            </p>
            <div className="hidden md:block">
               <img src="/Images/collection1.jpg" alt="Bulk Gifting" className="w-full h-64 object-cover rounded-xl mt-8 shadow-sm" />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-7/12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-gray-700 tracking-wide uppercase">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 bg-[#f8f0e5]/50 border border-[#d1b19a] rounded focus:outline-none focus:ring-1 focus:ring-[#2b4c3b] transition-all text-black"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-gray-700 tracking-wide uppercase">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-[#f8f0e5]/50 border border-[#d1b19a] rounded focus:outline-none focus:ring-1 focus:ring-[#2b4c3b] transition-all text-black"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-gray-700 tracking-wide uppercase">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-[#f8f0e5]/50 border border-[#d1b19a] rounded focus:outline-none focus:ring-1 focus:ring-[#2b4c3b] transition-all text-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-gray-700 tracking-wide uppercase">Comment</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Put your Comment"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#f8f0e5]/50 border border-[#d1b19a] rounded focus:outline-none focus:ring-1 focus:ring-[#2b4c3b] transition-all resize-none text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="self-start mt-2 bg-[#2b4c3b] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#1f372a] transition-colors rounded shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BulkOrder;
