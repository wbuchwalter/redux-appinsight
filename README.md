### Installation
**Prerequisite:** You need to have Application Insights correctly configured in your application.

`npm i redux-appinsights`

Then simply apply the middleware to your store:

``` JavaScript
let store = createStore(
  todoApp,
  applyMiddleware(
    logger,
    appInsightMiddleware
  )
)
```



### Usage

You need to opt-in the actions you want to log. To do so, simply append your action like so:

``` JavaScript
{
  type: 'ADD_TODO',
  payload: 'Hello World!',
  meta: {
    appInsight: { trackPayload: true}
  }
}
```

If you only want to track an action, but don't need it's payload, set `trackPayload` to `false`.
