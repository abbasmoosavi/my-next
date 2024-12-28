import LoginForm from "@/components/auth/login-form";
import Container from "@/components/ui/container";
import Link from "next/link";

const Login = () => {
  return (
    <div className='mt-20'>
      <Container>
        <LoginForm />
        <div className='mt-8'>
          <Link href='/register' className='hover:text-blue-600'>
            <p className='text-center'>برای عضویت کلیک کنید</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
