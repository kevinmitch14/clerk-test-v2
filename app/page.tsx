import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  console.log(userId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello</p>
    </main>
  );
}
