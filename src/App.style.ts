import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #44515c;
  margin: 200px;
  padding: 200px;
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

export const Title = styled.h4``;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TweetFeedSection = styled.div`
  width: 100%;
  margin-right: 30px;
  @media (max-width: 960px) {
    margin-right: 0px;
  }
`;

export const HashtagSection = styled.div`
  width: 100%;
  max-width: 349px;
  height: 100%;
  min-height: 350px;
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgb(0 0 0 / 3%);
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  color: #44515c;
`;

export const TweetContainer = styled.div`
  height: 100%;
  min-height: 450px;
  border-radius: 5px;
  box-shadow: 0 0 3px 2px rgb(0 0 0 / 3%);
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
