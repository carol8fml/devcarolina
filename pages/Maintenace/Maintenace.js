import HeadHtml from "../../components/HeadHtml";
import Welcome from "./Welcome";
import Footer from "../../components/Footer";

export default function Maintenace() {
  return (
    <>
      <HeadHtml
        title="Carolina Gonçalves - Front End Web Developer | Rio de Janeiro | Freelancer"
        description="Front End Web Developer - Resume website and project portfolio"
        keyword="sites, web, developmento, front End"
      />
      <div className="container container-fluid">
        <Welcome />
        <Footer />
      </div>
    </>
  );
}
