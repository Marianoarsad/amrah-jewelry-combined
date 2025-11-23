import logo from "./assets/amrah.png";

function Header() {
  return (
    <header className='flex items-center justify-between px-4 md:px-24 py-4 bg-white shadow-md'>
      <div className='flex items-center gap-8'>
        <img src={logo} alt='Amrah Logo' className='h-14 w-auto' />
        <nav>
          <ul className='flex gap-6' style={{ color: "#c64b50" }}>
            <li>
              <a href='#services' className='hover:text-[#a63c40]'>
                Services
              </a>
            </li>
            <li>
              <a href='#shop' className='hover:text-[#a63c40]'>
                Shop
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-[#a63c40]'>
                About Us
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-[#a63c40]'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex items-center gap-4'>
        <button
          className='text-white px-4 py-2 rounded-lg transition'
          style={{ backgroundColor: "#c64b50" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#a63c40")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#c64b50")
          }
        >
          STAY CONNECTED
        </button>
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-2xl hover:text-[#a63c40]'
          title='Instagram'
        >
          📸
        </a>
        <a
          href='https://shopee.ph'
          target='_blank'
          rel='noopener noreferrer'
          className='text-2xl hover:text-[#a63c40]'
          title='Shopee'
        >
          🛒
        </a>
      </div>
    </header>
  );
}

export default Header;
