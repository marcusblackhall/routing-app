import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  inpId:number;
  constructor(private serversService: ServersService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {

    //  retrieve the id in the active rout
    const id = +this.route.snapshot.params['id'];
console.log["id is " + id];
    // this.inpId = this.route.snapshot.params['id'];
    // console.log(" trying to retrieve server " + this.inpId);
    // console.log(this.route.snapshot);
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params:Params) => {
        console.log("subscribe got " + +params['id']);
      this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  onEdit(){
      this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling : 'preserve'});
  }

}
