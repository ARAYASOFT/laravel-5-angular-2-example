import { Component } from 'angular2/core';
import { BannersEditor } from './Components/BannersEditor/BannersEditor';
import { PSDUploader } from './Components/PSDUploader/PSDUploader';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@RouteConfig([
    {
        path: '/',
        name: 'Root',
        component: PSDUploader,
        useAsDefault: true
    },
    {
        path: '/test',
        name: 'Test',
        component: BannersEditor
    }
])
@Component({
    'directives': [PSDUploader, ROUTER_DIRECTIVES],
    'selector': 'banners-creator',
    'template': '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor () {}
}