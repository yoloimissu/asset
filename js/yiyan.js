fetch('https://v1.hitokoto.cn')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    var hitokoto = document.getElementById('hitokoto');
    hitokoto.innerText = data.hitokoto + '——【' + data.from + '】';
  })
  .catch(function (err) {
    console.error(err);
  })
