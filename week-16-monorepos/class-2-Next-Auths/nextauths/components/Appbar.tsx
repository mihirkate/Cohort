
"use client"
import { useRouter } from "next/navigation"
import { signIn, signOut,useSession } from "next-auth/react"
export const Appbar=()=>{
const router=useRouter();
const session=useSession();
    return <div>

        <button onClick={()=>signIn()}>Sign In </button>
        <hr />
         <button onClick={() => signOut()}>signOut</button>

         {
            JSON.stringify(session)
         }
    </div>
}