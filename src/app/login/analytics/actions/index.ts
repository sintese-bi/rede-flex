"use server";
import { cookies } from "next/headers";
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
  cookies().set("access_token", json_response["acesso"], {
    expires: login_fields["remember_me"]
      ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      : undefined,
  });
  return {
    access_token: json_response["acesso"],
    succeed: response.ok,
    message,
  };
}
