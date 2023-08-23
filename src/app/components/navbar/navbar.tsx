import Image from 'next/image'

const Navbar = () => {
  const phoneNumber = '5511985062196';
  const message = 'Olá, gostaria de saber mais informações!';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="p-6 flex justify-between items-center fixed w-screen bg-color_secondary z-10">
      <a href="/">
        <Image
          src="/paviment_labs_logo.svg"
          width={120}
          height={120}
          alt="Paviment Labs Logo"
        />
      </a>
      <nav className="space-x-4">
        <a href={url} className="hover:underline color_primary border-2 p-3 border-color_primary ">Contato</a>
      </nav>
      <div style={{ backgroundColor: 'var(--primaryColor)', height: '4px' }} className="absolute bottom-0 left-0 w-full" />
    </header>
  )
}

export default Navbar