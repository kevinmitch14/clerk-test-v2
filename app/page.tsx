import { SignInButton, SignOutButton, auth } from "@clerk/nextjs";

export default function Home() {
  const userId = auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello</p>
      <pre>{JSON.stringify(userId, null, 2)}</pre>
      <SignInButton>Sign In</SignInButton>
      <SignOutButton>Sign Out</SignOutButton>
    </main>
  );
}
