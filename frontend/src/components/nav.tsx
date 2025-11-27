import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
  <nav className={styles.navbar}>
    
    <Link href="/">
      <Image src="/earth.png" alt="Earth logo" width={50} height={20}/>
    </Link>
    

    <ul className={styles.NavLinks}>
        <li className={styles.link}><Link href="/about">About</Link></li>
        <li className={styles.link}><Link href="/">Settings</Link></li>
        <li className={styles.link}><Link href="/">Sign In</Link></li>
        <li className={styles.link}><Link href="/">Register</Link></li>
    </ul>
  </nav>
  );
}