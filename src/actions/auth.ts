"use server";

export async function sendOTPAction(
  phoneNumber: string,
): Promise<
  { success: true; phoneNumber: string } | { success: false; error: Error }
> {
  // TODO: implement send otp code to phone number
  // TODO: return error on sending code to same phone number before prev codes expires
  return {
    success: true,
    phoneNumber,
  };
}
