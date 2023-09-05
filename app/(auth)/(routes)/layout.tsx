export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex absolute bottom-0 top-0 left-0 right-0 items-center justify-center h-full">
            {children}
        </div>
    )
}