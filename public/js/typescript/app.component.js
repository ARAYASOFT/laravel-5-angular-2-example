System.register(['angular2/core', './Components/BannersEditor/BannersEditor', './Components/PSDUploader/PSDUploader', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, BannersEditor_1, PSDUploader_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (BannersEditor_1_1) {
                BannersEditor_1 = BannersEditor_1_1;
            },
            function (PSDUploader_1_1) {
                PSDUploader_1 = PSDUploader_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Root',
                            component: PSDUploader_1.PSDUploader,
                            useAsDefault: true
                        },
                        {
                            path: '/edit',
                            name: 'EditTemplates',
                            component: BannersEditor_1.BannersEditor
                        }
                    ]),
                    core_1.Component({
                        'directives': [PSDUploader_1.PSDUploader, router_1.ROUTER_DIRECTIVES],
                        'selector': 'banners-creator',
                        'template': '<router-outlet></router-outlet>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
