import React from "react";

import {
  MainContainer,
  Title,
  InnerContainer,
  TweetFeedSection,
  HashtagSection,
  TweetContainer,
  ButtonContainer,
  LoadMoreButtonStyled,
} from "./App.style";

import { Hashtag } from "./component/Filter/Hashtag";
import { Tweet } from "./component/Tweet/tweet";
import { Input } from "./component/Input/Input";
import useMediaQuery from "./hooks/useMediaQuery";
import { Loader } from "./component/Loader/Loader";
import { tweeterData } from "./mockData/data";

export const App = () => {
  //api
  React.useEffect(() => {
    try {
      async function getTweetData() {
        const url = "https://api.twitter.com/1.1/search/tweets.json";

        const response = await fetch(url, {
          method: "GET",
          mode: "cors", // no-cors, *cors, same-origin

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG",
          },
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

      getTweetData();
    } catch (err) {
      throw new Error(err);
    }
  }, []);
  //screen
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const tweet = tweeterData.statuses.map((data) => data.user.id);
  //rendering each hashtag
  const renderTag = () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tweeterData.statuses.map((has, index) => (
          <Hashtag
            key={index}
            hashtag={has.entities.hashtags.map((d) => d.text)}
          />
        ))}
      </div>
    );
  };

  return (
    <MainContainer>
      {tweet.length === 0 ? (
        <Loader />
      ) : (
        <InnerContainer>
          <TweetFeedSection>
            <Title>Tweet Feed</Title>
            <Input placeholder='Search by keyword' style={{ height: "20px" }} />
            {!isDesktop && (
              <HashtagSection>
                <h4>Filter by hashtag</h4>
                {renderTag()}
              </HashtagSection>
            )}

            <TweetContainer>
              {tweeterData.statuses.map((data, index) => (
                <Tweet
                  key={index}
                  userName={data.user.name}
                  tweetLink={data.user.url}
                  tweetText={data.user.description}
                  renderhHashtag={() => (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      {renderTag()}
                    </div>
                  )}
                />
              ))}

              <ButtonContainer>
                <LoadMoreButtonStyled>Load More</LoadMoreButtonStyled>
              </ButtonContainer>
            </TweetContainer>
          </TweetFeedSection>
          {isDesktop && (
            <HashtagSection>
              <h4>Filter by hashtag</h4>
              {renderTag()}
            </HashtagSection>
          )}
        </InnerContainer>
      )}
    </MainContainer>
  );
};
