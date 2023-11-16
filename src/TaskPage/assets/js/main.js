export const data = {
  pictures: {
    redShell: 'assets/img/Koopa_Shell_Spin.webp',
    star: 'assets/img/star.webp',
    mushroom: 'assets/img/mushroom.png',
    coin: 'assets/img/coin.png',
    greenShell: 'assets/img/koopa_shell.png'
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
