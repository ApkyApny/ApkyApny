import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const phone = '03372116809'
  const wa = 'https://wa.me/923372116809'
  return (
    <div>
      <Navbar />
      <main className="container" style={{paddingTop:20}}>
        <div className="card">
          <h1>Contact Us</h1>
          <p className="caption">We’re here for your elders, anytime.</p>
          <div style={{marginTop:12}}>
            <a href={wa} target="_blank" rel="noreferrer" className="contact-buttons">WhatsApp: +92 333 2116809</a>
            <a href={'tel:' + phone} className="call-btn" style={{marginLeft:10}}>Call: 0337-2116809</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
