import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text", placeholder: "usaurio123" },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "*******",
        },
      },
      async authorize(credentials, req) {
        const { csrfToken, ...data } = credentials;
        const res = await fetch(`${process.env.DOMAIN}api/login`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        const resjson = await res.json();
        const { status } = resjson;
        if (!status) throw new Error("Credenciales Incorrectas");
        console.log("datos datos ", resjson.data);
        resjson.data.token = resjson.token;
        return resjson.data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NO_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
