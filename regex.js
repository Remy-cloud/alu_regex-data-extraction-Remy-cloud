//Regex that extract hashtags

const hashtagregex = (text) => {
    const hashtagRegex = /#\w+/g;
    return text.match(hashtagRegex);
};

//regex to extract tags 

const extractHTMLTags = (text) => {
    const htmlTagRegex = /<\/?[a-z][\s\S]*?>/gi;
    return text.match(htmlTagRegex);
};

//regex to extract emails 

const extractEmails = (text) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(emailRegex);
};

//regex to extract phone numbers

const extractPhoneNumbers = (text) => {
    const phoneNumberRegex = /(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]\d{4}/g;
    return text.match(phoneNumberRegex);
};

// regex to extract URLs

const extractURLs = (text) => {
    const urlRegex = /(https?:\/\/[^\s/$.?#].[^\s]*)/g;
    return text.match(urlRegex);
};

//regex to extract credit card numbers

const extractCreditCardNumbers = (text) => {
    const creditCardRegex = /\b(?:\d{4}[- ]?){3}\d{4}\b/g;
    return text.match(creditCardRegex);
};

