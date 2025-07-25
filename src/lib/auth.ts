import { TEST_OTP_CODE } from "@/constants";
import { loginConfirmFormSchema } from "@/utils/schemas";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod/v4";

export class InvalidOTPCodeException extends CredentialsSignin {
  constructor() {
    super();
    this.message = "invalid otp code";
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        if (process.env.NODE_ENV === "development") {
          const res = z
            .object({
              otpCode: loginConfirmFormSchema.shape.otpCode.refine(
                (val) => val === TEST_OTP_CODE,
                "code is not equal to test code",
              ),
            })
            .safeParse(credentials);

          if (!res.success) throw new InvalidOTPCodeException();

          return {
            name: "test",
            email: "test@gmail.com",
          };
        }

        throw new Error("signin not implemented in production");

        // TODO: implement validation received otp code with saved otp code in database
        // throw new Error("otp validation in production not implemented yet");
      },
    }),
  ],
  debug: true,
});
