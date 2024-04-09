"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const route = useRouter();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

 const onSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      setErrorMessage("Invalid credentials. Please try again.");
    }
    else{
      route.push('/');
    }
 };

 return (
    <div className="flex flex-col justify-center items-center h-screen  gap-1  ">
      <div className="px-7 py-4  bg-white rounded-md flex flex-col gap-2 border-black border shadow-2xl">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-gray-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-gray-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0"
            required
          />
          <Link href={"/auth/registrate"} className="hover:text-gray-400 text-black cursor-pointer">
            Registration
          </Link>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-blue-700 px-6 py-3 disabled:bg-gray-500 block-primary rounded-md cursor-pointer text-white mt-4 font-bold w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
 );
};

export default LoginPage;
