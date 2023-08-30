import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout ({
    children
}: {
    children: React.ReactNode; //setting type
}) {
    const { userId } = auth(); //getting userId from clerk

    if (!userId){
        redirect('/sign-in'); //check if user is signed in
    }

    const store = await prismadb.store.findFirst({  //finding first store that matches the userId from db
        where: {
            userId
        }
    });

    if (store) {
        redirect(`/${store.id}`)
    }

    return (
        <>
            {children}
        </>
    )
}