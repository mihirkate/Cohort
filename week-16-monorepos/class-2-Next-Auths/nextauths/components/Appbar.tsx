
"use client"
import { useRouter } from "next/navigation"
import { signIn, signOut } from "next-auth/react"
export const Appbar=()=>{
const router=useRouter();
    return <div>

        <button onClick={()=>signIn()}>Sign In </button>
        <hr />
         <button onClick={() => signOut()}>signOut</button>
    </div>
}