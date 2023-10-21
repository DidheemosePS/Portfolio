import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

interface Credentials {
  usernames: string;
  password: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const prisma = new PrismaClient();
        const [user] = await prisma.login.findMany({
          where: {
            email,
            password,
          },
        });

        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
  sesssion: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handle = NextAuth(authOptions);
export { handle as GET, handle as POST };
