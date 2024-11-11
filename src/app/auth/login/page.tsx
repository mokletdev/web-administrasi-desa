import { PageContainer } from "@/components/layouts/PageContainer";
import { LoginForm } from "./components/login-form";

export default function Login() {
  return (
    <PageContainer>
      <div className="flex w-full max-w-lg flex-col items-center justify-start">
        <div className="w-full">
          <div className="mb-8 text-left">
            <h1>Masuk</h1>
            <p>Masuk untuk mengelola administrasi layanan</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </PageContainer>
  );
}
