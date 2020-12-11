import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { AbstractControl } from '@angular/forms';
import { EmailService } from '../email.service';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234') 
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword?.value !== confirmPassword?.value)
            return { passwordsShouldMatch: true };
        
        return null;
    }
}