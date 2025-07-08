import { useMemo, useState } from "react";
import MainLayout from "./MainLayout";
import Button from "./components/Button";
import Container from "./components/Container";
import { useAtomValue } from "jotai";
import { currentUserIdAtom } from "./state";
import { DRIP_BASE_URL, UserAccounts } from "./config";
import CheckoutPopup from "./components/Checkout";

type Stream = {
  slug: string;
  title: string;
  date: string;
  image: string;
};
const streams: Stream[] = [
  {
    slug: "walmart-stream-70725-meha",
    title: "Sameep going live",
    date: "Jul 20 at 4:30pm",
    image: "/sameep-stream.jpg",
  },
  {
    slug: "embedded-stream",
    title: "Ashwin going live",
    date: "Jul 15 at 5:00pm",
    image: "/pokemon.jpg",
  },
  {
    slug: "5b1eb9c4-39a3-4a8a-a1ac-f689dd6d4e1d",
    title: "Niraj going live",
    date: "Jul 25 at 6:30pm",
    image: "/funko.jpg",
  },
];

function StreamCard({
  stream,
  onClick,
}: {
  stream: Stream;
  onClick: () => void;
}) {
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
  const currentUserId = useAtomValue(currentUserIdAtom);
  const currentUser = useMemo(
    () => UserAccounts.find((user) => user.id === currentUserId),
    [currentUserId]
  );
  const [activeStream, setActiveStream] = useState<Stream>(streams[0]);
  const iframeUrl = `${DRIP_BASE_URL}/stream-embedded/${activeStream.slug}`;
  const redirectUrl = `${DRIP_BASE_URL}/redirect?continue=${encodeURIComponent(
    iframeUrl
  )}&token=${currentUser?.token}&reset_auth=0`;

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
            src={redirectUrl}
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
          <p className="font-normal text-md">
            We’d love to hear what you think!
          </p>
          <Button>Give feedback</Button>
        </div>
      </Container>
      <CheckoutPopup />
    </MainLayout>
  );
}

export default App;
