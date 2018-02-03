import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'checkbox',
    template: `<div class="form-check">
	<input
		#checkbox
		class="form-check-input"
		type="checkbox"
		value="{{ val }}"
		(change)="onChange($event)">
	<label class="form-check-label" (click)=toggle($event)>
		{{ label }}
	</label>
</div>`
})
export class CheckboxComponent implements OnInit {

	@Input()
	public label: string;

	@Input()
	public val: string;

	@Input()
	public checked: boolean = false;

	@Output()
	public checkChange: EventEmitter<any> = new EventEmitter<any>();

	@ViewChild('checkbox')
	public checkbox: ElementRef;

	public toggleSubject: Subject<boolean> = new Subject<boolean>()

	constructor(){
	}

	ngOnInit(){
		console.log(this.checkbox);
		this.toggleSubject.subscribe(
			toggle => {
				this.checked = !toggle;
				this.checkbox.nativeElement.checked = toggle
			}
		)
		this.toggleSubject.next(this.checked);
	}

	public toggle(_evt: any){
		this.toggleSubject.next(this.checked);
	}

	public onChange(_evt: any){
		this.checkChange.emit(_evt);
	}

}