(function () {
  // 检查 .markdown 是否加载完成
  function observeMarkdown() {
    var targetNode = document.querySelector(".markdown");
    if (!targetNode) {
      setTimeout(observeMarkdown, 1000);
      return;
    }

    observeImages();
  }

  //
  function observeImages() {
    var images = document.querySelectorAll(".markdown img");

    images.forEach(function (img) {
      if (img.naturalWidth) {
        handleImage(img);
      } else {
        img.addEventListener("load", function () {
          handleImage(img);
        });
      }
    });
  }

  //
  function handleImage(img) {
    var imgWidth = img.width;
    var naturalWidth = img.naturalWidth;

    if (imgWidth < naturalWidth) {
      img.addEventListener("mouseenter", function () {
        img.style.cursor = "zoom-in";
      });

      img.addEventListener("click", function () {
        // 点击图片，在页面上渲染一个大图
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
        imgElement.src = img.src;
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
      });
    }
  }

  observeMarkdown();
})();
