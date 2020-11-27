import { html, css, LitElement } from 'lit-element';

import { LitButtonSimpleStyle } from './LitButtonSimpleStyle.js';

export class LitButtonSimple extends LitElement {
  static get styles() {
    return LitButtonSimpleStyle;
  }

  static get properties() {
    return {
      textContent: { type: String },
      classButton: { type: String },
      slotInButton:{ type: Boolean }
    };
  }

  constructor() {
    super();
    this.textContent = "Default Text";
  }

  render() {
    return html`
      ${!this.slotInButton 
        ? html`
            <button
                @click=${this._hasBeenClicked}
                class="button ${ this.classButton }"
            >
                ${ this.textContent }
            </button>
        `
        : html`
            <button
                @click=${this._hasBeenClicked}
                class="button ${ this.classButton }"
            >
              <slot name="content"></slot>
            </button>
        `
      }
    `;
  }

  _hasBeenClicked() {
    console.log('Hola');
  }
}
