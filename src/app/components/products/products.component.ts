import { Component } from '@angular/core';

interface product{
  name:string,
  navigation:string,
  port_number:string,
  upc:string,
  desc:string,
  score:number,
  img_url:string,
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:product[] = [{
    name:"MFR Port Number:3KX58",
    navigation:"abarives>>abarives brushes>>cup brushes",
    port_number:"QRS_Q1_2019_02377",
    upc:"6688998893",
    desc:"Anchor® 3KC58 Cup Brush, 3 in Dia Brush, 5/8-11 Arbor Hole, 0.02 in Dia Filament/Wire, Knot, Carbon Steel Fill",
    score:75,
    img_url:"../../../assets/images/image1.png",
  },
  {
    name:"MFR Port Number:3KX58",
    navigation:"abarives>>abarives brushes>>cup brushes",
    port_number:"QRS_Q1_2019_02377",
    upc:"6688998893",
    desc:"Anchor® 3KC58 Cup Brush, 3 in Dia Brush, 5/8-11 Arbor Hole, 0.02 in Dia Filament/Wire, Knot, Carbon Steel Fill",
    score:55,
    img_url:"../../../assets/images/image1.png",
  },
  {
    name:"MFR Port Number:3KX58",
    navigation:"abarives>>abarives brushes>>cup brushes",
    port_number:"QRS_Q1_2019_02377",
    upc:"6688998893",
    desc:"Anchor® 3KC58 Cup Brush, 3 in Dia Brush, 5/8-11 Arbor Hole, 0.02 in Dia Filament/Wire, Knot, Carbon Steel Fill",
    score:30,
    img_url:"../../../assets/images/image1.png",
  },
]

}
