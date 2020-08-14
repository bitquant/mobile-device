/*
Based on discussion from here:
https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device

And the last line of this page:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
*/

module.exports = (userAgent) => /Mobi|Android/.test(userAgent)
