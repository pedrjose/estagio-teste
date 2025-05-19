import Card from "react-bootstrap/Card";

function CardComponent({ props }) {
  const moviePoster = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.poster_path}`;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={moviePoster} />
      <Card.Body>
        <Card.Title>{props.original_title}</Card.Title>
        <Card.Text>{props.overview}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
