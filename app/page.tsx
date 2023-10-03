import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { makeData } from '@/lib/makeData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

async function getData() {
  const res = await makeData();

  return res;
}

export default async function PageIndex() {
  const roles = await getData();

  return (
    <main className="px-24 py-4">
      <h1 className="flex items-center justify-center mb-6 text-3xl font-bold">役職リスト<span className="ml-1 text-sm font-normal">(総役職数: {roles.length})</span></h1>
      <div className="flex flex-wrap gap-2">
      {roles.map(({ id, name, iconUrl, oneline, side }) => (
        <Link key={id} href={`/role/${id}`}>
          <Card className="w-[300px] hover:bg-gray-50 transition duration-300 ease-out cursor-pointer">
            <CardContent className="p-0">
              <HoverCard>
                <HoverCardTrigger asChild className="p-3">
                  <div className="flex items-center justify-start space-x-3">
                    <Avatar className="object-cover object-center w-16 h-16 rounded-none">
                      <AvatarImage src={iconUrl} />
                      <AvatarFallback>{id}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="space-y-1">
                        <h4 className="text-2xl font-bold">{name}</h4>
                      </div>
                      <Badge variant={side} />
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-90">
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-bold">{name} <span className='text-xs font-thin text-gray-400'>——</span> <span className="text-sm">{id}</span></h4>
                    <p className="text-base leading-relaxed whitespace-pre-line">
                      {oneline}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
        </Link>
      ))}
      </div>
    </main>
  );
}
