import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";


@Component({
    templateUrl: './header.component.html',
    selector: 'app-header'
})
export class HeaderComponent implements OnInit, OnDestroy {  
    private userSub: Subscription 
    isAuthenticated: boolean = false;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
   
    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !user ? false : true
            console.log(user);
        })
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes().subscribe()
    }

    onLogout() {
        this.authService.logout()
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
}