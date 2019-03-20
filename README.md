# boxboxbox

Boxboxbox is a tiny utility wrapper on top of `tachyons.css` to quickly map props to tachyon classes, as well as fix some weird inconsistencies with tachyon classes.

## Getting Started

First, ensure you have `tachyons.css` loaded somewhere inside your app.

```html
<html>
  <head>
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4/css/tachyons.min.css"
    />
  </head>
  <body>
    <!-- My Content -->
  </body>
</html>
```

Next, import the Box component.

```jsx
import { Box } from 'boxboxbox';

export default () => <Box>What goodies lies within the box?</Box>;
```

That's it!

### Understanding boxboxbox props

For the most part, boxboxbox attemps to map tachyon classes to a prop.

So, if we want to add a padding right to a `<Box />`, we'd use the `pr` prop on box.

```jsx
<Box pr="3">Padding right using the 3rd scale</Box>
```

Of course, not all props map one-to-one with tachyon classes. For now, please checkout the type definition file for further details on the mapping

### Why did you create boxboxbox?

I wanted to test out `@pika/pack` for dist builds on a project that I would probably use for future stuff.

Also because tachyons and atomic css is dope.
