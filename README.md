# `<ColorInput>`

A color picker for [admin-on-rest](https://github.com/marmelab/admin-on-rest) using [React Color](http://casesandberg.github.io/react-color/), a collection of color pickers.

![color-input.gif](color-input.gif)

## Installation

```sh
npm install aor-color-input --save-dev
```

## Usage

```js
import React from 'react';
import {
    Edit,
    TextInput,
    LongTextInput,
} from 'admin-on-rest/mui';

import ColorInput from 'aor-color-input';

export const PostEdit = (props) => (
    <Edit {...props}>
        <TextInput source="title" validation={{ required: true }} />
        <LongTextInput source="body" validation={{ required: true }} />
        <ColorInput source="color" />
    </Edit>
);
```

You can customize the color picker using the `picker` attribute.

```js
<ColorInput source="color" picker="Sketch"/>
```

### Pickers
- Alpha
- Block
- Chrome (default)
- Circle
- Compact
- Github
- Hue
- Material
- Photoshop
- Sketch
- Slider
- Swatches
- Twitter

## react-admin
If you are looking for a react-admin(2.x) support, visit [react-admin-color-input](https://github.com/vascofg/react-admin-color-input).

## License

This library is licensed under the [MIT Licence](LICENSE).
