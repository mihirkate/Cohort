  // import { PrismaClient } from "@repo/db/client"  
import { PrismaClient } from '@prisma/client';
const client=new  PrismaClient();
export default function Page():JSX.Element{
return <div className="text-2xl">
  hii there 
</div>
}