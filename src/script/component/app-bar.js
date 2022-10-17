class AppBar extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: DarkSlateGray;
                color: white;
            }
            h1 {
                padding: 32px;
                font-family : Segoe UI;
                font-style: unset;
                text-align: center;
            }
        </style>
        <h1>The Rick And Morty</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);