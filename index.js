console.log("tester")

var textarea = document.getElementById("inputText");

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var inputText = document.querySelector(".inputText").value;
    var inputPhrase = document.querySelector(".inputPhrase").value;
    console.log(inputText);
    console.log(inputPhrase);
    searchInText(inputText, inputPhrase)
});

function searchInText(text, searchPhrase)
{
    var regex = new RegExp(searchPhrase, "gi");
    var matches = [...text.matchAll(regex)];
    if (matches.length > 0) {
        console.log("'" + searchPhrase + "' found " + matches.length + " times");
        for(match of matches)
        {
            console.log("Found at index " + match.index);
        };
    } else {
        console.log("'" + searchPhrase + "' not found");
    }
}

function createSearchResultElement(originalText, searchPhrase, matchIndexes)
{
    // norejau sukurti p elementa i kuri kaip spanai sudedamos ieskomos frazes, tada idedamas i doma, tiek spejau
    var totalLength = originalText.length
    var searchLength = searchPhrase.length

    var resultElement = document.createElement("span");
    resultElement.textContent = searchPhrase;


    var paragraph = document.createElement("p");
    for(match of matchIndexes)
    {

    }
}