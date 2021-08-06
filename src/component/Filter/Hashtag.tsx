import { HashtagsMainContainer } from "./Hashtag.style";

type HashtagProps = {
  hashtag: string;
};

export const Hashtag = ({ hashtag }: HashtagProps) => {
  return <HashtagsMainContainer>#{hashtag}</HashtagsMainContainer>;
};
