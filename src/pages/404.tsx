/* eslint-disable jsx-a11y/no-autofocus */

import Terminal from 'react-console-emulator';
import {Emoji, Layout} from '../components';

function PageNotFound(): React.ReactElement {
  return (
    <>
      <Layout title="Page Not Found">
        <div id="container-404">
          <p id="emoji-404">
            <Emoji name="sad">😔</Emoji>
          </p>
          <h1>This page does not exist</h1>
          <p className="message first-message">
            However, here is the website CLI.
          </p>
          <p className="message">
            I hope you will be able to find what you were looking for
          </p>
          <Terminal
            autoFocus
            promptLabel={'$ '}
            style={{marginTop: 20, minWidth: 450}}
          />
        </div>
      </Layout>
      <style jsx>{`
        #emoji-404 {
          font-size: 3rem;
        }

        #container-404 {
          margin: auto;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          width: 90%;
          text-align: center;
        }

        .message {
          text-align: center;
          padding: 3px 0;
        }

        .first-message {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}

export default PageNotFound;
