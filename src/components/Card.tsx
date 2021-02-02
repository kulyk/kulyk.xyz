import classNames from 'classnames';
import {useTheme} from '../theming';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({className, ...props}: CardProps): React.ReactElement {
  const {theme} = useTheme();
  return (
    <>
      <div className={classNames('card', className)} {...props} />
      <style jsx>{`
        padding: 16px 24px;
        background-color: ${theme.card.background};
        border-radius: 16px;
      `}</style>
    </>
  );
}
