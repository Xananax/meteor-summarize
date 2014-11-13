# Meteor Summarize

Provides a convenience summarize function that works also on HTML text.
The function is ~~stol...~~ borrowed from [here](http://blog.stevenlevithan.com/archives/get-html-summary).

In the browser and on the server, you get the function:
```js
function summarize(input, maxChars,append);
/**
 * Summarizes a string, even if it contains html characters
 * @param  {String} input the input string
 * @param  {Int} maxChars maximum characters (defaults to 250)
 * @param {string} append what to append to the string. The length of the appended string will be deducted from maxChars.
 * @return {String} the summarized string
 */
```

In templates, you can use:
```html
{{each post}}
    <li>
        {{#summarize}}
            {{text}}
        {{/summarize}}
    </li>
{{/each}}
```

you can specify the maximum number of characters like so:
```html
{{#summarize char=20}}
    {{text}}
{{/summarize}}
```
You can also specify what to append:
```html
{{#summarize chars=50 append=”<a href=’#’ class=’more’>more</a>”>}}
```
(note that the character count on `append` does not account for html tags, so you’re probably better off using `’...’` or similar)

## License
MIT
