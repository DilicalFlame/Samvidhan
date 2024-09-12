import React, { useState } from 'react';
import styled from 'styled-components';

const Preamble = () => {
  const [level, setLevel] = useState(1); // Default slider value at level 1 (small child)

  // Define the preamble content for each level
  const preambleContent = {
    1: "We all promise to help each other, be nice, and share our world. We want everyone to be happy, safe, and treated fairly.",
    2: "We, the people of India, have decided to form a strong nation that ensures freedom, equality, and justice for all its citizens. We pledge to uphold unity, democracy, and harmony.",
    3: "We, the people of India, having solemnly resolved to constitute India into a Sovereign Socialist Secular Democratic Republic and to secure to all its citizens: Justice, social, economic and political; Liberty of thought, expression, belief, faith, and worship; Equality of status and opportunity; and to promote among them all Fraternity assuring the dignity of the individual and the unity and integrity of the Nation."
  };

  // Handle the slider change
  const handleSliderChange = (e) => {
    setLevel(parseInt(e.target.value)); // Update level when slider changes
  };

  return (
    <StyledWrapper>
      <h1>Preamble to the Constitution of India</h1>
      <p>{preambleContent[level]}</p>
      
      <SliderWrapper>
        <label>Choose your understanding level:</label>
        <input 
          type="range" 
          min="1" 
          max="3" 
          value={level} 
          onChange={handleSliderChange} 
        />
        <div className="slider-labels">
          <span>Small Child</span>
          <span>High School</span>
          <span>Advocate</span>
        </div>
      </SliderWrapper>
    </StyledWrapper>
  );
};

// Styled Components
const StyledWrapper = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  
  h1 {
    margin-bottom: 20px;
    color: #2d8cf0;
  }

  p {
    font-size: 1.5em;
    margin: 20px 0;
  }
`;

const SliderWrapper = styled.div`
  margin-top: 30px;
  
  input[type="range"] {
    width: 100%;
    margin: 20px 0;
  }
  
  .slider-labels {
    display: flex;
    justify-content: space-between;
  }
`;

export default Preamble;
