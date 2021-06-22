# docsify-corner

![docsify](https://github.com/docsifyjs/docsify/raw/develop/docs/_media/icon.svg)

*A [Docsify](https://docsify.js.org/) plugin for corner configuration enhancement based on [Docsify repo configuration](https://docsify.js.org/#/configuration?id=repo).*

- [x] support more icon. ( `Gitlab`...etc）
- [x] support customized image（`png`、`jpg`、`gif`）.

[![](https://data.jsdelivr.com/v1/package/npm/docsify-corner/badge)](https://www.jsdelivr.com/package/npm/docsify-corner)



<div align="center">
    <img src="https://user-images.githubusercontent.com/33706142/89785634-4e3ff300-db4d-11ea-9eb5-16ae5e1512ee.png" alt="gitlab" width=45%/>
    &emsp;&emsp;
    <img src="https://i.loli.net/2020/08/10/iEWkLXpRCSAv1IN.gif" alt="customer gif" width=45%/>
</div>

## Usage

### Import

Import one of the script in `index.html`.

```html
<script src="//cdn.jsdelivr.net/npm/docsify-corner/dist/docsify-corner.js"></script>
```

```html
<script src="//cdn.jsdelivr.net/npm/docsify-corner/dist/docsify-corner.min.js"></script>
```

### Configuration

Options:

| Option     | Description                         |
| ------     | ----------------------------------- |
| icon       | the icon you want show the corner.  |
| url        | the url for corner link to.         |
| width      | the width of the customized image.  |
| height     | the height of the customized image. |
| color      | the color of the icon.(Optional)    |
| background | the background color of the customized icon.(Optional) |


#### Use the preset icons

Current support default corner types.

| Support Icon Type | Icon argument |
| ----------------- | ------------- |
| `Github`          | github        |
| `Gitlab`          | gitlab        |
| `Spring`          | spring        |
| `Golang`          | golang        |



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

It is hard to adjust the icon to fit the corner, if you wanna add more preset icons, welcome **star** and send a **PR**!

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

