# Using routes in angular

## Introduction
This app is used to play with angular routes

### Description

In app.module.ts add an array of Routes

#### Add constant for Routes

`const appRoutes:Routes[ {path: '/',HomeComponent},
path: '/users', component: UsersComponent} ]
` 

#### Add RouteModule in the imports

Ensure to add the RouteModule for your routes in the imports section

` imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
` 
#### Add router-outer to app

In app.component.ys add the router-outlet tag.

`<router-outlet></router-outlet>`

#### Add routerLink to a link

`  <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a routerLink="/">Home</a></li>
        <li role="presentation"><a routerLink="/servers">Servers</a></li>
        <li role="presentation"><a [routerLink]='["/users"]'>Users</a></li>
      </ul>`

      


