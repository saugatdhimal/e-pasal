import { route } from "next/dist/next-server/server/router";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.scss";
function Navbar() {
  const router = useRouter();
  function activeRoute(routeName){
    if(routeName === router.pathname) {
      return `${styles.active}`
    } else {
      return ""
    }
  }
  return (
    <nav>
      <div className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/">
            <a>
              <img src="/Pasal.png" />
            </a>
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/login">
            <a className={activeRoute("/login")}>Login</a>
          </Link>
          <Link href="/signup">
            <a className={activeRoute("/signup")}>Sign up</a>
          </Link>
          <Link href="/create">
            <a className={activeRoute("/create")}>Create</a>
          </Link>
          <Link href="/product">
            <a className={activeRoute("/product")}>Product</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
