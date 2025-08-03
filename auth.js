import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import client from "./lib/db";
import authConfig from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { userModel } from "./model/user-model";
import { signInSchema } from "./lib/zod";

// const mongo = new client();
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (credentials == null) return null;
          let user = null;
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          user = await userModel.findOne(email);

          if (!user) {
            throw new Error("Invalid credentials.");
          }
          return user;
        } catch (error) {}
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
