import type { Metadata } from "next";
import { getSession } from "@/actions/session";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getSession();

  if (!session) return redirect('/login');

  return (
    <div>
      {children}
    </div>
  );
}
