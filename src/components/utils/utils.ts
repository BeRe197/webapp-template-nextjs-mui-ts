const onEmailClick = (email: string): void => {
    window.location.href = "mailto:" + email;
};

const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
};

const replaceEmailWidthFunction = (htmlText: string): string => {
    const email_regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    return htmlText.replace(
        email_regex,
        "<a href='' onclick=" + '"' + "sendEmail(" + "'$1'" + ")" + '"' + ">$1</a>"
    );
};

const addIDsToHeader = (htmlText: string): string => {
    // Parse the HTML content into a DOM element
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");

    // Get all header elements in the DOM
    const headerElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

    // Assign IDs to header elements
    headerElements.forEach((header) => {
        header.id = replaceWhitespaceByHyphen(
            removeSpecialCharacters(header.textContent || "")
        );
    });

    // return the modified HTML String
    return doc.body.innerHTML;
};

const removeSpecialCharacters = (text: string): string => {
    return text.replaceAll(/[^a-zA-Z0-9\s]/g, "");
};

const replaceWhitespaceByHyphen = (text: string): string => {
    return text.replaceAll(" ", "-");
};

export {
    onEmailClick,
    copyToClipboard,
    replaceEmailWidthFunction,
    addIDsToHeader,
    removeSpecialCharacters,
    replaceWhitespaceByHyphen,
};
