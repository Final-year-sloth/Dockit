import SignupForm from '@/components/SignupForm'
import AuthLayout from '@/layouts/AuthLayout'
import { GetServerSideProps } from 'next';
import React from 'react'
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Your server-side logic here
  return {
    props: {}, // will be passed to the page component as props
  };
};
const signup = () => {
  return (
    <AuthLayout>
        <SignupForm />
    </AuthLayout>
  )
}

export default signup
