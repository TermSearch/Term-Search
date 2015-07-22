// converts a string to a url slug
var encodeSlug = function(str) {
    // replace spaces in URL with underscores
    // replace slashes wiht %47
    return str
        .replace(/ /g, '_')
        .replace(/\//g, '%2F');
};

// converts a url slug back to a string
var decodeSlug = function(str) {
    // replace underscores in URL with spaces
    // replace %47 with forward slashes
    return str
        .replace(/_/g, ' ')
        .replace('%2F', '/');
};

// converts an array of strings
// to an array of objects with the string + url slug
var encodeSlugArr = function(arr) {
    return arr.map(function(str) {
        return {
            termStr: str,
            termUrl: encodeSlug(str)
        };
    });
};

exports.encodeSlug = encodeSlug;
exports.decodeSlug = decodeSlug;
exports.encodeSlugArr = encodeSlugArr;
