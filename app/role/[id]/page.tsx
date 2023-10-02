import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { makeData } from '@/lib/makeData';

async function getData({ id }: { id: string }) {
  const roles = await makeData();

  const role = roles.find((r) => r.id === id);

  if (!role) throw new Error('role not found');

  return role;
}

export default async function PageRoleDetail({
  params: { id: presentId },
}: {
  params: { id: string };
}) {
  const role = await getData({ id: presentId });

  if (!role)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="text-3xl font-bold">指定された役職が存在しません</p>
      </main>
    );

  const { id, name, description, iconUrl, side } = role;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-between space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={iconUrl} />
          <AvatarFallback>{id}</AvatarFallback>
        </Avatar>
        <div>
          <div className="space-y-2">
            <h4 className="text-3xl font-bold">{name}</h4>
          </div>
          <Badge variant={side} className="mb-4 mt-2" />
          <p className="text-base whitespace-pre-line leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </main>
  );
}
