(function timeout() {
  if (document.readyState == "complete") {
    ifReady();
  } else {
    setTimeout(timeout, 0);
  };
})();

var metaThemeColor = document.getElementById("mytheme-color"),
  myThemeColor = metaThemeColor.getAttribute("content"),
  sidebarOpened = false;

window.addEventListener("scroll", function (event) {
  if (window.scrollY < headerHeight() - 48) {
    document.body.classList.remove("scrolling");
    metaThemeColor.setAttribute("content", (" " + document.body.className + " ").indexOf(" has-header-image ") >= 0 ? "#020202" : myThemeColor);
  } else {
    document.body.classList.add("scrolling");
    metaThemeColor.setAttribute("content", myThemeColor);
  };
});

function headerHeight() {
  if ((" " + document.body.className + " ").indexOf(" has-header-image ") > -1) {
    return document.getElementsByTagName("header-image")[0].clientHeight;
  };
  return 110;
};

function ifReady() {
  if ((" " + document.body.className + " ").indexOf(" has-header-image ") >= 0) {
    metaThemeColor.setAttribute("content", "#020202");
  };
  if ((" " + document.body.className + " ").indexOf(" has-sidebar ") >= 0) {
    document.getElementById("sidebar-toggle").addEventListener("click", function (event) {
      sidebar.classList.add("show");
      sidebarOpened = true;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    });
    document.getElementById("sidebar-close").addEventListener("click", function (event) {
      sidebar.classList.remove("show");
      sidebarOpened = false;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    });
    var sidebar = document.getElementById("sidebar");
    sidebar.addEventListener("click", function (event) {
      sidebar.classList.remove("show");
      sidebarOpened = false;
      event.stopPropagation();
      event.stopImmediatePropagation();
    });
    var sidebarContent = document.getElementById("sidebar-container");
    sidebarContent.addEventListener("click", function (event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
    });
  };
};
