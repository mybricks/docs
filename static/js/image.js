(function () {
  /**
   * 为 body 添加 mousemove 事件
   *
   * 如果鼠标移动到 .markdown 标签内的 img 元素上
   * 如果该 img 元素的宽度小于自然宽度，鼠标变为放大镜
   *
   *
   */
  document.body.addEventListener("mousemove", function (e) {
    var target = e.target;
    if (target.tagName === "IMG" && target.closest(".markdown")) {
      var imgWidth = target.width;
      var naturalWidth = target.naturalWidth;

      if (imgWidth < naturalWidth) {
        target.style.cursor = "zoom-in";
      }
    }
  });

  /**
   * 为 body 添加 click 事件
   * 如果点击的是 .markdown 标签内的 img 元素
   * 如果该 img 元素的宽度小于自然宽度，显示大图
   * 点击大图，关闭大图
   * 禁用滚动
   */

  document.body.addEventListener("click", function (e) {
    var target = e.target;
    if (target.tagName === "IMG" && target.closest(".markdown")) {
      var imgWidth = target.width;
      var naturalWidth = target.naturalWidth;

      if (imgWidth < naturalWidth) {
        var imgContainer = document.createElement("div");
        imgContainer.style.position = "fixed";
        imgContainer.style.top = "0";
        imgContainer.style.left = "0";
        imgContainer.style.width = "100%";
        imgContainer.style.height = "100%";
        imgContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        imgContainer.style.zIndex = "9999";
        imgContainer.style.display = "flex";
        imgContainer.style.justifyContent = "center";
        imgContainer.style.alignItems = "center";

        var imgElement = document.createElement("img");
        imgElement.src = target.src;
        imgElement.style.maxWidth = "100%";
        imgElement.style.maxHeight = "100%";
        imgElement.style.cursor = "zoom-out";
        imgElement.addEventListener("click", function () {
          imgContainer.remove();
          document.body.style.overflow = "auto";
        });

        imgContainer.appendChild(imgElement);
        document.body.appendChild(imgContainer);

        // 禁用滚动
        document.body.style.overflow = "hidden";
      }
    }
  });
})();
