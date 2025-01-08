let titles = document.querySelectorAll(".maincontianer--left-text-title");
let prices = document.querySelectorAll(".maincontianer--left-text-price");
let btns = document.querySelectorAll(".maincontianer--left-box-btn");
let rightsidebar = document.querySelector(".maincontianer--right-sidebar");
let sidebartext = document.querySelector(".maincontianer--right-sidebar-text");
let boxsidebar = document.querySelector(".box-sidebar");
let maincontianerrightsidebartexts = document.querySelector(
  ".maincontianer--right-sidebar-"
);
let maincontianerrightsidebaricon = document.querySelector(
  ".maincontianer--right-sidebar-icon"
);
let totalprice = document.querySelector(".totalprice");

let totalPrice = 0;
let addedProducts = {};

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    maincontianerrightsidebaricon.innerHTML = "";
    let mainorder = document.querySelector(".mainorder-1");

    let title = titles[index].textContent;
    let price = parseFloat(prices[index].textContent.replace("$", "").trim());

    if (addedProducts[title]) {
      addedProducts[title].quantity += 1;
      let existingDiv = addedProducts[title].element;
      let newQuantity = existingDiv.querySelector(".numberproduct");
      newQuantity.innerHTML = addedProducts[title].quantity;

      totalPrice += price;
      totalprice.innerHTML = `$${totalPrice.toFixed(2)}`;
    } else {
      mainorder.style.display = "block";

      let newdivmain = document.createElement("div");
      let newdiv = document.createElement("div");
      let newdiv2 = document.createElement("div");
      let newdiv3 = document.createElement("div");
      let newdiv4 = document.createElement("div");
      let newdiv5 = document.createElement("div");
      let newtitle = document.createElement("p");
      let newnimber = document.createElement("p");
      let newprice = document.createElement("p");
      let hr = document.createElement("hr");
      let newi = document.createElement("i");

      newi.classList.add("fas", "fa-times", "i-icon");
      newdiv.classList.add("maincontianer-side-bar");
      newtitle.classList.add("titleproduct");
      newnimber.classList.add("numberproduct");
      newprice.classList.add("priceproduct");
      newdiv5.classList.add("newdiv5");
      newdiv4.classList.add("newdiv4");

      newtitle.innerHTML = title;
      newnimber.innerHTML = 1;
      newprice.innerHTML = `${price.toFixed(2)}`;

      totalPrice += price;
      totalprice.innerHTML = `${totalPrice.toFixed(2)}`;

      mainorder.style.display = "block";

      newdiv5.append(newnimber, newprice);
      newdiv3.append(newtitle);
      newdiv4.append(newi);
      newdiv2.append(hr);
      newdiv.append(newdiv3, newdiv4);
      newdivmain.append(newdiv, newdiv5, newdiv2);

      maincontianerrightsidebartexts.append(newdivmain);

      addedProducts[title] = {
        quantity: 1,
        element: newdivmain,
      };

      newdiv4.addEventListener("click", () => {
        newdivmain.remove();
      });
    }

    console.log(`Title: ${title}, Price: ${price}`);
  });
});
