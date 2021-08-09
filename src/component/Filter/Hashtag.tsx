import { HashtagsMainContainer } from "./Hashtag.style";

type HashtagProps = {
  hashtag: string;
  onClick: () => void;
};

export const Hashtag = ({ hashtag, onClick }: HashtagProps) => {
  return (
    <HashtagsMainContainer onClick={onClick}>#{hashtag}</HashtagsMainContainer>
  );
};
