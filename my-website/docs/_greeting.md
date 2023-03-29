---
description: Create a doc page with rich content.
---

# Hello from Docusaurus

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '12px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

## Example 2

<span style={{backgroundColor: 'red'}}>Foo</span>

## Code

```js
console.log('Every repo must come with a mascot.');
```