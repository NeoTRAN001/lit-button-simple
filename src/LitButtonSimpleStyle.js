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

    .shadow:hover {
        box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
    }

    .shadow:focus {
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

    .success:hover {
        background: #20cb59;
    }

    .success:focus {
        background: #0baa40;
    }

    .warning {
        color: white;
        background: #B5B718;
    }

    .warning:hover {
        background: #c4c61f;
    }

    .warning:focus {
        background: #afb10f;
    }

    .danger {
        color: white;
        background: #B71835;
    }

    .danger:hover {
        background: #c21a39;
    }

    .danger:focus {
        background: #ad102c;
    }

    .info {
        color: white;
        background: #1874B7;
    }

    .info:hover {
        background: #1b7cc2;
    }

    .info:focus {
        background: #126cae;
    }
`;