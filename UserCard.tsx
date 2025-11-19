import Image from "next/image";
import LiveBadge from "./LiveBadge";

type TrackedUser = {
  id: string;
  username: string;
  is_live: boolean;
};

export default function UserCard({ user }: { user: TrackedUser }) {
  return (
    <div className="flex items-center p-4 bg-neutral-900 rounded-2xl shadow-xl">
      <div className="relative">
        <Image
          src={`https://unavatar.io/tiktok/${user.username}`}
          width={62}
          height={62}
          alt="profile"
          className="rounded-full border border-gray-700"
        />

        {user.is_live && <LiveBadge />}
      </div>

      <div className="ml-4">
        <p className="text-white font-semibold text-lg">@{user.username}</p>
        <p className="text-gray-400 text-sm">
          {user.is_live ? "🔴 Live now" : "Offline"}
        </p>
      </div>
    </div>
  );
}
