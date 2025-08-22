export default function Login() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-80 rounded border p-8 text-center shadow-md'>
        <h1 className='mb-4 text-2xl'>Login</h1>
        <input
          className='mb-2 w-full border p-2'
          placeholder='Email'
          type='email'
        />
        <input
          className='mb-4 w-full border p-2'
          placeholder='Password'
          type='password'
        />
        <button className='w-full rounded bg-blue-500 px-4 py-2 text-white'>
          Se connecter
        </button>
      </div>
    </div>
  )
}
