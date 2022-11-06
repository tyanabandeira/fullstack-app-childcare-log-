var heart = document.getElementsByClassName("fa-heart");
var trash = document.getElementsByClassName("fa-trash-o");
var flag = document.getElementsByClassName("fa-flag")
// var comment = document.getElementsByClassName("fa-comment");

Array.from(flag).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    console.log(name)
    // console.log(this.closest('li').querySelector('.fa-thumbs-up'))
    fetch('flag', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        // console.log(this.closest('li').querySelector('.fa-thumbs-up'))
        fetch('heart', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
