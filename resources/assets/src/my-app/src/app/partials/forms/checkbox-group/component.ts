import { BaseFieldComponent }  from '../base-field.component'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'checkbox-group',
    template: `<div class="row">
	<div class="col">
		<div class="form-group" [ngClass]="{'has-error':!group.controls[field].valid, 'has-success':group.controls[field].valid}">
		<label>{{ label }}</label>
			<ng-template [ngIf]="radios">
				<checkbox 
					*ngFor="let radio of radios" 
					[label]="radio.label" 
					[val]="radio.val"
					(checkChange)="radioChange($event)"></checkbox>
			</ng-template>
		</div>
	</div>
</div>
`
})
export class CheckboxGroupComponent extends BaseFieldComponent implements OnInit {

	@Input()
	public radios: any[];

	@Input()
	public subject: Subject<any>;

	@Output()
	public radioChange: EventEmitter<any> = new EventEmitter<any>();

	constructor(){
		super();
	}

	ngOnInit(){
		if(this.subject)
			this.subject.subscribe(
				change => this.radios = change
			);
	}

	public onCheck(_evt: any){
		this.radioChange.emit(_evt);
	}

}