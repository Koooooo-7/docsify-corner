import { getIcon } from './icon'
const cornerOptions = {

  // the widtH of the icon image
  width: '',
  // the height of the icon image
  height: '',
  // the repo url
  url: '',
  // the icon name/url
  icon: ''
}

function corner (hook, vm) {
  // check if config the repo
  if (!window.$docsify.repo) {
    return
  }

  hook.mounted(function () {
    const a = document.querySelector('a.github-corner')
    a.href = cornerOptions.url || ' '
    a.innerHTML = getIcon(cornerOptions)
  })
}

// find corner plugin options
window.$docsify.corner = Object.assign(
  cornerOptions,
  window.$docsify.corner
)
window.$docsify.plugins = [].concat(corner, window.$docsify.plugins)
