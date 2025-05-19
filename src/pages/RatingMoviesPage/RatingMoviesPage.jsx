import { RatingPageSection } from "./RatingMoviesPageSCSS";
import NavbarComponent from "../../components/Navbar/Navbar";
import FormComponent from "../../components/Form/Form";

function RatingMoviePage() {
  return (
    <>
      <NavbarComponent />
      <RatingPageSection>
        <FormComponent />
      </RatingPageSection>
    </>
  );
}

export default RatingMoviePage;
