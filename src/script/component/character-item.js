class CharacterItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set character(character) {
        this._character = character;
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
                    display: flex;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    background-color: DarkSlateGray;
                    color: white;
                }
               
                .fan-art-character {
                    width: 30%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: center;
                }
               
                .character-info {
                    padding: 24px;
                }
               
                .character-info > h2 {
                    font-weight: lighter;
                }
               
                .character-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
                span {
                    font-size: small;
                    padding: 0 5px;
                    border-radius: 20px;
                }
                [title*="Alive"] {    
                    background-color: green;   
                }
                [title*="Dead"] {
                    background-color: red;
                }
                [title*="unknown"] {
                    background-color: #555;
                }
            </style>
            <img class="fan-art-character" src="${this._character.image}" alt="Fan Art">
            <div class="character-info">
                <h2>${this._character.name}</h2>
                <p> <span title=${this._character.status}>${this._character.status}</span> - ${this._character.species}</p>
                <p>${this._character.gender}</p>
            </div>`;
    }
}

customElements.define("character-item", CharacterItem);