const mainDiv = document.querySelector("#main");
const sampleText = "This is some sample starter text";

window.addEventListener("load", () => {
    mainDiv.innerText = sampleText;
});

const nemo = ["nemo"];
const everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
];

const large = new Array(10000).fill("nemo");

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log("Found NEMO!");
        }
    }
}

findNemo(large);
