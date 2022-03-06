import HeadHtml from "../components/HeadHtml";
import Gateway from "../components/Gateway";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HeadHtml
        title="Carolina Gonçalves - Front End Web Developer | Rio de Janeiro | Freelancer"
        description="Front End Web Developer - Resume website and project portfolio"
        keyword="sites, web, developmento, front End"
      />
      <Gateway />
      <Footer />
    </>
  );
}