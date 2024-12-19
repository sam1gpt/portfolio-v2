interface NewsItem {
    text: string;
    links?: Record<string, string>;
  }
  
  interface NewsFeed {
    future: NewsItem[];
    currently: NewsItem[];
    previously: NewsItem[];
  }
  
export const newsFeed: NewsFeed = {
future: [
  {text: "codepoint fellow @ Sutter Hill Ventures", links: {"Sutter Hill Ventures": "https://jeffburke.substack.com/p/sutter-hill-ventures-the-silent-builders"}},
],

currently: [
    {text: "swe (infra team) @ Sigma Computing", links: {"Sigma Computing": "https://www.sigmacomputing.com/"}},
    {text: "distributed systems researcher @ SkyLab", links: {"SkyLab": "https://sky.cs.berkeley.edu/project/rollbaccine/"}},
    {text: "internal chair & backend dev @ BerkeleyTime", links: {"BerkeleyTime": "https://berkeleytime.com"}},
],
previously: [      
    {text: "course staff for cs61a (su22, fa22, sp23), cs61c (su23), cs162 (fa24)", links: {"cs61a": "https://cs61a.org", "cs61c": "https://cs61c.org", "cs162": "https://cs162.eecs.berkeley.edu"}},
],
};