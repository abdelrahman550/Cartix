"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, MoveRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { LoginDataValues, loginSchema } from "./Login.Schema";
import LoginCardHeader from "./LoginCardHeader";
import LoginCardNav from "./LoginCardNav";
import { useState } from "react";

export default function LoginCard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values: LoginDataValues) {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        ...values,
      });

      if (!res) throw new Error("No response from server");

      if (res.error) {
        toast.error(res.error, {
          position: "top-center",
          richColors: true,
        });
        return;
      }

      toast.success("Welcome To Cartix!", {
        position: "top-center",
        richColors: true,
      });

      router.push("/");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
        {
          position: "top-center",
          richColors: true,
        },
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-fit w-full md:w-115">
      <div className="h-full w-full overflow-hidden rounded-4xl border border-black/5 bg-white/90 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] backdrop-blur-md">
        <LoginCardNav />
        <div className="p-8 pb-9">
          <LoginCardHeader />

          <form
            className="flex flex-col gap-3"
            onSubmit={form.handleSubmit(handleLogin)}
          >
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-sm font-semibold text-gray-500"
                    htmlFor={field.name}
                  >
                    Email Address
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                    type="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center justify-between">
                    <FieldLabel
                      className="text-sm font-semibold text-gray-500"
                      htmlFor={field.name}
                    >
                      Password
                    </FieldLabel>
                    <span className="text-crimson hover:text-crimson-dark cursor-pointer text-xs font-semibold underline transition">
                      Forgot password?
                    </span>
                  </div>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Your password"
                    autoComplete="off"
                    className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Button
              variant="default"
              type="submit"
              disabled={loading}
              className="hover:to-crimson hover:via-crimson group crimson-shadow-hover mt-5 mb-4 flex h-12 w-full cursor-pointer items-center justify-center bg-linear-to-r from-[#c31432] via-[#d61f3c] to-[#ff375c] px-7 text-sm font-bold shadow-[0_10px_25px_-5px_rgba(214,31,60,0.5)] hover:-translate-y-0.5"
            >
              <span>Log In</span>
              <span>
                {loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <MoveRight
                    strokeWidth={3}
                    className="transition group-hover:translate-x-0.5"
                  />
                )}
              </span>
            </Button>
          </form>

          <div className="flex items-center justify-center gap-0.5 text-xs text-gray-400">
            By continuing you agree to our{" "}
            <span className="text-crimson font-bold">Terms</span> &{" "}
            <span className="text-crimson font-bold">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
