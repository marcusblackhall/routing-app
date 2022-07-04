import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean> |  boolean | UrlTree{

    if (! this.allowEdit){
      return true;
    } 
    if ((this.server.name !== this.serverName || 
      this.serverStatus !== this.server.status ) &&
      ! this.changesSaved 
      ){
          confirm('Do you want to confirm the changes?');
    } else {
        return true;
    }
  }




  ngOnInit() {

    console.log(this.route);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        console.log(queryParams);
        console.log("in edit " + queryParams['allowEdit']);
        this.allowEdit = queryParams['allowEdit']
          === '1' ? true : false;
      }

    );
 
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo : this.route});
    
  }

}
