"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader, MoveRight } from "lucide-react";
import SignupCardHeader from "./SignupCardHeader";
import SignupCardNav from "./SignupCardNav";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupDataValues, signupSchema } from "./Signup.Schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signupAction } from "./Signup.actions";

export default function SignupCard() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function handleSignup(values: SignupDataValues) {

    try {
      const signupResFromAction = await signupAction(values);

      if (!signupResFromAction.signupOk) {
        throw new Error(
          signupResFromAction.signupMsg || "Something went wrong",
        );
      }

      router.replace("/Login");

      toast.success("Account Created Successfully!", {
        position: "top-center",
        richColors: true,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(message, {
        position: "top-center",
        richColors: true,
      });

    }
  }

  return (
    <div className="h-fit w-full md:w-115">
      <div className="h-full w-full overflow-hidden rounded-4xl border border-black/5 bg-white/90 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] backdrop-blur-md">
        <SignupCardNav />
        <div className="p-8 pb-9">
          <SignupCardHeader />

          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={form.handleSubmit(handleSignup)}
          >
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-sm font-semibold text-gray-500"
                    htmlFor={field.name}
                  >
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="John Doe"
                    autoComplete="off"
                    className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                    type="text"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

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
                    autoComplete="off"
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
                  <FieldLabel
                    className="text-sm font-semibold text-gray-500"
                    htmlFor={field.name}
                  >
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Create a strong password"
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

            <Controller
              name="rePassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-sm font-semibold text-gray-500"
                    htmlFor={field.name}
                  >
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm your password"
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

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    className="text-sm font-semibold text-gray-500"
                    htmlFor={field.name}
                  >
                    Phone Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Phone Number"
                    autoComplete="off"
                    className="focus:border-crimson focus-visible:ring-crimson/20 focus-visible:border-crimson h-10 bg-gray-100 px-4 py-3 placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus-visible:bg-white focus-visible:ring-2"
                    type="tel"
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
              disabled={isSubmitting}
              className="hover:to-crimson hover:via-crimson group crimson-shadow-hover mt-5 mb-4 flex h-12 w-full cursor-pointer items-center justify-center bg-linear-to-r from-[#c31432] via-[#d61f3c] to-[#ff375c] px-7 text-sm font-bold shadow-[0_10px_25px_-5px_rgba(214,31,60,0.5)] hover:-translate-y-0.5"
            >
              <span>Create My Account</span>
              <span>
                {isSubmitting ? (
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
