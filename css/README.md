# CSS
Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Interview Questions:
* CSS Box Model

## CSS Box Model
All HTML elements can be considered as boxes.The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.The size of the box itself is calculated like:

> Width = width + padding-left + padding-right + border-left + border-right
> 
> Height = height + padding-top + padding-bottom + border-top + border-bottom
> 
> Margin is taken out-side of the border and it affects containers width/height and doesn't affect the element.

If you don’t declare a width, and the box has static or relative positioning, the width will remain 100% in width and the padding and border will push inwards instead of outward. But if you explicitly set the width of the box to be 100%, the padding will push the box outward as normal.
Absolute box’s width is only as wide as it needs to be to hold the content.

## Selectors
Here is the list of different types of CSS selectors.

1. Universal Selectors: Universal selectors are *, ~, >, + and [space]
2. Type selectors: Type selectors are used to select elements based on their tag name. For example:

    ```css
    span { 
        font-size: 12px;
    }
    ```
3. Class Selectors: Class selector are used to select elements based on their class. For example:
    
    ```css
    .footer { 
        font-size: 12px;
    }
    ```
4. Attribute selectors: Attribute selectors are used to select elements based in their attribute. For example:
    
   ```css
    input[type="text"] {
        color: red;
    }
    ```
5. Pseudo-Classes and Pseudo-Element: Pseudo-class selectors select elements based on their state. For example: a:hover{color: blue;}. Pseudo elements target specific parts of a HTML element instead of the complete HTML element. For example:
    
    ```css
    p::first-line{
        background: yellow;
    }
    ```
6. ID Selector: Id selector is used to select elements based on their id. For example:
    
    ```css
    #elementId{
        color: orange;
    }
    ```
7. Inline Style: We can put CSS code inside the style attribute of a HTML element.

    ```html
    <p style="font-size: 22px;">Hello</p>
    ```
8. Important!
    ```css
    p {
       color: red !important; 
    }
    ```

> Check file selectorsExamples.html

## Universal selectors
Asterisk (*) : Select all elements, and set their background color to yellow: https://www.w3schools.com/cssref/sel_all.asp
```css
* {
    background-color: yellow;
}
```

Higher (>) : Select and style every "p" element where the parent is a "div" element: https://www.w3schools.com/cssref/sel_element_gt.asp
```css
div > p {
  background-color: yellow;
}
```

Plus (+) : Select and style every "p" element that are placed immediately after "div" elements: https://www.w3schools.com/cssref/sel_element_pluss.asp
```css
div + p {
  background-color: yellow;
}
```

(~) : Set a background color for all "ul" elements that are preceded by a "p" element with the same parent: https://www.w3schools.com/cssref/sel_gen_sibling.asp
```css
p ~ ul {
  background: #ff0000;
}
```

## Important things

About width and height
> **margin, padding, left, right**
>
> It will be relative to element's parent width (even top and bottom margin/padding will be relative to the parent’s width)
> 

```html
<div id="container" style="width: 300px; height: 200px;">
    <div id="box" style="padding-top: 100%; padding-left: 100%;"></div>
</div>
```
What is the rendered #box div width and height respectively? 
Answer: 300px x 300px


> **top, bottom**
>
> It will be relative to element's parent height
> 
> **transform**
>
> It will be relative to the element itself, either its width or its height.
>So here we are working with padding top and left properties, and both are relative to the #container's width and be calculated based on its value.
>

## CSS Origin
Style sheets may have three different origins: 
1. author
2. user
3. user agent

> **Author**: The author specifies style sheets for a source document according to the conventions of the document language. For instance, in HTML, style sheets may be included in the document or linked externally.
>
> **User**: The user may be able to specify style information for a particular document. For example, the user may specify a file that contains a style sheet or the user agent may provide an interface that generates a user style sheet (or behaves as if it did).
>
> **User agent**: Conforming user agents must apply a default style sheet (or behave as if they did). A user agent's default style sheet should present the elements of the document language in ways that satisfy general presentation expectations for the document language (e.g., for visual browsers, the EM element in HTML is presented using an italic font). See A sample style sheet for HTML for a recommended default style sheet for HTML documents.

> Note that the user may modify system settings (e.g., system colors) that affect the default style sheet. However, some user agent implementations make it impossible to change the values in the default style sheet.

Style sheets from these three origins will overlap in scope, and they interact according to the cascade.

The CSS cascade assigns a weight to each style rule. When several rules apply, the one with the greatest weight takes precedence.

By default, rules in author style sheets have more weight than rules in user style sheets. Precedence is reversed, however, for "!important" rules. All user and author rules have more weight than rules in the UA's default style sheet.

## Cascading Order
Sort according to importance (normal or important) and origin (author, user, or user agent). In ascending order of precedence:

1. user agent declarations
2. user normal declarations
3. author normal declarations
4. author important declarations
5. user important declarations