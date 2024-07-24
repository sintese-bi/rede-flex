import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
export default function OptionsFormComponents() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex items-center space-x-2 lg:text-slate-500 md:text-slate-500 text-slate-200">
        <Checkbox
          id="remember_me"
          className="lg:border-main-color md:border-main-color border-white"
        />
        <label
          htmlFor="remember_me"
          className="lg:text-sm md:text-sm text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lembrar de mim
        </label>
      </div>
      <Link
        className="lg:text-sm md:text-sm text-xs font-medium lg:text-slate-500 md:text-slate-500 text-slate-200 underline"
        href={"/send_recovery_email"}
      >
        Esqueceu a senha?
      </Link>
    </div>
  );
}
