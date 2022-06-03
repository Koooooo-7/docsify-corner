import { getIcon } from './icon'
const cornerOptions = {

  // the widtH of the icon image
  width: '',
  // the height of the icon image
  height: '',
  // the repo url
  url: '',
  // the target, align to site by default
  target: '',
  // the icon name/url
  icon: '',
  // the text of the title attribute is displayed as a tooltip
  title: '',
  // the corner background color, default false to use default color
  background: false,
  // the icon color, default false to use default color
  color: false
}

function corner (hook, vm) {
  // check if config the repo
  if (!window.$docsify.repo) {
    return
  }

  hook.mounted(function () {
    const a = document.querySelector('a.github-corner')
    a.innerHTML = getIcon(cornerOptions)

    cornerOptions.url && (a.href = cornerOptions.url)
    cornerOptions.title && (a.title = cornerOptions.title)

    if (cornerOptions.target) {
      a.target = cornerOptions.target
    }

    // icon color config
    const cl = document.querySelector('.github-corner svg')

    if (cl && cornerOptions.background) {
      cl.style.setProperty('fill', cornerOptions.background)
    }

    if (cl && cornerOptions.color) {
      cl.style.setProperty('color', cornerOptions.color)
    }
  })
}

// find corner plugin options
window.$docsify.corner = Object.assign(
  cornerOptions,
  window.$docsify.corner
)
window.$docsify.plugins = [].concat(corner, window.$docsify.plugins)
