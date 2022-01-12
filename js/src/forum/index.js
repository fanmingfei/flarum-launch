import app from 'flarum/app'
app.initializers.add('fanmingfei/flarum-launch', () => {

  console.log('[fanmingfei/flarum-launch] Hello, forum!');
  let launchBox
  let launchStyle = document.querySelector('#launchStyle')
  if (innerWidth < innerHeight) {
    launchBox = document.createElement('div')
    launchBox.className = `launchBox`

    const styles = document.createElement('style')

    styles.textContent = `
      .launchBox {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 99999999;
      background-color: #fff;
      # background-image: url(//src.fanmingfei.com/images/80e7d599526c2ca9621b71cbe6a629a8.jpg);
      background-size: 100vw;
      background-position: center;
      background-repeat: no-repeat;
    }`

    document.head.append(styles)
    document.body.append(launchBox)
    setTimeout(() => {
      styles.remove()
      launchStyle.remove()
      launchBox.remove()
    }, 3000)
  } else {
    launchStyle.remove()
  }

  window.addEventListener('load', () => {
    console.log(123, app.forum.attribute('ImageUrl'))
    if (launchBox) {
      launchBox.style.backgroundImage = `url(${app.forum.attribute('ImageUrl')})`
    }
  })
});
