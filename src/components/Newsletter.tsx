import * as React from 'react';
import {useTheme} from '../theming';
import {Card} from './Card';
import Emoji from './Emoji';

type ActionState = 'idle' | 'loading' | 'success' | 'error';

function Newsletter(): React.ReactElement {
  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [status, setStatus] = React.useState<ActionState>('idle');
  const {theme} = useTheme();

  const onSubmit = React.useCallback(async () => {
    setStatus('loading');
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email,
        firstName,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setStatus(response.ok ? 'success' : 'error');
  }, [email, firstName]);

  const renderForm = React.useCallback(() => {
    const isDisabled = status === 'loading' || !email;
    return (
      <div id="newsletter-form">
        <div>
          <input
            value={firstName}
            name="firstName"
            placeholder="First Name (optional)"
            onChange={e => {
              if (status === 'error') {
                setStatus('idle');
              }
              setFirstName(e.target.value);
            }}
          />
          <input
            value={email}
            name="email"
            placeholder="Email"
            onChange={e => {
              if (status === 'error') {
                setStatus('idle');
              }
              setEmail(e.target.value);
            }}
            onKeyUp={e => {
              const ENTER = 13;
              if (e.keyCode === ENTER && !isDisabled) {
                onSubmit();
              }
            }}
          />
        </div>
        <button
          disabled={isDisabled}
          onClick={onSubmit}
          aria-label="Subscribe to newsletter">
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
    );
  }, [email, firstName, status, onSubmit]);

  const renderMessage = React.useCallback(() => {
    const errorMessage = [
      "Couldn't add you to the newsletter.",
      'Ping me at kuliks.anton@gmail.com',
      "and I'll add you to the list.",
    ].join(' ');
    const message =
      status === 'success' ? 'You are in! Thank you! ♥️' : errorMessage;
    const className =
      status === 'success' ? 'subscribe-success' : 'subscribe-error';
    return <p className={`subscribe-msg ${className}`}>{message}</p>;
  }, [status]);

  return (
    <>
      <Card id="newsletter">
        <h1>📬 Newsletter</h1>
        <p id="newsletter-message">
          Sign up for my periodic newsletter about software. No spam, no{' '}
          <Emoji name="shit">💩</Emoji>
        </p>
        {status !== 'success' && renderForm()}
        {(status === 'success' || status === 'error') && renderMessage()}
      </Card>
      <style jsx global>{`
        h1 {
          display: inline;
        }

        #newsletter {
          margin: 30px 0;
        }

        #newsletter-message {
          padding: 12px 0;
        }

        .subscribe-msg {
          padding: 1rem;
          margin-top: 12px;
          border-radius: 12px;
          text-align: center;
        }

        .subscribe-success {
          background-color: ${theme.success};
          color: ${theme.successText};
        }

        .subscribe-error {
          background-color: ${theme.error};
          color: ${theme.errorText};
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
            height: 3em;
          }
        }
      `}</style>
    </>
  );
}

export default Newsletter;
