import { auth, currentUser } from "@clerk/nextjs";

export default async function Protected({ children }: { children: React.ReactNode }) {

    // Get the userId from auth() -- if null, the user is not logged in
    const { userId } = auth();

    if (userId) {
        return (
            <div>
                {children}
            </div>
        )
    } else{
        return (
            <div>
                <p>Not logged in</p>
            </div>
        )
    }
}