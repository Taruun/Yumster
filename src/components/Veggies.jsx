import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggies() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");

    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );

      const data = await api.json();
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setVeggies(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Our Vegeterian Ones</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            gap: "5rem",
            drag: "free",
          }}
        >
          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.title}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 2rem;
  border-raius: 2rem;
  overflow: hidden;
  positon: relative;

  img {
    border-radius: 2rem;
    positon: absolute;
    left: 0;

    width: 200%;
    height: 200%;
    object-fit: cover;
  }

  p {
    positon: absolute;

    bottom: 0%;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  positon: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggies;
