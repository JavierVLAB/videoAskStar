// remember this reference https://codepen.io/videoaskhelp/pen/PoNrLqv?editors=1010
console.log('new update')

let widget = null
let modal = null

window.addEventListener('load', () => {
  const config = {
    "kind": "widget",
    "url": "https://www.videoask.com/fn5pz0q1v",
    "options": {
      "widgetType": "VideoThumbnailExtraLarge",
      "text": "Talk to me",
      "backgroundColor": "#E26D5A",
      "position": "bottom-right",
      "dismissible": true
    }
  }
  
  const callbacks = {
    //onLoadModal: ({element}) => {modal = element}
    onLoadModal: ({element}) => {
      modal = element
    }
  }

  window.videoask.loadEmbed(config, callbacks)
  .then((element) => {widget = element})

})

