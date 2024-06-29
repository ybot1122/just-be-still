import Image from "next/image";

export default function Events() {
  return (
    <>
      <div className="relative w-full h-[100vh] items-center justify-between text-sm bg-forest">
        <div className="text-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  );
}
