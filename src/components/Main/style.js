import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const BodyStyle = styled.div`
  img {
    width: 100%;
  }
  .btnPanel {
    text-align: center;
    display: flex;
  }
  .typeOfBeer {
    min-height: 300px;
    border: 1px solid #c1c1c1;
    border-radius: 10px;
    margin: 14px 4px;
    background: #c1c1c1;
    opacity: 0.5;
    padding: 10px 15px;
    color: black;
    font-weight: 700;
  }
  .nextBtn {
    cursor: pointer;
    padding: 10px 20px;
    background: red;
    border-radius: 5px;
    color: white;
    margin: 5px;
    width: 50%;
  }
`;
