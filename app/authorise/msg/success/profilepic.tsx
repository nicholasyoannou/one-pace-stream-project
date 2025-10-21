"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePic() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);

  return (
    <div className="pt-3 object-center self-center">
      <Image
        loading="lazy"
        alt="Crunchyroll logo"
        src={`https://static.crunchyroll.com/assets/avatar/170x170/${session?.user.data.avatar}`}
        width={58}
        height={58}
        className="object-contain rounded-full object-center w-[58px] overflow-hidden self-center max-w-full mt-9"
      />
    </div>
  );
}
