// on the mobile the menuList will high onclick by using below function called toggleMenu()
var menuList = document.getElementById("menuList");

//this will add zero pixel maximum height
        menuList.style.maxHeight = "0px"

        /* in this function I will firstly check if the maximum 
        height is zero, it will add 130 pixels otherwise maximum height is zero */
        function toggleMenu() {
            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "130px"
            } else {
                menuList.style.maxHeight = "0px"
            }
        }