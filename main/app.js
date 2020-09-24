var myShare = document.getElementById("share");
var mySharebBtn = document.getElementById("share-btn");

myShare.onclick = function () {
    if (mySharebBtn.className == "share-btn") {

        mySharebBtn.classList.add ("share-btn-active");

    } else if (mySharebBtn.className != "share-btn-active") {
        mySharebBtn.className = "share-btn";
    }
};