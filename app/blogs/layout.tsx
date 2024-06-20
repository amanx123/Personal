export default function Layout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div className="text-white mt-16 mx-auto ml-5 text-center">{children}</div>
}