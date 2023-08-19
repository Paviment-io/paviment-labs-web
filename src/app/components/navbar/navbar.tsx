import Image from 'next/image'

const Navbar = () => {
    return (
        <header className="p-6 flex justify-between items-center relative">
        <a href="/">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="Paviment Labs Logo"
          />
        </a>
        <nav className="space-x-4">
          <a href="/sobre" className="hover:underline color_primary">Sobre</a>
          <a href="/" className="hover:underline color_primary">Serviços</a>
          <a href="/" className="hover:underline color_primary border-2 p-3 border-color_primary ">Contato</a>
        </nav>
        <div style={{ backgroundColor: 'var(--primaryColor)', height: '4px' }} className="absolute bottom-0 left-0 w-full"></div>
      </header>
    )
}

export default Navbar