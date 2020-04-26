type Props = {
  children: React.ReactNode;
};

function InlineCode(props: Props): React.ReactElement {
  const {children} = props;
  return (
    <>
      <code className="inline-code">{children}</code>
      <style jsx>{`
        .inline-code {
          background-color: hsla(0, 0%, 58.8%, 0.3);
          color: #fff;
          border-radius: 6px;
          padding: 3px 5px;
          direction: ltr;
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
