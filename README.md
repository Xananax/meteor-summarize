# Meteor Summarize

Provides a convenience summarize function that works also on HTML text.
The function is ~~stol...~~ borrowed from [here](http://blog.stevenlevithan.com/archives/get-html-summary).

In the browser and on the server, you get the function:
```js
function summarize(input, maxChars);
/**
 * Summarizes a string, even if it contains html characters
 * @param  {String} input the input string
 * @param  {Int} maxChars maximum characters (defaults to 250)
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

## License
MIT