import WordList from "@/components/WordList";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-y-10">
      <secton>
        <h1 className="text-center font-bold text-5xl">Typing Test</h1>
      </secton>
      <section className="px-24">
        <WordList />
      </section>
    </main>
  );
}
