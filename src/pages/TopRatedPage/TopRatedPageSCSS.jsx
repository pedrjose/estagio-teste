import styled from "styled-components";

export const TopRatedSection = styled.section`
  min-height: 100vh;
  background-color: #1e1e1e;
  color: white;
  font-family: "Inter", sans-serif;
  padding: 2rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-top: 2rem;
`;
