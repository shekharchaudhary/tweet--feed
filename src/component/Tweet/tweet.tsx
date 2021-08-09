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
  id?: number;
  src: string;
  href: string;
  renderHashtag: () => React.ReactNode;
};

export const Tweet = ({
  userName,
  tweetLink,
  tweetText,
  id,
  src,
  href,
  renderHashtag,
}: TweetProps) => {
  return (
    <TweetContainer key={id}>
      <Avatar src={src} />
      <TweetInnerContainer>
        <UserNamneStyled>@{userName}</UserNamneStyled>
        <TweetWapper>
          <TweetText>
            {tweetText}
            <TweetLink href={href} target='_blank'>
              {tweetLink}
            </TweetLink>
          </TweetText>
        </TweetWapper>
        <div>{renderHashtag && renderHashtag()}</div>
      </TweetInnerContainer>
    </TweetContainer>
  );
};
