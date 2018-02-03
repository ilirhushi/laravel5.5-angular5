import { Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export class BaseInputComponent {

    @Input()
    public field: string;

    @Input()
    public label: string;

    @Input()
    public placeholder  = '';

    @Input()
    public group: FormGroup = new FormGroup({});

    @Input()
    public sufix: string;

    @Input()
    public prefix: string;

    @Input()
    public sufixBtn: string;

    @Input()
    public sufixBtnClass = 'bg-light-blue';

    public control: FormControl;

    public backupValue = '';

    constructor() {
    }

}
