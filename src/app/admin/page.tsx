import { getServerSession } from "@/lib/next-auth";

export default async function Admin() {
  const session = await getServerSession();

  return (
    <>
      <h1 className="font-normal">
        Selamat Datang, <span className="font-bold">{session?.user?.name}</span>
      </h1>
    </>
  );
}
