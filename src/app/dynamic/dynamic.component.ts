import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  finalData: [];
  getData : any;
  formData: any;
  skills: any;
  constructor(private route:Router, private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData = JSON.parse(localStorage.getItem('dataSource')|| '{}');
    console.log("getData",this.getData);
    
  }

  onDelete(id: any){
    // console.log(id);
    let deletedlID = this.getData.slice(id)
    // console.log(deletedlID);
    localStorage.setItem('dataSource', deletedlID)
  }

  onEdit(id: any){
    // console.log("click");
    // var existing = localStorage.getItem('dataSource');
    // console.log(existing);
    // existing = existing ? JSON.parse(existing) : {};
    // localStorage.setItem('dataSource', JSON.stringify(existing));
    console.log(id);
    this.formData = id;
    this.getData = localStorage.getItem('dataSource');
    let result = JSON.parse(this.getData)
    id.value = result[id]
    this.route.navigate(['/'], { queryParams: (id) } )

  }

  
}
