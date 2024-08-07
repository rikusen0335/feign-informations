import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Role, makeData } from '@/lib/makeData';
import NextLink from 'next/link';

async function getData({ id }: { id: string }) {
  const roles = await makeData();

  const role = roles.find((r) => r.id === id);

  if (!role) throw new Error('role not found');

  const orders = roles.filter(r => r.order > 0 && role.id !== r.id && role.order > 0)
  const beforeMove = orders.filter(r => role.order > r.order)
  const afterMove = orders.filter(r => role.order < r.order)
  const sameMove = orders.filter(r => role.order === r.order)

  return { role, beforeMove, afterMove, sameMove };
}

const MoveRole = ({ id, name, iconUrl, side, oneline}: Role) => (
  <HoverCard key={id} openDelay={500}>
    <HoverCardTrigger asChild>
      <NextLink href={`/role/${id}`}>
        <div className="flex items-center justify-start space-x-2">
          <div>
            <div className="space-y-1">
              <h4 className="text-base hover:underline">{name}</h4>
            </div>
          </div>
        </div>
      </NextLink>
    </HoverCardTrigger>
    <HoverCardContent className="w-90">
      <div className="flex mb-3 space-x-2">
        <Avatar className="w-12 h-12 rounded-none">
          <AvatarImage src={iconUrl} />
          <AvatarFallback>{id}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
            <h4 className="flex items-center gap-1 text-base font-bold">{name} <span className='text-xs font-thin text-gray-400'>——</span> <span className="text-md">{id}</span></h4>
          <Badge variant={side} />
        </div>
      </div>
      <p className="text-base leading-relaxed whitespace-pre-line">
        {oneline}
      </p>
    </HoverCardContent>
  </HoverCard>
)

export default async function PageRoleDetail({
  params: { id: presentId },
}: {
  params: { id: string };
}) {
  const { role, beforeMove, afterMove, sameMove } = await getData({ id: presentId });

  if (!role)
    return (
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <p className="text-3xl font-bold">指定された役職が存在しません</p>
      </main>
    );

  const { id, name, description, iconUrl, side } = role;

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-24 py-4">
      <div className="flex justify-between space-x-4">
        <Avatar className="w-16 h-16 rounded-none">
          <AvatarImage src={iconUrl} />
          <AvatarFallback>{id}</AvatarFallback>
        </Avatar>
        <div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-3 text-3xl font-bold">{name} <span className='mx-[2px] font-thin text-xs text-gray-400'>———</span> <span className="text-2xl">{id}</span></h4>
          </div>
          <Badge variant={side} className="mt-2 mb-4" />
          <div className="flex items-center mb-1">
            <p className="mr-2 text-lg font-semibold">先に動ける役職:</p>
            <div className='flex flex-wrap space-x-3'>
              {beforeMove.map((role) => (
                <MoveRole key={id} {...role} />
              ))}
              {beforeMove.length === 0 && (
                <p className="text-base leading-relaxed whitespace-pre-line text-neutral-400">
                  なし
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-1">
            <p className="mr-2 text-lg font-semibold">後に動く役職:</p>
            <div className='flex flex-wrap space-x-3'>
              {afterMove.map((role) => (
                <MoveRole key={id} {...role} />
              ))}
              {afterMove.length === 0 && (
                <p className="text-base leading-relaxed whitespace-pre-line text-neutral-400">
                  なし
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-5">
            <p className="mr-2 text-lg font-semibold">同時に動く役職:</p>
            <div className='flex flex-wrap space-x-3'>
              {sameMove.map((role) => (
                <MoveRole key={id} {...role} />
              ))}
              {sameMove.length === 0 && (
                <p className="text-base leading-relaxed whitespace-pre-line text-neutral-400">
                  なし
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center mb-5">
            <p className="mr-2 text-lg font-semibold">同時に動く役職:</p>
            <div className='flex flex-wrap space-x-3'>
              {sameMove.map((role) => (
                <MoveRole key={id} {...role} />
              ))}
              {sameMove.length === 0 && (
                <p className="text-base leading-relaxed whitespace-pre-line text-neutral-400">
                  なし
                </p>
              )}
            </div>
          </div>
          <p className="text-base leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </main>
  );
}
