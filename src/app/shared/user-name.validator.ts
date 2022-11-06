import { AbstractControl } from "@angular/forms";


export function forbiddeNameValidator(control: AbstractControl): {[key: string]: any}| null{
    const forbidden = /admin/.test(control.value);
    return forbidden ? {'forbiddenName': {value:control.value}} : null;

}