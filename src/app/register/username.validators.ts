import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotHaveSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(" ") >=0 )
                return {cannotHaveSpace: true}
        return null;
    }

    static checkUnique(control: AbstractControl) : Promise <ValidationErrors | null>{

        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(control.value === 'gautam'){
                    resolve({checkUnique : true}); 
                }else{
                    resolve (null);
                }    
            }, 5000);
        });
       
 
    }

}