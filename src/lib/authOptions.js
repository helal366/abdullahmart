import dbConnect, { collectionNames } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your name" },
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" },
            },
            
            async authorize(credentials) {
                const { username, password } = credentials;
                const user = await dbConnect(collectionNames.USERS).findOne({ username });

                if (user && password === user.password) {
                    return {
                        id: user._id.toString(),
                        username: user.username,
                        email: user.email,
                        role: user.role, // ✅ ensure role is passed back
                    };
                }
                return null;
            }


        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log("FROM SIGNIN CALLBACK", { user, account, profile, email, credentials })
            if (account) {
                try {
                    const { providerAccountId, provider } = account
                    const { email, image, name } = user
                    const payload = { role: "User", providerAccountId, provider, email, image, username: name }
                    console.log("FROM SIGNIN CALLBACK", payload)

                    const usersCollection = dbConnect(collectionNames.USERS)
                    const isUserExist = await usersCollection.findOne({ providerAccountId })

                    if (!isUserExist) {
                        await usersCollection.insertOne(payload)
                    }

                } catch (error) {
                    console.log(error)
                    return false;
                }

            }

            return true
        },
       
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
                token.role = user.role; // ✅ store role
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.username = token.username;
                session.user.role = token.role; // ✅ available on client
            }
            return session;
        }

    }
}