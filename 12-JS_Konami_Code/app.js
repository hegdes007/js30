console.log(
  "%c Type 'Darshan' to see my portfolio",
  "font-size:17px; background:black; text-shadow: 1px 1px 0 red"
);
const pressed1 = [];
const pressed2 = [];
const secretCode = "38384040373937396665";
const darshan = "darshan";

window.addEventListener("keyup", (e) => {
  pressed1.push(e.keyCode);
  pressed1.splice(-secretCode.length - 1, pressed1.length - secretCode.length);
  if (JSON.stringify(pressed1).includes(secretCode)) {
    cornify_add();
  }
  console.log(pressed1);
});

window.addEventListener("keyup", (e) => {
  pressed2.push(e.key);
  pressed2.splice(-darshan.length - 1, pressed2.length - darshan.length);
  if (pressed2.join("").includes(darshan)) {
    console.log("BOOM!");
    document.body.innerHTML = "";
    document.body.innerHTML +=
      '<iframe src="https://hegdes007.github.io" frameborder="0" style="height: 100vh; width: 100vw"></iframe>';
  }
  console.log(pressed2);
});
