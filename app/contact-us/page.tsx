import Link from "next/link"
export default function Contact(){
    return (
        <div>
            <h1>CONTACT US</h1>
            <br />
           <h2><Link href="https://web.whatsapp.com/"> Whatsup</Link></h2>
            {/* <a href="https://web.whatsapp.com/"> </a> */}
           <h2><Link href="https://www.linkedin.com/feed/">Linkdin</Link></h2>
           <h2><Link href="https://www.instagram.com/">Instagram</Link></h2>
        </div>
    )
}