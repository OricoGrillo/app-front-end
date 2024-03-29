import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { filter } from '@jsx/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(criterio: string){
    //console.log('El criterio de busqueda es:'+ criterio);
    this.router.navigate(['/search', criterio]);
  }

  _getAllEvents(){

  }

  _getBreadCrumb(){
    return this.router.events
  }

}
