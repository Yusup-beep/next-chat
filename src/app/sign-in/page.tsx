"use client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  const router = useRouter();
  function handleClick() {
    router.push(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/google/callback");
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full">
      <button
        onClick={() => handleClick()}
        className="flex gap-3 items-center border py-3 px-5 hover:bg-slate-100 transition-all rounded-full"
      >
        <FcGoogle size={30} />
        <span className="text-lg font-medium">Sign in with Google</span>
      </button>
    </div>
  );
}
