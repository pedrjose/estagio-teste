import { useState } from "react";
import { setRateMovie } from "../../services/rating.service.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormComponent() {
  const [movieId, setMovieId] = useState("");
  const [ratingValue, setRatingValue] = useState("");

  const rating = async () => {
    const response = await setRateMovie(movieId, ratingValue);

    if (response) {
      alert("Movie Rated Successfully!");
    } else {
      alert("Movie Rated Error!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    rating();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="movieId">
        <Form.Label>Movie ID</Form.Label>
        <Form.Control
          type="text"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ratingValue">
        <Form.Label>Rating Value</Form.Label>
        <Form.Control
          type="text"
          value={ratingValue}
          onChange={(e) => setRatingValue(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Rating
      </Button>
    </Form>
  );
}

export default FormComponent;
