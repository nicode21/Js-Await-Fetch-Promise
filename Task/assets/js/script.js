"use strict";

document.querySelector("button").addEventListener("click", function () {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {

      let str = "";

      let tbody = document.querySelector("tbody");

      comments.forEach(comment => {

        str +=
          `<tr>
         <td>${comment.postId}</td>
         <td>${comment.name}</td>
         <td>${comment.email}</td>
         <td>${comment.body}</td>
         </tr>`
      });

      tbody.innerHTML = str;
    })
})


/*

*/






