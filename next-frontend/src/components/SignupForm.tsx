import React,{useState} from 'react'

const SignupForm: React.FC = () => {
  const colleges = ["All India Institute of Medical Sciences, Kalyani, Nadia","JMN Medical College, Nadia","JIS School of Medical Science & Research, Howrah","Jhargram Government Medical College & Hospital"] //Valid Colleges list
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [college,setCollege]=useState('');
  const [password,setPassword]=useState('');
  // const [confirmPassword,setConfirmPassword]=useState(''); this will be updated later.
  const [error,setError]=useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!colleges.includes(college)) {
      setError('College not in the allowed list');
    } else {
      setError('');
      // Perform signup logic here
      console.log('Signup process initiated');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
    
    {error && <p className="text-red-500 text-sm">{error}</p>}
    
    <div>
      <label className="block mb-1 text-sm">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
    </div>
    
    <div>
      <label className="block mb-1 text-sm">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <div>
      <label className="block mb-1 text-sm">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <div>
      <label className="block mb-1 text-sm">College</label>
      <input
        type="text"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
      Sign Up
    </button>

    <div className="mt-4">
      <p className="text-center text-sm">or continue with</p>
      <div className="flex justify-between mt-2">
        <button type="button" className="w-full mr-2 py-2 bg-red-500 text-white rounded">Google</button>
        <button type="button" className="w-full ml-2 py-2 bg-blue-700 text-white rounded">Microsoft</button>
      </div>
    </div>
  </form>
  )
}

export default SignupForm
