window.addEventListener("load", () => {
  const header = document.getElementById("header"),
    scrollBtn = document.querySelector(".arrow-btn");

  // scroll top button

  const toggleHeader = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      header.classList.add("header-shadow");
    } else {
      header.classList.remove("header-shadow");
    }

    // show scroll button

    if (scrollTop > 100) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  };

  // back to top ===>

  const scrollTopFun = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("hello");
  };

  window.addEventListener("scroll", toggleHeader);
  window.addEventListener("load", toggleHeader);
  scrollBtn.addEventListener("click", scrollTopFun);

  // isotop image gallery ====>

  const container = document.querySelector(".work-content");

  if (container) {
    let portfolioIsotope = new Isotope(container, {
      itemSelector: ".item",
      layoutMode: "fitRows",
    });

    let items = document.querySelectorAll(".work-items li");

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        items.forEach((el) => {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
        portfolioIsotope.arrange({
          filter: item.getAttribute("data-filter"),
        });
      });
    });
  }
});
