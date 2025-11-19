"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import UserCard from "../components/UserCard";
import Link from "next/link";
const router = useRouter();

useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    if (!data.session) router.push("/");
  });
}, []);

export default function Dashboard() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const user = (await supabase.auth.getUser()).data.user;

    if (!user) return;

    const { data, error } = await supabase
      .from("tracked_users")
      .select("*")
      .eq("owner", user.id);

    if (!error && data) setUsers(data);
  };

  return (
    <main className="min-h-screen bg-[#111] px-5 py-6">


      {/* Header */}
      <h1 className="text-white text-3xl font-bold mb-6">Your Creators</h1>

      {/* Add Button */}
      <Link href="/add-user">
        <button className="w-full py-4 bg-white text-black font-semibold rounded-xl mb-6">
          + Add TikTok User
        </button>
      </Link>

      {/* User List */}
      <div className="grid gap-4">
        {users.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">No users added yet.</p>
        ) : (
          users.map((u) => <UserCard key={u.id} user={u} />)
        )}
      </div>
    </main>
  );
}
