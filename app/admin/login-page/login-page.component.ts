import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/interfaces";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    form: FormGroup

    constructor() {
    }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, [
                Validators.email,
                Validators.required
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6)
            ]),
        })
    }

    submit() {
        console.log(this.form)
        if (this.form.invalid) {
            return
        } else {
            const user: User = {
                email: this.form.value.email,
                password: this.form.value.password
            }
        }
    }

    FF
}
