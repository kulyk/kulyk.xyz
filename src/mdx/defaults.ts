import * as Renderers from '../components/Markdown';
import InlineCode from '../components/InlineCode';

export const DEFAULT_COMPONENTS = {
  heading: Renderers.HeadingRenderer,
  paragraph: Renderers.ParagraphRenderer,
  blockquote: Renderers.BlockQuoteRenderer,
  code: Renderers.CodeRenderer,
  inlineCode: InlineCode,
  image: Renderers.ImageRenderer,
  listItem: Renderers.ListItemRenderer,
};
