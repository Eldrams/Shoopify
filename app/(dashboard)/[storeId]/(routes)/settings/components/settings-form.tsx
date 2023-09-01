"use client"

import { Store } from "@prisma/client";
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SettingsFormProps {
    initialData: Store;
}

const formSchema = z.object({
    name: z.string().min(1) // min length 1
});

type SettingsFormValue = z.infer<typeof formSchema>; //reusable



export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    
    const form = useForm<SettingsFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const onSubmit = async (values: SettingsFormValue) => {
        console.log(values)
    }
    
    return (
    <>
        <div className="flex items-centre justify-between">
            <Heading 
            title="Settings"
            description="Manage Store Preferences"
            />
            <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => {}}
            >
            <Trash className="h-4 w-4"/>
            </Button>
        </div> 
        <Separator />
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <div className="grid grid-cols-3 gap-8">
                    <FormField 
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input disabled={loading} placeholder="Store Name" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <Button disabled={loading} className="ml-auto" type="submit">
                    Save Changes
                </Button>
            </form>
        </Form>
    </>
    );
};