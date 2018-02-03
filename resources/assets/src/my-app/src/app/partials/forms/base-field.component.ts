import { Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export class BaseFieldComponent {

    @Input()
    public field: string;

    @Input()
    public label: string;

    @Input()
    public group: FormGroup = new FormGroup({});

    public control: FormControl;

    constructor() {
    }

}
