"use server";
import { redirect } from "next/navigation";
export async function handleLogin(login_fields: any) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_EXTERN_API}/login`, {
    method: "POST",
    body: JSON.stringify(login_fields),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: {
      tags: ["logged_user"],
    },
  });
  const json_response = await response.json();
  const message = json_response.message || "Error";
  return { succeed: response.ok, message };
}
