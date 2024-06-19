// // import { PrismaClient } from "@prisma/client";

// // const prisma = new PrismaClient();

// // async function insertUser(username: string, password: string, firstName: string, lastName: string) {
// //  const res=await prisma.user.create({
// //     data:{
// //         username,
// //         password,
// //         firstName,
// //         lastName
// //     },
  
// //   })
// //   console.log(res);
  
// // }
// // insertUser("katemihir123@gmail.com","123456","Mihir","Kate");
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {firstName,lastName}: UpdateParams) {
//  const res=await prisma.user.update({
//     where:{username},
//     data:{
//         firstName,
//         lastName
//     }
//   })
//   console.log(res);
  
// }
// updateUser("katemihir1@gmail.com",{firstName:"Mihir",lastName:"Kate"});


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const res=await prisma.user.findFirst({
    where:{username}
  })
  console.log(res);
  
}
getUser("katemihir1@gmail.com");