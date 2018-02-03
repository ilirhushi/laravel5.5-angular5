import { BaseInputComponent }  from '../base-input.component'
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'number',
    template: `<div
	class="form-group has-feedback"
	[formGroup]="group"
	[ngClass]="{'has-error':!group.controls[field].valid, 'has-success':group.controls[field].valid}">
	<label
		for="{{ field }}">
		{{ label }}
	</label>
	<div class="input-group">
		<input
			type="text"
			class="form-control"
			id="field"
			name="{{ field }}"
			placeholder="{{ placeholder }}"
			formControlName="{{ field }}">
        <span class="input-group-addon" *ngIf="sufix" [innerHTML]="sufix"></span>
        <span class="input-group-btn" *ngIf="sufixBtn">
			<button type="button" class="btn btn-flat {{ sufixBtnClass }}" [innerHTML]="sufix"></button>
        </span>
	</div>
	<span class="glyphicon form-control-feedback" aria-hidden="true"></span>
</div>`
})
export class NumberComponent extends BaseInputComponent implements OnInit{

	private regex: RegExp = /^\d+$/;

	constructor(){
		super();
	}

	ngOnInit(){
		this.control = this.group.get(this.field) as FormControl;
		this.control.valueChanges.subscribe(this.validate.bind(this));
	}

	private validate(_val: any){
		if (_val && _val != '') {
			if (!this.regex.test(_val)){
        		this.control.setValue(this.backupValue);
			}else{
				this.backupValue = _val;
			}
		}
	}

}