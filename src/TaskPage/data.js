const data = {
  pictures: {
    redShell: 'Koopa_Shell_Spin.webp',
    star: 'star.webp',
    mushroom: 'mushroom.png',
    coin: 'coin.png',
    greenShell: 'koopa_shell.png'
  },
  cardElement: function(){
    // return '\
    // <span>\
    //   <img src=' + this.pictures.redShell + ' alt="delete" class="icon">\
    // </span>\
    // <span>\
    //   <img src=' + this.pictures.mushroom + ' alt="complete" class="icon">\
    // </span>'

    return `
    <span><img src=${this.pictures.redShell} alt="delete" class="icon delete"></span>
    <span><img src=${this.pictures.mushroom} alt="complete" class="icon done"></span>
    `
  }
}

export default data;
