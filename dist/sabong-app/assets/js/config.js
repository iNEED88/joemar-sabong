(function () {
  var primary = localStorage.getItem("primary") || "#7366FF";
  var secondary = localStorage.getItem("secondary") || "#838383";
  var success = localStorage.getItem("success") || "#65c15c";

  window.SabongAdminConfig = {
    primary: primary,
    secondary: secondary,
    success: success,
  };
})();
