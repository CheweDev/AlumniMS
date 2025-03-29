const About = () => {
  return (
    <div className="w-full tracking-wider text-lg">
      {/* Core Values Section */}
      <div className="bg-green-900 text-white py-20 px-20">
        <h2 className="text-3xl font-bold">CORE VALUES</h2>
        <p className="text-yellow-500 font-bold">
          <span className="text-white">C</span>ompetence,
          <span className="text-white"> S</span>ervice and
          <span className="text-white"> U</span>prightness
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 py-15 flex px-20">
        <div className="w-1/4">
          <h2 className="text-3xl font-bold text-green-900">MISSION</h2>
        </div>
        <div className="w-3/4">
          <p className="text-gray-800">
            As a transformative university, CSU is a responsible steward of
            problem-solvers and value creators who are driven to create a
            sustainable future for the region, the nation, and beyond
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-100 py-15 px-20 flex border-t border-gray-300">
        <div className="w-1/4">
          <h2 className="text-3xl font-bold text-green-900">VISION</h2>
        </div>
        <div className="w-3/4">
          <p>
            A socially-engaged digital, innovation, and entrepreneurial
            university excelling globally in science, engineering, and the arts
            by 2028
          </p>
        </div>
      </div>

      {/* Quality Objectives Section */}
      <div className="bg-gray-100 py-4 px-20 flex border-t border-gray-300">
        <div className="w-1/4">
          <h2 className="text-3xl font-bold text-green-900">
            QUALITY
            <br />
            OBJECTIVES
          </h2>
        </div>
        <div className="w-3/4">
          <ol className="list-decimal pl-5 space-y-2 text-gray-800">
            <li>
              Strengthen the professional and social networking between CSU and
              Caraga State University Alumni Association Incorporated (CSUAAI)
              board of trustees, officers and alumni through the following
              annual activities in accordance with the constitution and bylaws
              of the CSUAAI:
              <ol className="list-decimal pl-8 mt-2">
                <li>Annual Alumni Homecoming</li>
                <li>Annual Alumni Homecoming and fellowship</li>
              </ol>
            </li>
            <li className="mt-2">
              Ensure the proper, reliable, effective communication channels and
              correct processes in place every academic year to maintain the
              good relationship of the office and CSUAAI board of trustees for
              mutual benefits of the projects.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
