import RegisterForm from '@/components/auth/register-form';
import Container from '@/components/ui/container';
import Link from 'next/link';

const Register = () => {
  return (
    <div className='mt-20'>
      <Container>
        <RegisterForm />
        <div className='mt-8'>
          <Link href='/login' className='hover:text-blue-600'>
            <p className='text-center'>نام نویسی کرده‌اید، برای ورود کلیک کنید</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Register;
