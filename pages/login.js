export default function LoginPage() {
  return (
    <div className=" h-full bg-red-400">
      <div className=" text-black p-4">
        <div className="mb-4">
          <div>Email</div>
          <div>
            <input className="bg-gray-300 border border-gray-500 w-full mt-4 p-4 rounded-xl" />
          </div>
        </div>
        <div>
          <div>Password</div>
          <div>
            <input
              type="password"
              className="bg-gray-300 border border-gray-500 w-full mt-4 p-4 rounded-xl"
            />
          </div>
        </div>
        <div className="px-8">
          <button className="bg-gray-800 text-stone-300 font-bold w-full mt-4  py-3 rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
