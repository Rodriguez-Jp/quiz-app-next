import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <section className="max-w-3xl mx-auto text-center ">
        <h1 className="text-4xl mt-20 font-semibold text-[#264653]">
          Welcome to your favorite Quiz Page!
        </h1>
        <p className="mt-5 text-lg">
          Here you will find tons of quizes to solve, all of them about
          different categories to avoid you get bored 🥱
        </p>
        <Link
          href={"/quizes"}
          className="p-2 bg-[#254653] rounded-lg text-white mt-10 w-1/3"
        >
          Play Now!
        </Link>
      </section>
    </main>
  );
}
