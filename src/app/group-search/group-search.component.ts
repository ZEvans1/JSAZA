import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { GroupService } from  './../services/group.service';
import { MaterializeModule } from "angular2-materialize";

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.css']
})
export class GroupSearchComponent implements OnInit {
  groups;
  filterByLookingFor: string = "all";
  constructor(private authService: AuthService, private groupService: GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getAll();
  }

  onChangeLookingFor(optionFromMenu) {
    this.filterByLookingFor = optionFromMenu;
  }

}
