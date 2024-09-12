import React from "react";
import styled from "styled-components";

const Overview = ({ headings }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <span>In this article</span>
        <div className="card__container">
          {headings.length > 0 ? (
            headings.map((heading, index) => (
              <p key={index} className="element">
                {heading}
              </p>
            ))
          ) : (
            <p>No headings found</p>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: fixed;
    top: 100px;
    left: 50px;
    width: 250px;
    height: auto;
    border-radius: 15px;
    background: rgb(27, 26, 26);
    color: white;
    font-weight: 600;
    font-size: 1.2em;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: -5px 5px 1px 0px #004d92;
  }

  .card__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .element {
    color: grey;
    font-size: 0.8em;
    padding: 6px 15px;
    border-left: 2px solid grey;
    cursor: pointer;
    word-break: break-word; /* Ensure long headings don't overflow */
  }

  .element:hover {
    color: #3775bb;
  }

  .active {
    background-color: #004d92;
    border-left: 2px solid #8cb4ff;
    color: azure;
  }
`;

export default Overview;
