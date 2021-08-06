import React from "react";

import {
  MainContainer,
  Title,
  InnerContainer,
  TweetFeedSection,
  HashtagSection,
  TweetContainer,
} from "./App.style";

import { Hashtag } from "./component/Filter/Hashtag";
import { Tweet } from "./component/Tweet/tweet";
import { Input } from "./component/Input/Input";

export const App = () => (
  <MainContainer>
    <Title>Tweet Feed</Title>
    <InnerContainer>
      <TweetFeedSection>
        <Input placeholder='Search by keyword' style={{ height: "20px" }} />
        <TweetContainer>
          <Tweet
            userName='@shekharchaudhary'
            tweetLink='https://bt.co/Blah'
            tweetText='Following k you to provide a functional demo of your application, and a review of your project code. Please be prepared to answer questions related to your project and its architecture.
'
            renderhHashtag={() => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
              </div>
            )}
          />
          <Tweet
            userName='@shekharchaudhary'
            tweetLink='https://bt.co/Blah'
            tweetText=' interview we’ll ask you to provide a functional demo of your application, and a review of your project code. Please be prepared to answer questions related to your project and its architecture.
'
            renderhHashtag={() => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />
              </div>
            )}
          />
          <Tweet
            userName='@shekharchaudhary'
            tweetLink='https://bt.co/Blah'
            tweetText='Following a review of your submission we’ll schedule a panel interview. In that interview we’ll ask you to provide a functional demo of your application, and a review of your project code. Please be prepared to answer questions related to your project and its architecture.
'
            renderhHashtag={() => (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Hashtag hashtag='codingddddddd' />
                <Hashtag hashtag='codingddddddd' />

                <Hashtag hashtag='codingddddddd' />
              </div>
            )}
          />
        </TweetContainer>
      </TweetFeedSection>
      <HashtagSection>
        <h4>Filter by hashtag</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Hashtag hashtag='codingdddd' />
          <Hashtag hashtag='coding' />
          <Hashtag hashtag='coding' />
          <Hashtag hashtag='codingddddddd' />
          <Hashtag hashtag='coding' />
          <Hashtag hashtag='coding' />
        </div>
      </HashtagSection>
    </InnerContainer>
  </MainContainer>
);
