import Link from "next/link";
import styles from "../styles/Nav.module.scss";
function Navbar() {
  return (
    <nav>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/">
            <a><img src="/Pasal.png" /></a>
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
