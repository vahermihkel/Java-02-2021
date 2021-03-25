export class Item {
  constructor(
    public id: number | null,
    public imgSrc: string,
    public title: string,
    public price: number,
    public category: string,
  ) {}
}

// export class Item {
//   imgSrc: string;
//   title: string;
//   price: string;
//   category: string;

//   constructor(
//     imgSrc: string,
//     title: string,
//     price: string,
//     category: string,
//   ) {
//     this.imgSrc = imgSrc;
//     this.title = title;
//     this.price = price;
//     this.category = category;
//   }
// }