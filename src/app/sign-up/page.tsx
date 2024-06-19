import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full">
      <button className="flex gap-3 items-center border py-3 px-5 hover:bg-slate-100 transition-all rounded-full">
        <FcGoogle size={30} />
        <span className="text-lg font-medium">Sign up with Google</span>
      </button>

      <Link className="text-blue-500 underline" href="/sign-in">
        Sign in here
      </Link>
    </div>
  );
}
