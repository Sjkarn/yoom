import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
}

// // This function is necessary for static site generation
// export async function generateStaticParams() {
//   // Since this page doesn't use dynamic segments, return an empty array
//   return [];
// }