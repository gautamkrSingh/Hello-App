
import { ValidationErrors, AbstractControl } from '@angular/forms';
export class oldPasswordValidators{
    static checkoldPasssword(control: AbstractControl): ValidationErrors | null {

        console.log(control.value);
        if(control.value != '123')
            return {checkoldPasssword : true};
        return null;
    }
}