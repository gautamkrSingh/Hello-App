import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "caps"
})

export class capsPipe implements PipeTransform{
    transform(value:string){
        let completeString;
        var finalString;
        var preposition = ["is", "of", "the"];
        if(!value) return null;
        else{
            value = value.toLowerCase();
            completeString = value.split(" ");
            for(var i = 0; i< completeString.length; i++){
                if(preposition.includes(completeString[i]) && i != 0){
                    completeString[i] = completeString[i].toLowerCase();
                }else{
                    completeString[i] = completeString[i].substr(0, 1).toUpperCase()+completeString[i].substr(1).toLowerCase();
                }
            }
            finalString = completeString.join(" ");
        }
        return finalString;
    }

}