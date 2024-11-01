type LinkPart = {
  type: 'link';
  href: string;
  text: string;
};

type TextPart = {
  type: 'text';
  content: string;
};

type ProcessedPart = LinkPart | TextPart;

export function processText(text: string, links: Record<string, string> | undefined): ProcessedPart[] {
  if (!links) {
    return [{ type: 'text', content: text }];
  }

  const escapeRegExp = (string: string) =>
    string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const phrases = Object.keys(links);
  const regexPattern = phrases
    .map((phrase) => escapeRegExp(phrase))
    .join("|");
  const regex = new RegExp(`(${regexPattern})`, "g");

  const parts = text.split(regex);

  return parts.map((part): ProcessedPart => {
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
