import { Send } from "lucide-react";

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="border-b p-3">
        <div className="flex gap-3 items-center">
          <img
            className="h-10 w-10 rounded-full overflow-hidden object-cover ring-1 ring-offset-2"
            src="/next.svg"
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="font-medium text-lg">Yusup Yedyyew</span>

            <div className="flex items-center gap-1">
              <div className="animate-pulse h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full p-3 mt-3 text-sm">
        <span className="bg-blue-600 rounded-lg p-3 mb-3 text-white float-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          perferendis praesentium corrupti quaerat aliquid illo.
        </span>

        <span className="bg-slate-500 rounded-lg p-3 text-white float-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          perferendis praesentium corrupti quaerat aliquid illo.
        </span>
      </div>

      <div className="flex gap-3 m-3">
        <input
          className="p-3 border rounded-lg w-full outline-none  focus:outline-slate-300 transition-all"
          placeholder="Type here"
        />
        <button className="p-3 border bg-blue-600 text-white rounded-lg outline-none focus:ring-2 ring-offset-2 transition-all">
          <Send />
        </button>
      </div>
    </div>
  );
}
