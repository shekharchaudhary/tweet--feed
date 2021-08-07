import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  let mediaMatch;
  if (typeof window !== "undefined") {
    mediaMatch = window.matchMedia(query);
  }

  const [matches, setMatches] = useState(mediaMatch && mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

export default useMediaQuery;
