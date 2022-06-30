import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "Server was not Created";
  serverName = 'testServer';
  userName = "";
  serverCreated = false;
  servers = ['testserve', 'testserver2']
  

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created. The name of server is "+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser(){
    this.userName = '';
  }
}
