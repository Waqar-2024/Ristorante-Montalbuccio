import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchTerm:String=""

constructor(private route:ActivatedRoute,private router:Router){}

ngOnInit(){
  this.route.params.subscribe(params=>{
    console.log("check",params)
    if(params?.['searchTerm'])
    this.searchTerm=params?.['searchTerm']
  })
}

search(){
 if(this.searchTerm) 
  this.router.navigateByUrl('/menu/search/'+this.searchTerm)
 else
 this.router.navigateByUrl('/menu')
}

}
