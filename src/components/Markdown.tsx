/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {useTheme} from '../theming';
import InlineCode from './InlineCode';
import Code from './Code';

const LINE_HEIGHT = 1.65;

type Props = {
  content: string;
};

type HeadingProps = React.HTMLProps<HTMLHeadingElement>;

const headingLevel = {
  1: (props: HeadingProps): React.ReactElement => <h1 {...props} />,
  2: (props: HeadingProps): React.ReactElement => <h2 {...props} />,
  3: (props: HeadingProps): React.ReactElement => <h3 {...props} />,
  4: (props: HeadingProps): React.ReactElement => <h4 {...props} />,
  5: (props: HeadingProps): React.ReactElement => <h5 {...props} />,
  6: (props: HeadingProps): React.ReactElement => <h6 {...props} />,
};

export function HeadingRenderer(props: {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}): React.ReactElement {
  const {level, children} = props;
  const Heading = headingLevel[level];
  return (
    <>
      <Heading className="heading">{children}</Heading>
      <style jsx>{`
        .heading {
          margin: 36px 0 10px 0;
        }
      `}</style>
    </>
  );
}

export function ParagraphRenderer(props: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <p className="paragraph">{props.children}</p>
      <style jsx>{`
        .paragraph {
          line-height: ${LINE_HEIGHT};
          margin: 0px 0 24px 0;
        }
      `}</style>
    </>
  );
}

export function BlockQuoteRenderer(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const {theme} = useTheme();
  return (
    <>
      <blockquote>{props.children}</blockquote>
      <style jsx global>{`
        blockquote {
          background-color: ${theme.code.background};
          color: ${theme.code.text};
          border-radius: 6px;
          padding: 12px 18px;
          text-align: left;
          white-space: pre-wrap;
          word-spacing: normal;
          word-break: normal;
          margin: 0;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0;
          margin-inline-end: 0;
        }
        blockquote > p.paragraph {
          margin: 0.5em 1em !important;
        }
      `}</style>
    </>
  );
}

export function CodeRenderer(props: {
  value: string;
  language: string;
}): React.ReactElement {
  return <Code code={props.value} language={props.language} />;
}

export function ImageRenderer(props: {
  src: string;
  alt: string;
}): React.ReactElement {
  const {src, alt} = props;
  return (
    <>
      <img src={src} alt={alt} className="image" />
      <style jsx>{`
        .image {
          max-width: 100%;
          box-sizing: initial;
        }
      `}</style>
    </>
  );
}

export function ListItemRenderer(props: {
  children: React.ReactNode;
}): React.ReactElement {
  const {children} = props;
  return (
    <>
      <li className="list-item">{children}</li>
      <style jsx>{`
        .list-item {
          line-height: ${LINE_HEIGHT};
          margin: 10px 0;
        }
      `}</style>
    </>
  );
}

const styledMarkdown = {
  heading: HeadingRenderer,
  paragraph: ParagraphRenderer,
  blockquote: BlockQuoteRenderer,
  code: CodeRenderer,
  inlineCode: InlineCode,
  image: ImageRenderer,
  listItem: ListItemRenderer,
};

function Markdown(props: Props): React.ReactElement {
  const {content} = props;
  return (
    <ReactMarkdown
      source={content}
      className="markdown-container"
      linkTarget="_blank"
      renderers={styledMarkdown}
      plugins={[gfm]}
    />
  );
}

export default Markdown;
