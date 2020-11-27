import { css } from 'lit-element';

export const LitButtonSimpleStyle = css`
    .button {
        background: none;
        border: 2px solid;
        font: inherit;
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
        cursor: pointer;
    }

    .button:hover {
        box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
    }

    .button:focus {
        box-shadow: 0px 0px 0px rgba(0,0,0,0.4);
    }

    .radius {
        border-radius: 18px;
    }

    .small {
        padding: 0.6em 1em;
    }

    .large {
        margin: 0.5em;
        padding: 1em 4em;
    }

    .success {
        color: white;
        background: #18B74D;
    }

    .warning {
        color: white;
        background: #B5B718;
    }

    .danger {
        color: white;
        background: #B71835;
    }

    .info {
        color: white;
        background: #1874B7;
    }
`;