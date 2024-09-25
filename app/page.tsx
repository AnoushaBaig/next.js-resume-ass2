import Link from "next/link"
export default function Portfolio() {
  return(
    <div>
      <ul>
        <h1>My Portfolio</h1>
        <br />
        <h1>Anousha Baig</h1>
        <p>I'm Fresh Web Developer and continue Programming in GIAIC.</p>
        <h1></h1>
        <br />
        <Link href="/home"><li>About Us</li></Link>
        <Link href="/education"><li>Education</li></Link>
        <Link href="/contact-us"><li>Contact Us</li></Link>
      </ul>
      <br />
      <h2>Email:Baiganousha24@gamil.com</h2>
      <h2>Thank you to reciving my resume...</h2>
    </div>
  )
}