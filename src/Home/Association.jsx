import React, { useState } from "react";

const Association = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] overflow-hidden font-serif">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('img-overlay.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900/80 to-green-900/40"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-lg tracking-wide">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-5">
              ASSOCIATION
            </h1>
            <p className="text-white text-sm md:text-base mb-5">
              Alumni Association are under your former faculty, college or
              institution where you can participate in and get news directly.
            </p>
          </div>
        </div>
      </div>

      {/* Colleges Section */}
      <div className="bg-white py-12 font-serif">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 px-4 mb-8 flex flex-col items-center">
              <div
                className="bg-green-50 rounded-full p-1 mb-2 border-5 border-green-800 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={toggleModal}
              >
                <img
                  src="logo.png"
                  alt="Alumni Association"
                  className="w-52 h-52 object-contain rounded-full"
                />
              </div>
              <p className="text-center text-green-800 font-bold text-xl">
                ALUMNI ASSOCIATION
              </p>
            </div>
            <div className="w-full md:w-3/4 px-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* College of Agriculture and Agri-Industries */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="https://placehold.co/600x400"
                      alt="College of Agriculture and Agri-Industries"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Agriculture
                    </p>
                    <p className="text-green-700 font-medium">
                      and Agri-Industries
                    </p>
                  </div>
                </div>

                {/* College of Education */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="https://placehold.co/600x400"
                      alt="College of Education"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Education
                    </p>
                  </div>
                </div>

                {/* College of Engineering and Geosciences */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="cegs.png"
                      alt="College of Engineering and Geosciences"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Engineering
                    </p>
                    <p className="text-green-700 font-medium">
                      and Geosciences
                    </p>
                  </div>
                </div>

                {/* College of Computing and Information Sciences */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="ccis.png"
                      alt="College of Computing and Information Sciences"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Computing
                    </p>
                    <p className="text-green-700 font-medium">
                      and Information Sciences
                    </p>
                  </div>
                </div>

                {/* College of Forestry and Environmental Sciences */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="cofes.png"
                      alt="College of Forestry and Environmental Sciences"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Forestry
                    </p>
                    <p className="text-green-700 font-medium">
                      and Environmental Sciences
                    </p>
                  </div>
                </div>

                {/* College of Humanities and Social Sciences */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="chass.png"
                      alt="College of Humanities and Social Sciences"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Humanities
                    </p>
                    <p className="text-green-700 font-medium">
                      and Social Sciences
                    </p>
                  </div>
                </div>

                {/* College of Mathematics and Natural Sciences */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full p-1 mb-2 border-2 border-green-800">
                    <img
                      src="cmns.png"
                      alt="College of Mathematics and Natural Sciences"
                      className="w-32 h-32 object-contain rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-green-700 font-medium">
                      College of Mathematics
                    </p>
                    <p className="text-green-700 font-medium">
                      and Natural Sciences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-serif">
          <div className="bg-gray-50 rounded-lg w-full max-w-4xl relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full hover:text-white z-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6">
              <div clasName="relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <img
                    src="logo.png"
                    alt="University Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-10">
                    <div className="w-32 h-32 bg-gray-500 rounded-full mb-2 overflow-hidden">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="President"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-green-800 font-bold text-lg">
                        Glaicel Araneta
                      </p>
                      <p className="text-green-800">Leader</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">
                          Marc Gerasmio
                        </p>
                        <p className="text-green-800">Member</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">
                          John Elro Estoque
                        </p>
                        <p className="text-green-800">Member</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">
                          Marion Jotohot
                        </p>
                        <p className="text-green-800">Member</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">
                          Joralyn Cantero
                        </p>
                        <p className="text-green-800">Member</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">
                          Fermin Flauta
                        </p>
                        <p className="text-green-800">Member</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">
                          Vevencio Gupana
                        </p>
                        <p className="text-green-800">Member</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">TBA</p>
                        <p className="text-green-800">Position</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-500 rounded-full mb-2 overflow-hidden">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          alt="Member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-green-800 font-bold text-lg">TBA</p>
                        <p className="text-green-800">Position</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Association;
