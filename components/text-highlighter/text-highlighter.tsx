import React, { useMemo } from 'react';

import Text, { TextProps } from '../text';

export interface TextHighlighterProps extends TextProps {
  highlight?: string;
  children: string;
}

export function TextHighlighter(props: TextHighlighterProps) {
  const { children: text, highlight, ...rest } = props;

  const handleRender = useMemo(() => {
    if (!highlight || highlight.length === 0) {
      return text;
    }

    const re = new RegExp(highlight, 'ig');
    const matches = Array.from(text.matchAll(re));

    if (!matches || matches.length === 0) {
      return text;
    }

    let parts = [];
    let lastIndex = 0;

    matches.forEach((match) => {
      const start = match.index!;
      const end = start + match[0].length;

      // Add text before the match
      if (start > lastIndex) {
        parts.push(text.substring(lastIndex, start));
      }

      // Add the matched text in bold
      parts.push(<Text variant="bold">{text.substring(start, end)}</Text>);

      // Update lastIndex to the end of the current match
      lastIndex = end;
    });

    // Add remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  }, [text, highlight]);

  return <Text {...rest}>{handleRender}</Text>;
}

export default TextHighlighter;
