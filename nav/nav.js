;(async function () {
  if (!window.loadlib) {
    alert("include allfuncs first")
    // eval(
    //   await (
    //     await fetch("/multi-page-bundle/js globals/libloader.js")
    //   ).text()
    // )
    // eval(
    //   await (
    //     await fetch("/multi-page-bundle/js globals/allfuncs.js")
    //   ).text()
    // )
  }
  const a = loadlib("allfuncs")
  // document.head.appendChild(
  //   a.newelem("link", {
  //     rel: "stylesheet",
  //     href: "/multi-page-bundle/styles/root.css",
  //   })
  // )
  // document.head.appendChild(
  //   a.newelem("link", {
  //     rel: "stylesheet",
  //     href: "/multi-page-bundle/nav/nav.css",
  //   })
  // )
  const elems = a.newelem("nav", {}, [
    a.newelem("img", {
      src: "/multi-page-bundle/imgs/mainlogo.png",
      maxWidth: "15px",
      maxHeight: "15px",
    }),
    a.newelem("a", {
      innerHTML: "home",
      href: "/multi-page-bundle/",
    }),
    a.newelem("a", {
      innerHTML: "ffopen",
      href: "/multi-page-bundle/ffopen/",
    }),
    a.newelem("a", {
      innerHTML: "vid1 site clone",
      href: "/multi-page-bundle/vid1%20site%20clone/",
    }),
    a.newelem("a", {
      innerHTML: "bg color changer",
      href: "/multi-page-bundle/bg color changer/",
    }),
    a.newelem("a", {
      innerHTML: "Palindrome Checker Project",
      href: "/multi-page-bundle/Palindrome Checker Project/",
    }),
    a.newelem("a", {
      innerHTML: "Build a Roman Numeral Converter Project",
      href: "/multi-page-bundle/Build a Roman Numeral Converter Project/",
    }),
  ])
  await a.bodyload()
  document.body.appendChild(elems)
})()
