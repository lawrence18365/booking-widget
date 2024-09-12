(function() {
    // Create widget container
    var container = document.createElement('div');
    container.id = 'service-booking-widget';
    document.body.appendChild(container);

    // Load CSS
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://your-server.com/widget-styles.css';
    document.head.appendChild(link);

    // Load JavaScript
    var script = document.createElement('script');
    script.src = 'https://your-server.com/widget-script.js';
    document.body.appendChild(script);

    // Pass configuration to the widget
    window.serviceBookingConfig = {
        apiKey: 'YOUR_API_KEY_HERE',
        calendar: 'YOUR_CALENDAR_ID_HERE'
    };
})();
