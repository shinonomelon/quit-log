import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default async function Home() {
  return (
    <div className="container mx-auto px-4 pb-16 pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">
          日々の「やめたいこと」を
          <br />
          管理して
          <br />
          <span className="inline-flex items-center">
            持続可能な変化を
            <span className="ml-2 inline-block" role="img" aria-label="変化">
              🔄
            </span>
          </span>
        </h1>
        <Button
          variant="default"
          size="lg"
          className="rounded-xl bg-zinc-800 text-lg font-bold"
          asChild
        >
          <Link
            href={{
              pathname: '/auth',
              query: { type: 'signup' }
            }}
          >
            新規登録する
          </Link>
        </Button>
        <div className="mt-16 grid items-center gap-8 md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto md:h-[250px]">
            <Image
              src="/images/apps-notifications.svg"
              alt="習慣を記録する"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[250px]">
            <Image
              src="/images/mindfulness.svg"
              alt="進捗を確認する"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
