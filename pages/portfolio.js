import HeadHtml from "../components/HeadHtml";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function portfolio() {
  return (
    <>
      <HeadHtml
        title="Carolina Gonçalves - Web Developer | Rio de Janeiro | Freelancer"
        description="Web Developer - Resume website and project portfolio"
        keyword="sites, web, developmento, front End"
      />
      <Projects />
      <Footer />
    </>
  );
}