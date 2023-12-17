import NavBar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <NavBar/>
      <div>{children}</div>
    </div>
  )
}
