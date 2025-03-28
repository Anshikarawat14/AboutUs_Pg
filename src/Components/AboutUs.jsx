export default function AboutUs() {
    return (
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-6">
        <div className="max-w-5xl bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 border border-pink-300">
          
          <h2 className="text-3xl font-extrabold text-pink-600 mb-4 text-center tracking-widest uppercase">
            About Us
          </h2>
          <p className="text-gray-700 text-base leading-relaxed text-center italic font-serif">
            Welcome to <span className="font-semibold text-pink-500">Dream Weddings</span>, where love meets elegance, and every detail is crafted with passion.  
            We are more than just wedding planners- we are dream weavers, storytellers, and experience creators.  
            From the first "Yes!" to the final "I Do," we make your wedding an enchanting journey to remember. 💍✨
          </p>
  
  
          <h3 className="text-xl font-semibold text-pink-600 mt-6 mb-2 underline decoration-wavy">
            Our Promise
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed font-serif">
            We believe that every love story is unique, and your wedding should be no exception.  
            Our team ensures that your big day is not just an event but a work of art, filled with magical moments, breathtaking décor, and unforgettable experiences.  
          </p>
  

          <h3 className="text-xl font-semibold text-pink-600 mt-6 mb-2 underline decoration-wavy">
            Why Choose Us?
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 font-serif ml-4">
            <li>💖 <strong>Personalized Planning:</strong> Every wedding is custom-designed to reflect your love story.</li>
            <li>🎨 <strong>Exquisite Décor & Styling:</strong> From floral extravagance to minimalistic elegance, we craft picture-perfect themes.</li>
            <li>📅 <strong>Seamless Execution:</strong> You enjoy your big day while we handle the logistics.</li>
            <li>🎭 <strong>Exclusive Vendor Partnerships:</strong> Access to the best venues, designers, caterers, and entertainers.</li>
            <li>🌟 <strong>Unmatched Attention to Detail:</strong> Every element is meticulously curated, ensuring perfection.</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mt-6 mb-2 underline decoration-wavy">
            Our Signature Services
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed font-serif">
            Whether you dream of a royal palace wedding, a serene beach ceremony, or a charming garden affair, we turn your imagination into reality.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-2 font-serif ml-4">
            <li>✨ <strong>Full Wedding Planning & Management:</strong> A stress-free, all-inclusive experience.</li>
            <li>💍 <strong>Luxury & Destination Weddings:</strong> Exotic locations, seamless execution.</li>
            <li>🎶 <strong>Entertainment & Special Effects:</strong> Fireworks, celebrity performances, and live bands.</li>
            <li>🍽️ <strong>Customized Catering:</strong>Curated menus that match your taste & theme.</li>
            <li>📸 <strong>Cinematic Photography & Videography:</strong> Capture every moment beautifully.</li>
            <li>🌸 <strong>Floral & Venue Styling:</strong> Elegant aesthetics that leave guests in awe.</li>
          </ul>

          <h3 className="text-xl font-semibold text-pink-600 mt-6 mb-2 underline decoration-wavy">
            How We Work
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed font-serif">
            At <strong>Dream Weddings</strong>, our process is smooth, structured, and stress-free:
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2 font-serif ml-4">
            <li>📞 <strong>Consultation & Vision Board:</strong> We understand your ideas and build a wedding blueprint.</li>
            <li>🎭 <strong>Theme, Venue & Vendor Selection:</strong> Handpicked options that match your dream wedding style.</li>
            <li>📋 <strong>Planning & Execution:</strong> Every detail, from invites to logistics, is taken care of.</li>
            <li>🎉 <strong>The Grand Celebration:</strong> Enjoy your big day while we ensure a flawless experience!</li>
          </ol>
  

          <div className="text-center mt-6">
            <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-pink-500 hover:to-pink-700 transition-all font-semibold tracking-wider hover:scale-110 transform">
              Let's Plan Your Wedding!
            </button>
          </div>
        </div>
      </div>
    );
  }
  