import Link from 'next/link'

function Header() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain"
            src="https://images.squarespace-cdn.com/content/v1/5e4a96a007eced29ee52d7bd/1634572006730-VU7RMZX5MJDW71TNPANL/Medium_logo_%282020%29.png"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
        </div>
      </div>

      <div className='flex items-center space-x-5 text-green-600'>
        <h3>Sign In</h3>
        <h3 className='border px-4 py-1 rounded-full bborder-green-600'>Get Started</h3>
      </div>
    </header>
  )
}

export default Header
