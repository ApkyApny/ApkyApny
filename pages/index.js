import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <section className="hero">
          <div style={{display:'flex',justifyContent:'center'}}>
            <Image src="/logo.jpeg" alt="logo" width={110} height={110} />
          </div>
          <h1>Heart to Heart, Hand in Hand</h1>
          <div className="tagline-urdu">Apky Apno ka khayal, Apky Apny k sath</div>
          <p className="caption">Caring for elders with compassion 💛</p>
          <div style={{marginTop:14}}>
            <Link href="/services/food"><a className="btn btn-primary">Explore Services</a></Link>
            <Link href="/contact"><a className="btn btn-accent">Contact Us</a></Link>
          </div>
        </section>

        <section style={{marginTop:20}}>
          <h2>Our Services</h2>
          <div className="grid">
            <Link href="/services/food"><a className="card"><h3>🍲 Home-made Food Services</h3><p className="caption">Nutritious, home-cooked meals delivered with care.</p></a></Link>
            <Link href="/services/companionship"><a className="card"><h3>🤝 Companionship</h3><p className="caption">Friendly visits and regular calls to reduce loneliness.</p></a></Link>
            <Link href="/services/grocery"><a className="card"><h3>🛒 Grocery Delivery</h3><p className="caption">Groceries picked and delivered as per requirements.</p></a></Link>
            <Link href="/services/medicines"><a className="card"><h3>💊 Medicines & Counselling</h3><p className="caption">Medicine delivery and counseling support for families.</p></a></Link>
            <Link href="/services/visits"><a className="card"><h3>🏥 Medical Visits Assistance</h3><p className="caption">Assistance with appointments and hospital visits.</p></a></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
