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
 currently: [
  {
    text: "sde intern @ Instrumus – Built and shipped a full-stack invoice feature from scratch. Now crafting new features and squashing bugs in production.",
    links: { "Instrumus": "#" }
  },
],
previously: [
  {
    text: "mle intern @ Samsung R&D – Explored user behavior via smart home event data. Built LSTM model to identify health patterns as part of Samsung PRISM research.",
    links: { "Samsung R&D": "#" }
  },
],

  future: []
};