import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}

// // This function is necessary for static site generation
// export async function generateStaticParams() {
//   // Since this page doesn't use dynamic segments, return an empty array
//   return [];
// }