import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

interface IBtnInterface {
  maxWidth?: number;
  maxHeight?: number;
  fontSize?: number;
  textColor?: string;
  backgroundColors?: string[];
  isLoading?: boolean;
  disabled?: boolean;
  text?: string;
}

const Btn = styled.button<IBtnInterface>`
  width: 100vw;
  height: 100vh;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}rem` : "15rem")};
  max-height: ${(props) => (props.maxHeight ? `${props.maxHeight}rem` : "5rem")};
  text-decoration: none;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : "1.8rem")};
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: ${(props) => (props.textColor ? props.textColor : "#CECAC3")};
  background: ${(props) => {
    return props.backgroundColors
      ? `linear-gradient(180deg, ${props.backgroundColors[0]}, ${props.backgroundColors[1]})`
      : `linear-gradient(180deg,#6C63FF 0%,#39447A 100%)`;
  }};
  border-radius: 5px;
  user-select: none;
  transition: ease-in-out 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  align-self: flex-start;
  cursor: ${(props) => (props.isLoading ? "wait" : "pointer")};

  &&:hover {
    color: #fff;
    filter: brightness(1.1);
  }

  &&:focus {
    transform: scale(1.01);
    filter: brightness(1.15);
    box-shadow: 0.1rem 0.1rem 0.2rem 0.3rem rgb(0, 0, 0, 0.1);
  }

  // reset
  &&,
  &&:hover,
  &&:focus {
    box-shadow: none;
  }

  &&:disabled,
  &&:disabled:hover,
  &&:disabled:focus {
    opacity: .8;
    transform: scale(1);
    box-shadow: none;
    filter: none;
    color: ${(props) => (props.textColor ? props.textColor : "#CECAC3")};
    cursor: no-drop;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Animation = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.2rem;
  animation: ${rotate} 1s linear 0s infinite;
`;

const Button: React.FC<IBtnInterface> = (props) => {
  const [loading, setLoading] = useState(props.isLoading);

  return (
    <Btn
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
      fontSize={props.fontSize}
      textColor={props.textColor}
      backgroundColors={props.backgroundColors}
      disabled={props.disabled}
      isLoading={loading}
    >
      {loading && 
        <Animation>
          <BiLoaderAlt width={22} />
        </Animation>
      }
      {props.text}
    </Btn>
  );
};

export default Button;
