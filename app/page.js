import Image from "next/image";
import ObjectDetection from "./components/object-detection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="graditent-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Thief detection alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}
