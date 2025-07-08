import { Share } from "lucide-react";
import { useState } from "react";
import MainLayout from "./MainLayout";
import Button from "./components/Button";
import Container from "./components/Container";

const baseUrl = "https://www.feat-dinesh-1.dripshop-feature-branch.live";
// const baseUrl = "http://localhost:3000"

type Stream = {
  slug: string;
  title: string;
  date: string;
  image: string;
};
const streams: Stream[] = [
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

function StreamCard({ stream, onClick }: { stream: Stream; onClick: () => void }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      role="button"
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
  const [activeStream, setActiveStream] = useState<Stream>(streams[0]);

  return (
    <MainLayout>
      {/* <Container className="bg-white py-6 flex items-center justify-between">
        <h1 className="text-black text-2xl font-semibold">
          {activeStream.title}
        </h1>
        <Button className="flex items-center gap-2">
          <Share size={16} /> Share
        </Button>
      </Container> */}
      <Container className="bg-[#f0f5ff] p-4">
        <div className="aspect-video w-[100%] mx-auto">
          <iframe
            id="drip-player-1"
            // @ts-ignore
            type="text/html"
            width="100%"
            height="100%"
            className="mx-auto rounded"
            name="Drip - Shop Live"
            src={`${baseUrl}/stream-embedded/${activeStream.slug}`}
            frameBorder="0"
            allowFullScreen
            allowPaymentRequest
          />
        </div>
      </Container>
      <Container className="my-8 pl-0 pr-4">
        <h2 className="text-2xl font-bold mb-6">More streams</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {streams.map((stream) => {
            if (stream.slug === activeStream.slug) {
              return null; // Skip the active stream
            }

            return (
              <StreamCard
                key={stream.slug}
                stream={stream}
                onClick={() => setActiveStream(stream)}
              />
            );
          })}
        </div>
      </Container>
      <Container className="bg-[#f0f5ff] py-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="font-normal text-md">We’d love to hear what you think!</p>
          <Button>Give feedback</Button>
        </div>
      </Container>
    </MainLayout>
  );
}

export default App;
