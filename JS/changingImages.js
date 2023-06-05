let index = 0;

(function change() {

    const MAX_INDEX =10;
    if (index > MAX_INDEX) {
      console.log('Index exceeded maximum value');
      return;
    }

    let x = document.getElementsByClassName('slidesFirst');
    let y = document.getElementsByClassName('slidesSecond');
    let z = document.getElementsByClassName('slidesThird');

    if (x.length == 0 || y.length == 0 || z.length == 0) {
        console.log('Elements with specified class names not found');
        return;
      }

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
        z[i].style.display = "none";
    }

    index++;

    if (index > x.length) {
        index = 1;
    }

    if (index > y.length) {
        index = 1;
    }

    if (index > z.length) {
        index = 1;
    }

    x[index - 1].style.display = "block";
    y[index - 1].style.display = "block";
    z[index - 1].style.display = "block";

    setTimeout(change, 2000);
})();


