import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import * as template from './darkengines-app.template.html';
import { property, component } from 'darkengines-polymer3-decorators';

@component('darkengines-app')
export class DarkenginesApp extends PolymerElement {
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
	public name?: number;
}