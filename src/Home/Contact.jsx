const ContactUs = () => {
  return (
    <div className="w-full bg-white px-4 md:px-8 overflow-hidden mb-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 space-y-10aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa relative py-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <img
              src="logo.png"
              alt="University Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-green-900 font-bold text-2xl tracking-wider">
              Address
            </h3>
            <p className="text-gray-700">
              Barangay Ampayon, Butuan City, Philippines
            </p>
          </div>
          <div className="relative z-10">
            <h3 className="text-green-900 font-bold text-2xl tracking-wider">
              Phone Number
            </h3>
            <p className="text-gray-700">09-123-456-789</p>
          </div>
          <div className="relative z-10">
            <h3 className="text-green-900 font-bold text-2xl tracking-wider">
              E-mail Address
            </h3>
            <p className="text-gray-700">csuaa.alumni@carsu.edu.ph</p>
          </div>
          <div className="relative z-10">
            <h3 className="text-green-900 font-bold text-2xl tracking-wider">
              Office Hours
            </h3>
            <p className="text-gray-700">
              Monday to Friday, 9:00 AM to 5:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 border rounded-md p-6">
          <h2 className="text-green-900 font-bold text-3xl mb-2 tracking-wider">
            CONTACT US
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or wishes about alumni association, we
            will definitely contact you and answer all your questions.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Year of Graduation"
                className="w-1/2 p-3 border border-gray-300 rounded-md bg-white"
              />
              <input
                type="text"
                placeholder="Course/Program"
                className="w-1/2 p-3 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 border bg-white border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-warning text-white font-bold py-3 rounded-md hover:bg-yellow-400 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
