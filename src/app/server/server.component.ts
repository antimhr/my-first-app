import { style } from "@angular/animations";
import { Component, TemplateRef } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    h4{
        color: red;
    }
`]
})
export class serverComponent{
    serverId:number = 10;
    serverStatus:string = "offline";

    getServerStatus(){
        return this.serverStatus
    }
}