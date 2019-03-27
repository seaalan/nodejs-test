function route(handle, pathname) {
    console.info("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.info("No request handler found for "+ pathname);
    }
}

exports.route = route;