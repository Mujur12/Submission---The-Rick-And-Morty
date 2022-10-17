import '../component/character-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const characterListElement = document.querySelector("character-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchCharacter(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        characterListElement.characters = results;
    };

    const fallbackResult = message => {
        characterListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    const showCharacters = () => {
        DataSource.listCharacter()
            .then(renderResult)
            .catch(fallbackResult)
    }

    showCharacters()
};

export default main;