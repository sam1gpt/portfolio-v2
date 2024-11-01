// Function to process text and replace phrases with links
export function processText(text: string, links: Record<string, string> | undefined){
    if (!links) {
      return [text];
    }
  
    // Escape special regex characters in phrases
    const escapeRegExp = (string: string) =>
      string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  
    // Create a regex pattern that matches any of the phrases
    const phrases = Object.keys(links);
    const regexPattern = phrases
      .map((phrase) => escapeRegExp(phrase))
      .join("|");
    const regex = new RegExp(`(${regexPattern})`, "g");
  
    // Split the text based on the regex pattern
    const parts = text.split(regex);
  
    // Map over the parts and replace phrases with links
    return parts.map((part) => {
      if (links[part]) {
        return {
          type: 'link',
          href: links[part],
          text: part
        };
      } else {
        return {
          type: 'text',
          content: part
        };
      }
    });
  }