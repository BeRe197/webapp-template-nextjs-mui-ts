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
    removeSpecialCharacters,
    replaceWhitespaceByHyphen,
};
