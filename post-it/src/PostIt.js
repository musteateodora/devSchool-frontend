import { LitElement, html, css } from "lit-element";

export class PostIt extends LitElement {
  static get styles() {
    return css`
      div {
        background: #ffff88;
        margin: 25px;
        width: 250px;
        min-height: 250px;
        max-height: 250px;
        font-family: "Reenie Beanie";
        font-size: 22px;
        text-align: center;
        padding: 10px;
        box-shadow: 5px 10px #888888;
      }
    `;
  }
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      date: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.title = "Title";
    this.description = "Description";

    //console.log("I am constructed");
  }
  connectedCallback() {
    super.connectedCallback();
    //console.log("I am connected");
  }

  render() {
    const currentDate = this.date ? new Date().toDateString() : "";
    return html`
      <div>
        <p><b>${this.title}</b></p>
        <p><i>${this.description}</i></p>
        <p>${currentDate}</p>
      </div>
    `;
  }

  onClick(event) {
    console.log(event);
  }
}
