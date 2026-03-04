import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "../../../../lib/db";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email }).exec();
        if (!user) {
          throw new Error("No user found");
        }
        if (!user.password) {
          throw new Error("User does not have a credentials password");
        }
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) {
          throw new Error("Invalid credentials");
        }
        // return object that will be saved in token
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "google") {
        await dbConnect();

        let existingUser = await User.findOne({ email: token.email });

        if (!existingUser) {
          existingUser = await User.create({
            name: token.name,
            email: token.email,
            image: token.picture,
            role: "user",
          });
        }

        token.role = existingUser.role;
        token.id = existingUser._id.toString();
      }

      if (user) {
        token.role = user.role || "user";
        token.id = user.id;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
