'use client'
import OnlineStatus from "@/components/onlineStatus";
import Songs from "@/components/Songs";

export default function Home() {
  return (
    <div className=" text-2xl text-center">
      <OnlineStatus/>

      <div>
        <Songs/>
      </div>
    </div>
  );
}
