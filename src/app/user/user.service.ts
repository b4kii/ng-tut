import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    cars = [
        {id: 1, name: "audi"},
        {id: 2, name: "volkswagen"},
        {id: 3, name: "bmw"},
        {id: 4, name: "honda"},
    ];

    getCars() {

    }
}
