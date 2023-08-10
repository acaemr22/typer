import WordList from "@/components/WordList";
import WordInput from "@/components/WordInput";
import Stats from "@/components/Stats";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-y-10">
      <secton>
        <h1 className="text-center font-bold text-5xl">Typing Test</h1>
      </secton>
      <section className="px-24">
        <Stats />
        <WordList />
        <WordInput />
      </section>
    </main>
  );
}
