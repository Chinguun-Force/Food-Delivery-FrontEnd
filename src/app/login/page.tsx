'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white grid grid-cols-5 gap-10 h-screen p-10">
    <div className="col-span-2 h-full flex items-center justify-center">
      <div className="w-[420px] flex flex-col gap-8">
        <div>
          <Button>
            <ChevronLeft size={24} />
          </Button>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold">
            Create your account
          </span>
          <span className="text-gray-500">
            Sign up to explore your favorite dishes.
          </span>
        </div>
        <Input placeholder="Enter your email address"/>
        <Button>Let's Go</Button>
        <div className="justify-center flex gap-3">
          <span>Already have an account?</span>
          <Link href={"/"}><span className="text-blue-500">Log in</span></Link>
        </div>
      </div>
    </div>
    <div className="col-span-3 h-full flex items-center justify-center">
      <CldImage
        // config={{ cloudName: "dl3wkodkk"}}
        // publicId="Food-Delivery%20Assets/488bb31d983ecd581caec983f3a32842_wytjk8"
        src="https://res.cloudinary.com/dl3wkodkk/image/upload/v1632216824/Food-Delivery%20Assets/488bb31d983ecd581caec983f3a32842_wytjk8.jpg"
        width={500}
        height={500}
        alt="Picture of the branding"
        quality={100}
        className="object-cover h-fit w-full rounded-3xl"
      />
    </div>
  </div>
  )
}

export default page
