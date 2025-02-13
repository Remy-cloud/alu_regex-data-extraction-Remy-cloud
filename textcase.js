// importing all regex functions to this file to be able to access them
const {
    extractEmails,
    extractURLs,
    extractPhoneNumbers,
    extractCreditCards,
    extractHTMLTags,
    extractHashtags,
} = require('./regex');

// sample inputs from the given data in the task from form fields
const testString = `
    Hashtags:
        #example
        #ThisIsAHashtag
        #123tag

    HTML Tags:
        <p>
        <div class="example">Content</div>
        <img src="image.jpg" alt="description">

    Emails:
        user@example.com
        firstname.lastname@company.co.uk
        email@.123

    Phone Numbers:
        (123) 456-7890
        123-456-7890
        123.456.7890
        1234567890

    URLs:
        https://www.example.com
        http://subdomain.example.org/page
        www.example.co.uk
        aurl.comma,

    Credit Card Numbers:
        1234 5678 9012 3456
        1234-5678-9012-3456
        1234567890123456
`;