import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(){ 
  return (
    <header className="navbar container">
      <div className="nav-left">
        <Link href="/">
          <a style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
            <Image src="/logo.jpeg" alt="APKY APNY Logo" width={56} height={56} className="logo-img" />
            <div style={{marginLeft:10}}>
              <div className="brand-title">APKY APNY</div>
              <div style={{fontSize:12,color:'#555'}}>Heart to Heart, Hand in Hand</div>
            </div>
          </a>
        </Link>
      </div>
      <nav className="nav-links">
        <Link href="/"><a>Home</a></Link>
        <Link href="/services/food"><a>Services</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </header>
  )
}
