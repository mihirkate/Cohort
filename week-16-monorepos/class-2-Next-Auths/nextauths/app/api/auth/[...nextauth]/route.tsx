import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                return {
                    id: "user1"
                };
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST }