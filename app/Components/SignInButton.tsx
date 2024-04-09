"use client"
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';


const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className='flex justify-between w-[15%]  '>
        <div className='ml-3'>
          <p className='text-2xl text-slate-400'>
            <Link href='/UserCabinet'>
              {session.user.username}
            </Link>
          </p>
        </div>
        <div>
          <Button className='rounded-full text-center items-center bg-black cursor-pointer  text-white text-xl p-2 hover:opacity-75 '
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Button className='rounded-full text-center items-center bg-black cursor-pointer  text-white text-xl p-2 hover:opacity-75 '
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  );
};

export default SignInButton;
