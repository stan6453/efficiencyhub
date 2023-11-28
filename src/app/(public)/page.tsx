import Image from 'next/image'

export default async function Home() {

  const data = await fetch('localhost:3000/api/handlecreateuser', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        _id: 'fake_id',
        username: 'stanfake',
      }
    }),
  });

  const payload = await data.text()

  console.log(payload);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {payload}
      </div>
    </main>
  )
}
