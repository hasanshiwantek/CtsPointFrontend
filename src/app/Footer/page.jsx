import MainFooter from "../components/footer/MainFooter"
import styles from "@/style/Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
    <main className={`${styles.footerContainer}`}>
    <MainFooter/>
    </main>

    </>
  )
}

export default Footer