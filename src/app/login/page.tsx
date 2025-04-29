import LoginForm from "@/components/LoginForm";
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-4">
        <h1 className="text-2xl font-semibold text-center mb-4">Connexion</h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
