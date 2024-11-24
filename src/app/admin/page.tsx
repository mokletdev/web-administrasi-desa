import { getServerSession } from "@/lib/next-auth";
import { roleLevelMap } from "@/lib/utils";

export default async function Admin() {
  const session = await getServerSession();

  return (
    <>
      <div className="block">
        <h1 className="mb-2 font-normal">
          Selamat Datang,{" "}
          <span className="font-bold">{session?.user?.name}</span>
        </h1>
        <p>
          Anda masuk sebagai{" "}
          {roleLevelMap[session?.user?.role as keyof typeof roleLevelMap]}
        </p>
      </div>
    </>
  );
}
