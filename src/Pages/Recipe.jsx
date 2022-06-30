import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div style={{ textDecorationLine: "none" }}>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {" "}
            {details.extendedIngredients.map((ingredients) => (
              <li key={ingredients.id}> {ingredients.original} </li>
            ))}{" "}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  img {
    border-radius: 20%;
    height: 13rem;
    margin-left: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h3 {
    font-size: 1.1rem;

    text-decoration: none;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  min-height: 2rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const Info = styled.div`
  margin-left: 10rem;
  font-weight: 600;
`;
export default Recipe;
