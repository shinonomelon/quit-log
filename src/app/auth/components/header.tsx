import Image from 'next/image';
import Link from 'next/link';

export const Header = ({ type }: { type: 'signin' | 'signup' }) => {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="やめログ"
          width={32}
          height={32}
          className="text-green-500"
        />
        <span className="text-xl font-bold">やめログ</span>
      </Link>
      {type === 'signin' ? (
        <Link
          href={{
            pathname: '/auth',
            query: { type: 'signup' }
          }}
          className="rounded-lg p-2 font-bold text-gray-600 transition-colors duration-150 ease-in hover:bg-white hover:text-gray-900"
        >
          はじめての方はこちら →
        </Link>
      ) : (
        <Link
          href={{
            pathname: '/auth',
            query: { type: 'signin' }
          }}
          className="rounded-lg p-2 font-bold text-gray-600 transition-colors duration-150 ease-in hover:bg-white hover:text-gray-900"
        >
          アカウントをお持ちの方 →
        </Link>
      )}
    </header>
  );
};
