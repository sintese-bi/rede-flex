import { cookies } from "next/headers";

export function microServiceRequestConfig() {
  const headers = {
    Authorization: `Bearer 34i2oj4o2md9mczxmcmzx0-2i2393u1lsdmmsdaiji3ji1j4jdajspok1209lmxclvx`,
    "Content-Type": "application/json",
  };
  return headers;
}
export function apiRequestConfig() {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const headers = {
    Authorization: `Bearer ${access_token?.value}`,
    "Content-Type": "application/json",
  };
  return headers;
}
