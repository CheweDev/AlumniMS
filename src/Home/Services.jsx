const Services = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 mb-4">
      {/* ALUMNI CARD */}
      <div className="flex bg-gray-50 shadow-sm rounded text-xl border">
        <div className="w-56 bg-gray-200 p-4 flex flex-col items-center justify-center border-r">
          <div className="flex items-center justify-center mb-2">
            <img src="id-card.png" alt="" />
          </div>
          <span className="text-center text-green-800 font-bold font-serif">
            REQUEST ALUMNI CARD
          </span>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4 eading-tight">
            Apply for yor very own CSUan Alumni card online. You can choose to
            apply for a lifetime or annual card.
          </p>
          <p>
            For requirements, please refer{" "}
            <a href="#" className="text-green-800 font-bold underline">
              here.
            </a>
          </p>
        </div>
      </div>

      {/* YEAR BOOK */}
      <div className="flex bg-gray-50 shadow-sm rounded text-xl border">
        <div className="w-56 bg-gray-200 p-4 flex flex-col items-center justify-center border-r">
          <div className="flex items-center justify-center mb-2">
            <img src="book.png" alt="" />
          </div>
          <span className="text-center text-green-900 font-bold font-serif">
            REQUEST YEAR BOOK
          </span>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4 leading-tight">
            Get a copy of your yearbook just register and login here in our
            website and apply for a yearbook claiming.
          </p>
          <p>
            For requirements, please refer{" "}
            <a href="#" className="text-green-800 font-bold underline">
              here.
            </a>
          </p>
        </div>
      </div>

      {/* TOR */}
      <div className="flex bg-gray-50 shadow-sm text-xl border">
        <div className="w-56 bg-gray-200 p-4 flex flex-col items-center justify-center border-r">
          <div className="flex items-center justify-center">
            <img src="tor.png" alt="" className="h-42" />
          </div>
          <span className="text-center text-green-800 font-bold font-serif">
            REQUEST TOR
          </span>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4 leading-tight">
            Get a copy of your TOR just register and login here in our website
            and request a copy of your transcript of record.
          </p>
          <p>
            For requirements, please refer{" "}
            <a href="#" className="text-green-800 font-bold underline">
              here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
