import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="btn-1">Press start</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-1 {
    position: relative;
    color: white;
    border: none;
    padding: 8px 20px;
    transition: 300ms;
    box-sizing: border-box;
    background-color: transparent;
  }

  .btn-1::before {
    content: "";
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    transition: 300ms;
    transform: skewX(-20deg);
  }

  .btn-1::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 100%;
    transition: 300ms;
    background-color: white;
    opacity: 0.2;
    transform: skewX(-20deg);
  }

  .btn-1:hover {
    padding-left: 25px;
    cursor: pointer;
  }

  .btn-1:hover::before {
    width: 5px;
  }

  .btn-1:hover::after {
    width: 100%;
  }`;

export default Button;
