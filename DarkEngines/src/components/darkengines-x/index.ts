import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import * as template from './darkengines-x.template.html';
import { property, component } from 'darkengines-polymer3-decorators';

@component('darkengines-x')
export class DarkenginesX extends PolymerElement {
	static get template() {
		return template;
	}
	constructor() {
		super();
	}
	ready() {
		super.ready();
	}
	@property()
	public name?: string;
}