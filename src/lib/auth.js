import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        // Simple admin/user login from .env
        if (
          email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            name: "Admin",
            email,
            role: "admin",
          };
        }

        if (
          email === process.env.USER_EMAIL &&
          password === process.env.USER_PASSWORD
        ) {
          return {
            id: "2",
            name: "User",
            email,
            role: "user",
          };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user";
      }
      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
