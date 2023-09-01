import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout ({
    children,
    params
}: {
    children: React.ReactNode;
    params: {storeId: string}
})   {
    const { userId } = auth();
    
    if (!userId) {
        redirect('/sign-in'); //check for user
    }

    const store = await prismadb.store.findFirst({ //load store via id passed from root
        where: {
            id: params.storeId,
            userId
        }
    });

    if (!store) {
        redirect('/');
    } //user should always have a store before being able to see/render anything
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}