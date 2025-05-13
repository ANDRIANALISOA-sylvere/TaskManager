import LoginForm from "@/components/LoginForm";
import { Separator } from "@/components/ui/separator";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center dark:bg-background justify-center">
      <div className="w-full max-w-sm p-4">
        <img
          src="/logo.png"
          className="h-16 w-22"
          alt="Logo"
        />
        <Separator className="mt-12 mb-12"></Separator>
        <h1 className="text-2xl font-semibold mb-8">Sign in to TaskManager</h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
