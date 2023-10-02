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
    <main className="flex flex-wrap gap-2 p-24">
      {roles.map(({ id, name, iconUrl, oneline, side }) => (
        <Link key={id} href={`/role/${id}`}>
          <Card className="w-[300px] hover:bg-gray-50 transition duration-300 ease-out cursor-pointer">
            <CardContent className="p-0">
              <HoverCard>
                <HoverCardTrigger asChild className="p-3">
                  <div className="flex justify-start items-center space-x-2">
                    <Avatar className="object-cover object-center h-16 w-16">
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
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{name}</h4>
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {oneline}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardContent>
          </Card>
        </Link>
      ))}
    </main>
  );
}
