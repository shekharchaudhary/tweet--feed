import styled from "styled-components";
import { Button } from "./component/Button/button";
import { Input } from "./component/Input/Input";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 200px;
  background: #f4f4f4;
  color: #44515c;
  @media (max-width: 960px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
    background: none;
    border: none;
  }
`;

export const Title = styled.h4`
  margin-top: -40px;
  @media (max-width: 960px) {
    margin: 40px 20px;
    font-size: 18px;
  }
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TweetFeedSection = styled.div`
  width: 40vh;
  margin-right: 30px;
  @media (max-width: 960px) {
    margin-right: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const HashtagSection = styled.div`
  width: 100%;
  max-width: 349px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgb(0 0 0 / 3%);
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;
  color: #44515c;
  @media (max-width: 960px) {
    margin-bottom: 16px;
  }
`;

export const TweetContainer = styled.div`
  height: 100%;
  min-height: 450px;
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgb(0 0 0 / 3%);
  background: #fff;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoadMoreButtonStyled = styled(Button)`
  border: none;
  background: none;
  margin-top: 50px;
  color: #00acee;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 30px;
  }
`;
export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TitleStyled = styled.h4``;

export const InputStyled = styled(Input)`
  width: 100%;
  height: 20px;
`;
