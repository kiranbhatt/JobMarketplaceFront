'use client';

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form>
        <input type="text" placeholder="Full Name" className="border p-2 w-full mb-2" />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Confirm Password" className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
}
