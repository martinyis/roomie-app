import Image from "next/image";
import About from "./componentes/About";
import NavBar from "./componentes/NavBar";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <div className="max-w-[1440px] mx-auto"></div>
    </main>
  );
}
