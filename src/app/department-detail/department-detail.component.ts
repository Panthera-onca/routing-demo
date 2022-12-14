import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected a department with id={{departmentId}}</h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>

    <router-outlet></router-outlet>

    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>

    <div>
      <button (click)="gotoDepartments">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id: any  = parseInt(this.departmentId); 
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<any>params.get("id"));
      this.departmentId = id;
    });
  }
  goPrevious(){
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments', previousId])
  }
  goNext(){
    let nextId = this.departmentId +1;
    this.router.navigate(['/departments', nextId])
  }
  gotoDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
