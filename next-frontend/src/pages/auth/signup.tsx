import SignupForm from '@/components/SignupForm'
import AuthLayout from '@/layouts/AuthLayout'
import React from 'react'

const signup = () => {
  return (
    <AuthLayout>
        <SignupForm />
    </AuthLayout>
  )
}

export default signup
