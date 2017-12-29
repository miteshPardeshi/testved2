import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';

import { Principal } from '../../shared';
import { MyAccountService } from './my-account.service';

@Component({
    selector: 'my-account',
    templateUrl: './my-account.component.html'
})

export class MyAccountComponent implements OnInit {
    buttonTitle: string = "Update";
    password: string;
    confirmPassword: string;

    isUpdateMyAccountSaving: boolean = false;
    isUpdatePasswordSaving: boolean = false;

    myAccount: any;

    changePasswordForm;

    constructor(
        private accountService: MyAccountService,
        private principal: Principal,
        private toastsManager: ToastsManager
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.myAccount = this.copyAccount(account);
        });
    }

    updateMyAccount() {
        this.isUpdateMyAccountSaving = true;

        this.myAccount.login = this.myAccount.email;
        this.accountService.save(this.myAccount).subscribe(() => {
            this.isUpdateMyAccountSaving = false;
            this.toastsManager.success("Successfully updated profile", "Success");

            this.principal.identity(true).then((account) => {
                this.myAccount = this.copyAccount(account);
            });
        }, () => {
            this.isUpdateMyAccountSaving = false;
            this.toastsManager.error("Error in updating profile", "Error");
        });
    }

    copyAccount(account) {
        return {
            id:account.id,
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    }

    changePassword(changePasswordForm: NgForm) {
        this.isUpdatePasswordSaving = true;

        if (this.password !== this.confirmPassword) {
            this.isUpdatePasswordSaving = false;
            this.toastsManager.error("The password and its confirmation do not match!", "Error");
        } else {
            this.accountService.savePassword(this.password).subscribe(() => {
                this.isUpdatePasswordSaving = false;

                changePasswordForm.form.reset();
                this.toastsManager.success("Successfully updated password", "Success");
            }, () => {
                this.isUpdatePasswordSaving = false;
                this.toastsManager.error("Error in updating password", "Error");
            });
        }
    }
}