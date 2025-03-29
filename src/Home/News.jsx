import Navbar from "./Navbar";

// sample data
const announcements = [
  {
    id: 1,
    title: "NEMSU taps CSU for Information Systems Development",
    date: "January 12, 2024",
    image: "card-img.png",
  },
  {
    id: 2,
    title:
      "CSU land's 31st spot in uniRank's top universities in PH, 1st in Caraga",
    date: "January 3, 2024",
    image: "card-img.png",
  },
  {
    id: 3,
    title: "CSU Alumni advocate forests bathing, tree and trash picking",
    date: "May 23, 2017",
    image: "card-img.png",
  },
  {
    id: 4,
    title: "CSU Alumni advocate forests bathing, tree and trash picking",
    date: "May 23, 2017",
    image: "card-img.png",
  },
  {
    id: 5,
    title: "CSU Alumni advocate forests bathing, tree and trash picking",
    date: "May 23, 2017",
    image: "card-img.png",
  },
  {
    id: 6,
    title: "CSU Alumni advocate forests bathing, tree and trash picking",
    date: "May 23, 2017",
    image: "card-img.png",
  },
];

const News = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-5 mt-5">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="card bg-base-100 w-full shadow-lg"
          >
            <figure>
              <img
                src={announcement.image || "/placeholder.svg"}
                alt={announcement.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-green-900 tracking-wide font-serif">
                {announcement.title}
              </h2>
              <p className="text-gray-500 text-sm">{announcement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
