import {useTheme} from '../theming';

type Props = {
  children: React.ReactNode;
};

function InlineCode(props: Props): React.ReactElement {
  const {children} = props;
  const {theme} = useTheme();
  return (
    <>
      <code className="inline-code">{children}</code>
      <style jsx>{`
        .inline-code {
          background-color: ${theme.code.background};
          color: ${theme.code.text};
          border-radius: 6px;
          padding: 3px 5px;
          text-align: left;
          white-space: pre-wrap;
          word-spacing: normal;
          word-break: normal;
        }
      `}</style>
    </>
  );
}

export default InlineCode;
