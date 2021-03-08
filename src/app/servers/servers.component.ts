import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowAddServer = false;
serverCreationStatus = "Server not created!";
serverName ="testServer";
serverCreated = false;  
servers = ["server1", "server2"]

  constructor() { 
    setTimeout(() => {
      this.allowAddServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
  this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created - "
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
