import Image from "next/image";

export default function Events() {
  return (
    <>
      <div className="relative w-full h-[100vh] min-h-[1024px] items-center justify-between text-sm bg-forest">
        <div className="text-center mt-[100px] p-5 max-w-[1024px] mx-auto">
          <h1 className="text-3xl md:text-6xl text-white mb-5">
            Check Out Our Upcoming Events!
          </h1>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="inline-block"
          ></iframe>
        </div>
      </div>
    </>
  );
}
