
    class DynamicGraph {
      static loadImg(url) {
        const img = new Image()
        img.src = url
        return new Promise((resolve, reject) => {
          img.onload = () => resolve(img)
        })
      }

      el
      loaded = false // 图片是否加载完成
      _renderEl // 渲染的 canvas
      _renderCtx// canvas上下文
      _cacheImg // 缓存图片
      _isHover = false // 鼠标是否在图像上
      cacheOffsetX = 0 // 图片加载完成后用户没有响应则使用该值
      _isRenderIntoEl = false // canvas是否已经在容器中
      _elPropertyCache = {
        width: 0,
        height: 0
      }
      _imgPropertyCache = {
        width: 0,
        height: 0
      }

      // evnets
      onchange
      onbegin // 当移动开始时
      onend // 移动结束

      constructor(el, option = { onchange: () => { }, onbegin: () => { }, onend: () => { } }) {
        this.el = el
        this.onchange = option.onchange
        this.onbegin = option.onbegin
        this.onend = option.onend

        this.init()
      }
      init() {
        const { position } = window.getComputedStyle(this.el)

        if (position === 'static')
          this.el.style.position = 'relative'

        const { width, height } = window.getComputedStyle(this.el);
        this._elPropertyCache.width = parseInt(width)
        this._elPropertyCache.height = parseInt(height)

        this.el.addEventListener('mouseenter', () => this.loadImg())
        this.el.addEventListener('mousemove', (ev) => this.moveGraph(ev))
        this.el.addEventListener('mouseleave', () => this.clearCanvas())
      }

      async loadImg() {
        if (!this.loaded) {
          const img = await DynamicGraph.loadImg(this.el.getAttribute("data-url"))
          document.body.appendChild(img)

          const { width, height } = window.getComputedStyle(img)

          this._imgPropertyCache.width = parseInt(width)
          this._imgPropertyCache.height = parseInt(height)

          img.remove()
          this._cacheImg = img
          this.loaded = true

          if (this._isHover) this.moveGraph()
        }
      }
      createRender() {
        if (!this.loaded) return
        if (this._renderCtx) return

        const canvas = document.createElement('canvas')

        canvas.width = this._elPropertyCache.width
        canvas.height = this._elPropertyCache.height
        canvas.style.position = "absolute"
        canvas.style.top = 0
        canvas.style.left = 0

        this._renderEl = canvas
        this._renderCtx = this._renderEl.getContext('2d')
      }

      moveGraph(ev) {
        this._isHover = true
        ev && (this.cacheOffsetX = ev.offsetX)
        this.createRender()

        if (!this._renderCtx) return
        if (!this._isRenderIntoEl) {
          this.el.appendChild(this._renderEl)
          this._isRenderIntoEl = true
          this.onbegin()
        }
        const { percentage, offsetTopPixed } = this.computTransformInfo(this.cacheOffsetX)

        this._renderCtx.save()
        this._renderCtx.translate(0, -offsetTopPixed)
        this._renderCtx.drawImage(this._cacheImg, 0, 0)
        this._renderCtx.restore()

        this.onchange({ percentage })
      }

      computTransformInfo(offsetX) {
        // debugger
        const percentage = offsetX / this._elPropertyCache.width
        const pages = this._imgPropertyCache.height / this._elPropertyCache.height
        const curtPageIndex = Math.round(pages * percentage)
        const offsetTopPixed = curtPageIndex * this._elPropertyCache.height
        return { percentage, offsetTopPixed }
      }

      clearCanvas() {
        this._isHover = false
        this._renderEl.remove()
        this._isRenderIntoEl = false
        this.onend()
      }
    }
    export default DynamicGraph