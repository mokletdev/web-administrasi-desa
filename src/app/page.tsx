import { getServerSession } from "@/lib/next-auth";
import { redirect } from "next/navigation";

export default async function Root() {
  const session = await getServerSession();

  if (!session?.user) {
    return redirect("/auth/login");
  }

  return redirect(session.user.role === "CITIZEN" ? "/dashboard" : "/admin");
}
