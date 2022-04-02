import HeadHtml from "../components/HeadHtml";
import Header from "../components/Header";
import Gateway from "../components/Gateway";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeadHtml
        title="Carolina Gonçalves - Web Developer | Rio de Janeiro | Freelancer"
        description="Web Developer - Resume website and project portfolio"
        keyword="sites, web, developmento, front End"
      />
      <Header />
      <Gateway />
      <Footer />
    </>
  );
}