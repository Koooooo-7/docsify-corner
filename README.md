# docsify-corner

<p align="center">
    <a href="https://docsify.js.org">
        <img alt="docsify" src="https://github.com/docsifyjs/docsify/raw/develop/docs/_media/icon.svg">
    </a>
</p>

*A `docsify` plugin for corner configuration· enhancement based on [Docsify repo configuration](https://docsify.js.org/#/configuration?id=repo).*

- [x] support more icon. ( `Gitlab`...etc）
- [x] support customized image（`png`、`jpg`、`gif`）.

[![](https://data.jsdelivr.com/v1/package/npm/docsify-corner/badge)](https://www.jsdelivr.com/package/npm/docsify-corner)

## Usage

### Import

Import the one of the script in `index.html`.

```html
<script src="//cdn.jsdelivr.net/npm/docsify-corner/dist/docsify-corner.js"></script>
```

```html
<script src="//cdn.jsdelivr.net/npm/docsify-corner/dist/docsify-corner.min.js"></script>
```

### Configuration

Options:

| Option | Description                         |
| ------ | ----------------------------------- |
| icon   | the icon you want show the corner.  |
| url    | the url for corner link to.         |
| width  | the width of the customized image.  |
| height | the height of the customized image. |

#### Use the preset icons

Current support default corner.

- [x] `Github`
- [x] `Gitlab`
- [x] `Spring`



```html
<script>
  window.$docsify = {
      repo:'true', // set the docsify show the corner
      corner: {
        // the icon link url to another site  
        url: "https://gitlab.com/gitlab-org/gitlab-svgs", 
        // the default preset icon in docsify-corner  
        icon: "gitlab", 
      },
  };
</script>
```

---

#### Use the customized image

You can set your own  image in the corner.

```html
<script>
  window.$docsify = {
      repo:'true',
      corner: {
        url: "https://github.com/Koooooo-7/docsify-corner",
        // you can set the image link here  
        icon: "https://github.githubassets.com/images/icons/emoji/unicode/1f48a.png",
        // the size of the image  
        width: 80,
        height: 80
      },
  };
</script>
```

---

### Contribution

It is hard to adjust the icon to fit the corner to me, so If you wanna add more preset icons, welcome !

This the current [svg icon resources](https://gitlab.com/gitlab-org/gitlab-svgs)  I m working on.

Steps :

- Folk it !
- Install dependencies `npm run install`.
- Create your feature branch: `git checkout -b my-new-feature`.
- Commit your changes: `git commit -am 'Add some feature'.`
- Push to the branch: `git push origin my-new-feature`.
- Submit a pull request.

---

### License

MIT [@Koy](https://github.com/Koooooo-7)

