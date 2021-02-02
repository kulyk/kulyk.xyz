import {Card} from './Card';
import Emoji from './Emoji';

export type CalloutProps = {
  emoji: {
    name: string;
    value: string;
  };
  children: React.ReactNode;
};

const defaultProps = {
  emoji: {
    name: 'warning',
    value: '⚠️',
  },
};

export function Callout({children, emoji}: CalloutProps): React.ReactElement {
  return (
    <>
      <Card className="callout">
        <div>
          <Emoji name={emoji.name}>{emoji.value}</Emoji>
        </div>
        <p className="callout-text">{children}</p>
      </Card>
      <style jsx global>{`
        .callout {
          display: flex;
          padding: 16px;
        }
        .callout-text {
          margin-left: 12px;
        }
      `}</style>
    </>
  );
}

Callout.defaultProps = defaultProps;
