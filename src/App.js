import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MainContainer,
  Title,
  InnerContainer,
  TweetFeedSection,
  HashtagSection,
  TweetContainer,
  ButtonContainer,
  LoadMoreButtonStyled,
  TagWrapper,
  TitleStyled,
  InputStyled,
  ResetButton,
} from "./App.style";

import { Hashtag } from "./component/Filter/Hashtag";
import { Tweet } from "./component/Tweet/tweet";
import { Loader } from "./component/Loader/Loader";
import { fetchTweetAction } from "./action/fetchTweetAction";

import useMediaQuery from "./hooks/useMediaQuery";

export const App = () => {
  const [searchTweet, setSearchTweet] = React.useState("");
  const tweets = useSelector((state) => state.tweetsList.tweets);
  const [filterTweet, setFilterTweet] = React.useState([]);

  //screen
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const hashtags = useSelector((state) => state.tweetsList.hashtags);

  const dispatch = useDispatch();
  React.useEffect(() => {
    setFilterTweet(tweets);
  }, [tweets]);

  React.useEffect(() => {
    dispatch(fetchTweetAction());
  }, [dispatch]);

  React.useEffect(() => {
    if (searchTweet.length > 3) {
      dispatch({ type: "RESET_TWEETS" });
      dispatch(fetchTweetAction({ q: searchTweet }));
    }
  }, [searchTweet, dispatch]);

  const handleLoadMore = () => {
    if (searchTweet) {
      // dispatch({ type: "RESET_TWEETS" });
      dispatch(fetchTweetAction({ q: searchTweet }));
    }
  };

  const handleHashtagClick = (hash) => {
    setFilterTweet(hashtags[hash]);
    setSearchTweet(`#${hash}`);
  };

  const handleReset = () => {
    setSearchTweet("");
  };
  //render each hashtag
  const renderTag = () => {
    return (
      <TagWrapper>
        {Object.keys(hashtags).map((hashtag) => (
          <Hashtag
            key={hashtag}
            hashtag={hashtag}
            onClick={() => handleHashtagClick(hashtag)}
          />
        ))}
      </TagWrapper>
    );
  };

  const handleOnChange = (event) => {
    setSearchTweet(event.target.value);
  };

  return (
    <MainContainer>
      <InnerContainer>
        <TweetFeedSection>
          <Title>Tweet Feed</Title>
          <InputStyled
            type='text'
            placeholder='Search by keyword'
            onChange={handleOnChange}
            value={searchTweet}
            renderResetButton={() => (
              <ResetButton onClick={handleReset}>X</ResetButton>
            )}
          />

          {!isDesktop && (
            <HashtagSection>
              <TitleStyled>Filter by hashtag</TitleStyled>
              {renderTag()}
            </HashtagSection>
          )}
          {filterTweet.length === 0 ? (
            <Loader />
          ) : (
            <TweetContainer>
              {filterTweet.map((data, index) => (
                <Tweet
                  key={index}
                  src={data.user.profile_image_url}
                  href={data.user.url}
                  userName={data.user.name}
                  tweetLink={data.user.url}
                  tweetText={data.user.description}
                  renderHashtag={() => (
                    <TagWrapper>
                      {data.entities.hashtags.map((tag, index) => (
                        <Hashtag
                          key={index}
                          hashtag={tag.text}
                          onClick={() => handleHashtagClick(tag.text)}
                        />
                      ))}
                    </TagWrapper>
                  )}
                />
              ))}
              <ButtonContainer>
                <LoadMoreButtonStyled onClick={handleLoadMore}>
                  Load More
                </LoadMoreButtonStyled>
              </ButtonContainer>
            </TweetContainer>
          )}
        </TweetFeedSection>
        {isDesktop && (
          <HashtagSection>
            <TitleStyled>Filter by hashtag</TitleStyled>
            {renderTag()}
          </HashtagSection>
        )}
      </InnerContainer>
    </MainContainer>
  );
};
