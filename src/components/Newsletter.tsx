import * as React from 'react';
import Emoji from './Emoji';

function Newsletter(): React.ReactElement {
  return (
    <>
      <section id="newsletter">
        <h1>Newsletter</h1>
        <p id="newsletter-message">
          Sign up for my periodic newsletter about software. No spam, no{' '}
          <Emoji name="shit">💩</Emoji>
        </p>
        <div id="newsletter-form">
          <div>
            <input name="firstName" placeholder="First Name" />
            <input name="email" placeholder="Email" />
          </div>
          <button>Subscribe</button>
        </div>
      </section>
      <style jsx>{`
        h1 {
          padding-bottom: 5px;
        }
        #newsletter {
          margin: 30px 0;
        }
        #newsletter-message {
          padding: 16px 0;
        }
        #newsletter-form {
          display: flex;
          justify-content: space-between;
        }
        #newsletter-form > input {
          width: 100%;
        }
        #newsletter-form input:nth-child(2) {
          margin-left: 10px;
        }

        @media only screen and (max-width: 600px) {
          #newsletter-form {
            flex-direction: column;
          }

          #newsletter-form > div {
            display: flex;
            flex-direction: column;
          }

          #newsletter-form input {
            margin-top: 10px;
            height: 1.5em;
          }

          #newsletter-form input:nth-child(2) {
            margin-left: 0;
          }

          #newsletter-form button {
            margin-top: 10px;
            height: 2em;
          }
        }
      `}</style>
    </>
  );
}

export default Newsletter;
