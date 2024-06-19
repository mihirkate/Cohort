"use strict";
// // import { PrismaClient } from "@prisma/client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: { username }
        });
        console.log(res);
    });
}
getUser("katemihir1@gmail.com");
