import { Link } from "@/components/ui/link";

export default async function PageQA() {
  return (
    <main className="px-24 py-4">
      <h1 className="flex items-center justify-center mb-4 text-3xl font-bold">引用元・情報ソースなど</h1>
      <div className="flex flex-col items-center gap-2">
        <Link title="【保存版】FEIGN（フェイン） おバカ人狼 3陣営 17役職を徹底解説" href="https://www.well-boardgame.com/feign-role/" />
        <Link title="気軽に楽しめる人狼withバカ" href="https://note.com/masajiro999/n/n2cf74c5bce9a" />
        <Link title="Fundamental Guide of the Feign" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2640380608" />
        <Link title="【Feign】17種類の役職一覧まとめ【おバカ人狼】" href="https://science-everyday.com/feign-position" />
      </div>
    </main>
  );
}
