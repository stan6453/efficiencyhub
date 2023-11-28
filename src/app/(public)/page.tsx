import Image from 'next/image'

export default async function Home() {

  const data = await fetch('https://efficiencyhub-ktosok6il-stan6453.vercel.app/api/handlecreateuser', {
    method: 'POST',
    body: JSON.stringify({ message: 'testing' }),
  });

  console.log(await data.text());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        hi
      </div>
    </main>
  )
}
