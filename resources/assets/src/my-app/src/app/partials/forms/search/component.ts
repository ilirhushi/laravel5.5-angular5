import { BaseInputComponent }  from '../base-input.component'
import { Component, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'search',
    template: `<div class="form-group">
	<div class="input-group">
		<input
			#search
			type="text"
			class="form-control"
			placeholder="Buscar">
        <span class="input-group-btn">
			<button type="button" class="btn btn-flat btn-info">
				<i class="fa fa-search"></i>
			</button>
        </span>
	</div>
</div>`
})
export class SearchComponent {

	@ViewChild('search')
	public search: ViewChild;

	constructor(){

	}

}