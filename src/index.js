
const middleware = store => next => action => {
  next(action);
  if (shouldTrackAction(action)) {
    trackAction(action);
  }
};

function shouldTrackAction(action) {
  return window.appInsights && action.meta && action.meta.appInsights;
}

function trackAction(action) {
  if (action.meta.appInsights.trackPayload) {
    let event = {};
    event[action.type] = action.payload;
    window.appInsights.trackEvent(action.type, event);
  } else {
    window.appInsights.trackEvent(action.type);
  }
}

export default middleware;
