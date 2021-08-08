import styled from "styled-components";

export const TweetContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px 40px 10px;
  :nth-child(even) {
    background: #f4f4f4;
  }
`;

export const TweetInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  flex: 1;
`;

export const UserNamneStyled = styled.div`
  font-weight: 600;
  font-size: 17px;
`;
export const TweetWapper = styled.div`
  display: flex;
`;
export const TweetText = styled.p`
  flex-wrap: wrap;
  margin-right: 8px;
  width: 100%;
  line-height: 1.4;
  padding-right: 16px;
`;
export const TweetLink = styled.a`
  text-decoration: none;
  color: #00acee;
  font-size: 15px;
  margin-left: 5px;
`;
