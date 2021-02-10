const products = [
  { productId: 1, productName: "Товар 1", categoryId: 1 },
  { productId: 2, productName: "Товар 2", categoryId: 2 },
  { productId: 3, productName: "Товар 3", categoryId: 3 },
  { productId: 4, productName: "Товар 4", categoryId: 4 },
  { productId: 5, productName: "Товар 5", categoryId: 5 },
  { productId: 6, productName: "Товар 6", categoryId: 1 },
  { productId: 7, productName: "Товар 7", categoryId: 2 },
  { productId: 8, productName: "Товар 8", categoryId: 3 },
  { productId: 9, productName: "Товар 9", categoryId: 4 },
  { productId: 10, productName: "Товар 10", categoryId: 5 },
  { productId: 11, productName: "Товар 11", categoryId: 1 },
  { productId: 12, productName: "Товар 12", categoryId: 2 },
  { productId: 13, productName: "Товар 13", categoryId: 3 },
  { productId: 14, productName: "Товар 14", categoryId: 4 },
  { productId: 15, productName: "Товар 15", categoryId: 5 },
  { productId: 16, productName: "Товар 16", categoryId: 1 },
  { productId: 17, productName: "Товар 17", categoryId: 2 },
  { productId: 18, productName: "Товар 18", categoryId: 3 },
  { productId: 19, productName: "Товар 19", categoryId: 4 },
  { productId: 20, productName: "Товар 20", categoryId: 5 },
  { productId: 21, productName: "Товар 21", categoryId: 1 },
  { productId: 22, productName: "Товар 22", categoryId: 2 },
  { productId: 23, productName: "Товар 23", categoryId: 3 },
  { productId: 24, productName: "Товар 24", categoryId: 4 },
  { productId: 25, productName: "Товар 25", categoryId: 5 },
];

const categories = [
  { categoryId: 1, categoryName: "Футболки" },
  { categoryId: 2, categoryName: "Майки" },
  { categoryId: 3, categoryName: "Носки" },
  { categoryId: 4, categoryName: "Джинсы" },
  { categoryId: 5, categoryName: "Брюки" },
];

function initTabs() {
  const tabs = document.getElementById("tabs");
  const tabsContent = document.getElementById("tabs__contents");

  for (i of categories) {
    const newTab = document.createElement("div");
    newTab.classList.add("tab", "disabled");
    newTab.innerText = i.categoryName;
    newTab.setAttribute("data-category", i.categoryId);
    tabs.append(newTab);

    const newContentBlock = document.createElement("div");
    newContentBlock.classList.add("contentBlock");
    newContentBlock.setAttribute("data-category", i.categoryId);
    tabsContent.append(newContentBlock);
  }
  const activeTabs = document.getElementsByClassName("tab");
  const activeBlocks = document.getElementsByClassName("contentBlock");

  activeTabs[0].classList.add("active");
  activeBlocks[0].style.display = "flex";
}

function initProducts() {
  for (i of products) {
    const newProduct = document.createElement("div");
    newProduct.classList.add("product");
    newProduct.setAttribute("data-id", i.productId);
    newProduct.setAttribute("data-category", i.categoryId);
    newProduct.setAttribute("data-name", i.productName);

    const imgInner = document.createElement("div");
    imgInner.classList.add("imgBlock");
    newProduct.append(imgInner);

    const img = document.createElement("img");
    img.classList.add("imgPicture");
    img.setAttribute("src", "../img/1.png");
    img.setAttribute("alt", i.productName);
    imgInner.append(img);

    const nameProduct = document.createElement("div");
    nameProduct.classList.add("nameTitle");
    nameProduct.innerText = i.productName;
    newProduct.append(nameProduct);

    document
      .querySelector(".contentBlock[data-category='" + i.categoryId + "']")
      .append(newProduct);
  }
}

function switchTabContent(target) {
  const clickedTab = target.currentTarget;
  const activeTabs = document.getElementsByClassName("tab");
  const contentBlocks = document.getElementsByClassName("contentBlock");
  for (tab of activeTabs) {
    tab.classList.remove("active");
  }
  clickedTab.classList.add("active");

  for (contentBlock of contentBlocks) {
    if (
      contentBlock.getAttribute("data-category") ===
      clickedTab.getAttribute("data-category")
    ) {
      contentBlock.style.display = "flex";
    } else {
      contentBlock.style.display = "none";
    }
  }
}

function addOnclickEventHandlerToTabs() {
  const tabs = document.getElementsByClassName("tab");
  for (tab of tabs) {
    tab.addEventListener("click", () => switchTabContent(event), false);
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  initTabs();
  initProducts();
  addOnclickEventHandlerToTabs();
});
