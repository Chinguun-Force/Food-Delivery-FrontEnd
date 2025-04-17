"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BASE_URL } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LoginType } from "../login/page";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export type ErrorType = {
  response: {
      data: {
          error: string;
      };
  };
  message: string;
};


const Register = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (val: LoginType) => {
    try {
      const user = await axios.post(`${BASE_URL}/auth/sign-up`, val);

      if (user) {
        toast("User successfully register.");
        router.push("/login");
      }
    } catch (error: unknown) {
      setError((error as ErrorType).response.data.error);
    }
  };

  return (
    <div  className="w-full flex h-screen p-6 bg-white">
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[416px] h-[376px]">
          <Link
            href={"/login"}
            className="flex justify-center items-center rounded-md bg-[#f5f5f7] w-[44px] h-11 border-[1px] border-[#d4d4d6] mb-4"
          >
            <ChevronLeft className="-translate-x-[6%]"/>
          </Link>
          <div className="flex flex-col gap-2 items-start justify-center">
              <p className="text-[24px] font-semibold normal">Create your account</p>
              <p className="text-[16px] font-normal normal text-[#71717a]">
              Sign up to explore your favorite dishes.
              </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="my-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="my-4">
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
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <div className="flex gap-3 justify-center items-center my-4">
            <Link href={"/signup"}>
            <p className="text-[16px] font-normal normal text-[#71717a]">
            Already have an account?
            </p>
            </Link>
            <Link href={"/login"}>
            <p className="text-[16px] text-[#2563EB] font-normal normal">
            Log in 
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

  );
};

export default Register;