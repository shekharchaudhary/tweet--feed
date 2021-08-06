import React from "react";
import {
  TweetContainer,
  TweetInnerContainer,
  UserNamneStyled,
  TweetText,
  TweetWapper,
  TweetLink,
} from "./tweet.style";

import { Avatar } from "../Avatar/avatar";

type TweetProps = {
  userName: string;
  tweetLink: string;
  tweetText: string;
  renderhHashtag: () => React.ReactNode;
};

export const Tweet = ({
  userName,
  tweetLink,
  tweetText,

  renderhHashtag,
}: TweetProps) => {
  return (
    <TweetContainer>
      <Avatar src=' ' />
      <TweetInnerContainer>
        <UserNamneStyled>{userName}</UserNamneStyled>
        <TweetWapper>
          <TweetText>
            {tweetText}
            <TweetLink href='hdhhdsfhhdsahfh'>{tweetLink}</TweetLink>
          </TweetText>
        </TweetWapper>
        <div>{renderhHashtag && renderhHashtag()}</div>
      </TweetInnerContainer>
    </TweetContainer>
  );
};
