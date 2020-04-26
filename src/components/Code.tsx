import * as React from 'react';
import Prism from 'prismjs';
import classNames from 'classnames';

type Props = {
  code: string;
  language: string;
};

const MIN_LINES_TO_SHOW_LINE_NUMBERS = 8;

function Code(props: Props): React.ReactElement {
  const {code, language} = props;
  const ref = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [ref]);

  const lines = code.split('\n').length;

  const plugins = classNames('show-language', {
    'line-numbers': lines >= MIN_LINES_TO_SHOW_LINE_NUMBERS,
  });

  return (
    <>
      <pre className={plugins}>
        <code className={`language-${language}`} ref={ref}>
          {code.trim()}
        </code>
      </pre>
      <style jsx>{`
        pre {
          border-radius: 6px;
          margin: 18px 0;
        }
      `}</style>
    </>
  );
}

export default Code;
