export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="justify-center items-center w-screen h-screen flex mt-7">
            {children}
        </div>
    )
}
