import { createGlobalStyle } from "styled-components";
import backgroundImage from "./background.jpg";

export const GlobalStyle = createGlobalStyle`

.html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  
  body {
      max-width: 1000px;
      font-family: 'Oswald', sans-serif;
      max-width: 700px;
      margin: 5% auto;
      text-align: center;
      box-shadow: 50px;
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      padding: 10px;
  }
  
  .form {
    background-color: rgb(214, 170, 25);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 75%);
  }`;
