"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/providers/AuthProvider";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type LoginType = {
    email: String,
    password: String
}

export type DecodedTokenType = {
    user: {
        email: String,
        password: String,
        role: String,
        id: String
    }
    token: string,
}

const Login = () => {

    const { login, error } = useAuth();

    const formSchema = z.object({
        email: z.string().email().min(2).max(50),
        password: z.string().min(8),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });
   

    return (
    <div className="bg-white p-6 flex gap-4 rounded-lg w-full">
        <div className="flex-1 flex justify-center items-center">
            <div className="w-[416px] h-[376px]">
                <Link
                    href={"/"}
                    className="flex justify-center items-center rounded-md bg-[#f5f5f7] w-[44px] h-11 border-[1px] border-[#d4d4d6] mb-4"
                >
                    <ChevronLeft className="-translate-x-[6%]"/>
                </Link>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <p className="text-[24px] font-semibold normal">Log in</p>
                    <p className="text-[16px] font-normal normal text-[#71717a]">
                    Log in to enjoy your favorite dishes.
                    </p>
                </div>
                <Form {...form}>
                     <form onSubmit={form.handleSubmit(login)} className="space-y-4 mt-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Enter your email address" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Password" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        <Link href={'/'}><p className="underline my-4">Forgot password ?</p></Link>
                        <Button 
                        type="submit"
                        className="bg-[#d4d4d6] rounded-md h-9 w-full flex justify-center items-center">Let's Go</Button>
                     </form>
                 </Form>
                
                <div className="flex gap-3 justify-center items-center my-4">
                    <Link href={"/signup"}>
                    <p className="text-[16px] font-normal normal text-[#71717a]">
                        Don't have an account?
                    </p>
                    </Link>
                    <Link href={"/signup"}>
                    <p className="text-[16px] text-[#2563EB] font-normal normal">
                        Sign up
                    </p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center">
      <Image
        alt="img"
        src={
          "https://res.cloudinary.com/dl3wkodkk/image/upload/v1742867934/Food-Delivery%20Assets/488bb31d983ecd581caec983f3a32842_wytjk8.jpg"
        }
        width={860}
        height={904}
        style={{objectFit: "cover"}}
        className="w-[860px] h-[904px] rounded-lg"
      />
        </div>
    </div>
    )
}


export default Login