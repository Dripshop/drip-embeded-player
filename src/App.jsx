import { useState } from "react";

const baseUrl = "https://www.feat-dinesh-1.dripshop-feature-branch.live";
const streams = [
  {
    slug: "17d4117f-f478-4ef0-81a7-e40ecf386146",
    title: "Sameep going live",
    date: "Jul 20 at 4:30pm",
    image: "/sameep-stream.jpg",
  },
  {
    slug: "embeded-live-stream",
    title: "Ashwin going live",
    date: "Jul 15 at 5:00pm",
    image: "/pokemon.jpg",
  },
  {
    slug: "10928251-15ae-4db6-9f07-776b803a19cb",
    title: "Niraj going live",
    date: "Jul 25 at 6:30pm",
    image: "/funko.jpg",
  },
];

function StreamCard({ stream, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <div
          className="aspect-video bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('${stream.image}')`,
          }}
        ></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{stream.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{stream.date}</p>
      </div>
    </div>
  );
}

function App() {
  const [activeStream, setActiveStream] = useState(streams[0].slug);

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-8">
        <div className="relative bg-gray-800 aspect-video">
          <iframe
            id="drip-player-1"
            type="text/html"
            width="100%"
            height="100%"
            name="Drip - Shop Live"
            src={`${baseUrl}/stream-embedded/${activeStream}`}
            frameBorder="0"
            allowFullScreen
            allowPaymentRequest
          ></iframe>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-6">More streams</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {streams.map((stream) => {
            if (stream.slug === activeStream) {
              return null; // Skip the active stream
            }

            return (
              <StreamCard
                key={stream.slug}
                stream={stream}
                onClick={() => setActiveStream(stream.slug)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
