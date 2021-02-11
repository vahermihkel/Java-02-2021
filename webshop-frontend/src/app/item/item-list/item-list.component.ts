import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tboAAOSwuidfALMw/s-l225.webp","title":"Mens Silver Bridge Manual Mechanical Watch - Black Leather DIASTERIA 1688","price":"114.95","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JAQAAOSw5ulfskbv/s-l225.webp","title":"Men's Creative Triangle Automatic Watch Hollow Stainless Steel Mechanical Watch","price":"30.49","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/52kAAOSwh~pd6QN0/s-l225.webp","title":"Men's Watch Laco Pobeda Pilot Mechanical WristWatch Soviet USSR MILITARY ZIM ","price":"64.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/38AAAOSwkhxeeE-4/s-l225.webp","title":"Luxury New Geneva Women Watch Stainless Steel Men's Quartz Analog Wrist Watches","price":"4.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LfUAAOSwjVReYchM/s-l225.webp","title":"Men's Leather Military Casual Analog Quartz Wrist Watch Wristwatch","price":"2.18","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qo0AAOSwENVdkCzN/s-l225.webp","title":"Fashion Sport Men's Stainless Steel Case Leather Band Quartz Analog Wrist Watch","price":"4.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aPIAAOSw97RgIZJo/s-l225.webp","title":"New ListingVINTAGE GRUEN 10K GOLD FILLED RHINESTONES WIND-UP WOMEN'S WRIST WATCH","price":"19.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0f0AAOSwH~ta2C4z/s-l225.webp","title":"2020 Men's Leather Military Casual Analog Quartz Wrist Watch Business Watches","price":"3.79","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WREAAOSw46JgJEdC/s-l225.webp","title":"New ListingLadies Pink Gucci Watch","price":"41.54","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pfwAAOSwmuBffua8/s-l225.webp","title":"seiko 5 automatic men's steel black dial vintage day/date vintage japan watch ","price":"28.79","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NIcAAOSwdXdgCYmg/s-l225.webp","title":"New ListingVintage watch lot","price":"606.53","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r-4AAOSwB-JdD-cD/s-l225.webp","title":"Vostok Amphibian 420059 Watch Scuba Dude Military Diver Russian Automatic Blue","price":"71.95","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rq4AAOSwSUxeKwSt/s-l225.webp","title":"NEW! BEZEL to VOSTOK Vostok Amphibian watches +black-insert №2 #Polished steel","price":"25.50","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UvEAAOSwqMxfcaKx/s-l225.webp","title":"New ListingSEIKO QUARTZ MEN GOLD PLATED SILVER DIAL EXCELLENT WATCH WORKING ORDER","price":"17.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/idQAAOSwfGhfrdaO/s-l225.webp","title":"Luxury Men Analog Digital Military Sport LED Rubber Waterproof Wrist Watch","price":"6.91","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PgUAAOSwEWZdHJoC/s-l225.webp","title":"ORIGINAL SEIKO (SII) NH35/NH35A AUTOMATIC WATCH MOVEMENT DATE 3 W/WHITE DATE NEW","price":"34.75","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dpkAAOSwcAlfwJCI/s-l225.webp","title":"Citizen Eco-Drive BM8180-03E Wrist Watch","price":"119.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hgsAAOSwAANY7Ha9/s-l225.webp","title":"One Hand Luch Mechanical Wristwatch Men's leather Vintage Black 37471763 RUS","price":"48.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IRQAAOSw8DZgJDmj/s-l225.webp","title":"New Listingelgin sportsman mens wrist watch 17 jewel with date","price":"25.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cxwAAOSwKkVgD1qc/s-l225.webp","title":"New ListingLadies Citizen Watch 8N0221 - Two Tone - Textured Dial - New Battery - Nice!","price":"18.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zKEAAOSwRrxdD-PP/s-l225.webp","title":"Vostok Amphibian 710634 Watch Scuba Dude Military Diver Russian Automatic Black","price":"69.89","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/21gAAOSwb7dfWQit/s-l225.webp","title":"New ListingCitizen 8200 Automatic Men Steel 21 Jewels Vintage Day Date Watch Run Order","price":"27.68","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JFcAAOSwMBFfRPeN/s-l225.webp","title":"Victorinox Swiss Army Men's Watch I.N.O.X. Black Dial 241723.1","price":"169.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/omQAAOSw8NtfnUvZ/s-l225.webp","title":"VINTAGE MEN'S SEIKO 5 7009-3161 D/D 35MM AUTOMATIC JAPAN MADE WRIST WATCH A9711","price":"29.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fKoAAOSwLIhdQp4s/s-l225.webp","title":"New ListingHmt Pilot Hand Winding Men's Steel 17 Jewels Parashock Vintage India Watch","price":"17.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sjoAAOSw1fJe0Ihz/s-l225.webp","title":"New ListingVINTAGE LONGINES 14K SOLID WHITE GOLD 33 mm W/DIAMONDS MANUAL WIND MEN'S WATCH","price":"699.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GJcAAOSwre9gIrY0/s-l225.webp","title":"New ListingTimex Mens Watch","price":"7.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-VAAAOSwxYVgGGA-/s-l225.webp","title":"New ListingDicto Ladies Watch Black ","price":"9.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YT8AAOSwkmVgIrOR/s-l225.webp","title":"New ListingTFK Watch Bulova Mens","price":"14.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/T1wAAOSwi8VZXOVd/s-l225.webp","title":"Luxury Women's Fashion Watches Stainless Steel Quartz Rhinestone Wristwatch O126","price":"4.50","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PDEAAOSwOIVgCaay/s-l225.webp","title":"New ListingPrometheus Zenobia Meteorite Dial Version F1 No Date ETA 2824-2 Diver Watch","price":"590.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/D28AAOSw7sdgJDaH/s-l225.webp","title":"New ListingVintage Ladies Clementine L Watch & Bracelet Set in Original Box","price":"20.75","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/W28AAOSw0t9fl3r0/s-l225.webp","title":"New ListingARMITRON LADIES VINTAGE Watch","price":"15.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TV4AAOSwG4hfdx5t/s-l225.webp","title":"Victorinox Swiss Army Men's Quartz Watch Grey Dial Nylon Strap 241515","price":"69.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/x~EAAOSwg0FgI7NG/s-l225.webp","title":"New ListingBeautiful Oris Hand Wind ST 96 17 Jewels Men's Wrist Watch","price":"16.95","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RK8AAOSwEh1gJTJo/s-l225.webp","title":"New ListingGents Universal Geneve Compax Chronograph Silver Dial 1940’s Vintage Watch","price":"1765.24","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/p-wAAOSwXChgIrnE/s-l225.webp","title":"New ListingAmerican Legion Mens Watch","price":"7.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XNwAAOSwDwJdR5kK/s-l225.webp","title":"Luxury Starry Sky Watch Magnetic Band Quartz Wristwatch Diamond Watches Women","price":"4.39","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nE8AAOSwwz9dKXRB/s-l225.webp","title":"Luxury Crystal Watch Women Man Waterproof Steel Strap Luminous Wrist Watches","price":"9.68","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LuIAAOSwyltZORLR/s-l225.webp","title":"One Hand Luch Mechanical Wristwatch Men's leather Vintage White 77471146 RUS","price":"48.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OEUAAOSwMSRfZAZQ/s-l225.webp","title":"New ListingVINTAGE WALTHAM 17 j. MANUAL WIND 34 mm MEN'S WATCH WATERPROOF","price":"59.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RT4AAOSw5K5fes3J/s-l225.webp","title":"Mesh Strap Sport Quartz Watch LED Digital Women Men Electronic Wristwatch UK","price":"5.44","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/04gAAOSwB6JgJMCY/s-l225.webp","title":"New ListingA BATHING APE Bapex Wrist Watch Self-Winding Black Silver Used from Japan F/S","price":"1027.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RHEAAOSwZq9f4k23/s-l225.webp","title":"New ListingBenrus Citation 200m Diver | Dive Watch | Day Date | 24h Dial | 60-click Bezel","price":"121.31","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1U8AAOSwmK9dLuZu/s-l225.webp","title":"Women's Watch Crystal Alloy Analog Love Quartz Bracelet Dress Wrist Watches Gift","price":"4.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lwoAAOSw-XBgJRNy/s-l225.webp","title":"New ListingSwatch Shubukin GG215 Plastic/Silicon Wrist Watch - Pink, Purple & Green - Case ","price":"13.83","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FkMAAOSwfl1gJTvf/s-l225.webp","title":"New ListingCasio BP-400 vintage watch","price":"553.80","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mDIAAOSwFH1gGEZs/s-l225.webp","title":"New ListingVollmond Automatic 22 Jewels Mens Watch ","price":"69.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yd8AAOSwqLFdL9Oj/s-l225.webp","title":"Casio MDV106-1A Men's Analog Watch - Black","price":"55.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bZgAAOSwBHJdR6fe/s-l225.webp","title":"Luxury Women Watch Starry Sky Magnetic Band Quartz Wristwatch Diamond Watches","price":"4.59","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XqQAAOSwIiVe7ogn/s-l225.webp","title":"Men's Leather Skeleton Transparent Casual Analog Quartz Wrist Watch Wristwatch","price":"2.74","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9UEAAOSw--hdIzx9/s-l225.webp","title":"Vostok Amphibian 110903 Watch Military Diver Russian Mechanical Auto","price":"69.89","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/K9MAAOSwbLVfVvA8/s-l225.webp","title":"2020 Men Analog Wrist Watch Date Sport Stainless Steel Business Watches Latest","price":"3.91","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/34wAAOSwF7xeuKRS/s-l225.webp","title":"Casio DW9052-1V, G-Shock Chronograph Watch, Resin Band, Alarm, 200 Meter WR","price":"44.80","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qccAAOSwbdFfBVKA/s-l225.webp","title":"Stylish Women Leather Strap Casual Watch Luxury Analog Quartz Crystal Wristwatch","price":"2.11","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pOMAAOSwsbFfo76w/s-l225.webp","title":"BLIGER Dial 40MM Sapphire Date Luminous Miyota Automatic Mechanical Men's Watch","price":"79.20","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0YcAAOSwvGZcD-1s/s-l225.webp","title":"Citizen Crono Aviator Men's Eco Drive Chronograph Watch - CA0690-88L NEW","price":"160.80","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/o-QAAOSwxipfJGI1/s-l225.webp","title":"Glycine Men's Combat Sub GL0271 42mm Dark Blue Dial Stainless Steel Watch","price":"319.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0oUAAOSw6Ppd-6UE/s-l225.webp","title":"Bulova Speical Edition Lunar Pilot Chronograph Black Dial Men's Watch 96B251","price":"336.86","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QaEAAOSwiiNgF0kE/s-l225.webp","title":"New Tissot PRX Stainless Steel Black Dial Men's Watch T137.410.11.051.00","price":"328.98","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RccAAOSwHhlgJURk/s-l225.webp","title":"New ListingVINTAGE ORIENT WRISTWATCH VERY HARD T FIND WATCH & CALENDAR AUTOMATIC 21 JEWELS ","price":"400.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lDkAAOSwvUdfSaXg/s-l225.webp","title":"New ListingCURREN Design Watches Men's Watch Quartz Male Fashion Stainless Steel Wristwatch","price":"35.80","category":"watches"}]

  constructor() { }

  ngOnInit(): void {
  }

}
