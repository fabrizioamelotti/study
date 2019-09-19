# CSS
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Interview Questions:
* CSS Box Model

## CSS Box Model
All HTML elements can be considered as boxes.The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.The size of the box itself is calculated like -

Width = width + padding-left + padding-right + border-left + border-right
Height = height + padding-top + padding-bottom + border-top + border-bottom
Margin is taken out-side of the border and it affects containers width/height and doesn't affect the element.

If you don’t declare a width, and the box has static or relative positioning, the width will remain 100% in width and the padding and border will push inwards instead of outward. But if you explicitly set the width of the box to be 100%, the padding will push the box outward as normal.
Absolute box’s width is only as wide as it needs to be to hold the content