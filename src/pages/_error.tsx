import {Emoji, Layout} from '../components';

function Error(): React.ReactElement {
  return (
    <>
      <Layout title="Error" hasNewsletterSection={false}>
        <div id="error-container">
          <p id="emoji">
            <Emoji name="sad">😬</Emoji>
          </p>
          <h1>Oops, this is embarrassing</h1>
          <p className="message first-message">
            Sorry, looks like something went wrong with the website
          </p>
          <p className="message">
            I had to get an alert, so it will be up ASAP
          </p>
        </div>
      </Layout>
      <style jsx>{`
        #emoji {
          font-size: 3rem;
        }

        #error-container {
          margin: auto;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
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

export default Error;
