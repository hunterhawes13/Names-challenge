
 var name = "John";

 (function() {
     var name = "Tim";
     console.assert(name === "Tim"); // 1

     var name = "Jane";

     console.assert(name === "Jane"); // 2
 })();

console.assert(name === "John"); // 3