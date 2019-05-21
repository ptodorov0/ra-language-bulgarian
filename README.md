# Bulgarian Messages for React-Admin
 Bulgarian messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-bulgarian
```

## Usage

```js
import bulgarianMessages from 'ra-language-bulgarian';

const messages = {
    'bg': bulgarianMessages,
};
const i18nProvider = locale => messages[locale];

<Admin locale="bg" i18nProvider={i18nProvider}>
  ...
</Admin>
```

## License

This translation is licensed under the MIT License.