import { Link } from "@/components/ui/link";

export default async function PageQA() {
  return (
    <main className="px-24 py-4">
      <h1 className="flex items-center justify-center mb-4 text-3xl font-bold">基本ルール</h1>
      <div className="flex flex-col items-center gap-2">
        <Link title="参考:【初心者向け解説動画】│FEIGNってどんなゲームなの？" href="https://youtu.be/ZDU5EzbIp3w?si=pANBboaxXp8BwvnW&t=50"></Link>
        <p>ほか未実装</p>
      </div>
    </main>
  );
}
