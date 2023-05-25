import Link from "next/link";

export default function Home() {
  return (
    <main className='container pt-10 mx-auto space-y-10'>
      <h1 className='text-3xl'>Tailwind Rebuilds</h1>
      <ul>
        <li>
          <Link href='/github' className='text-blue-500 hover:underline'>
            GitHub
          </Link>
        </li>
      </ul>
    </main>
  );
}
