document.addEventListener('DOMContentLoaded', function() {
    // Find all links in tables
    const tableLinks = document.querySelectorAll('table a[href^="http"]');
    
    tableLinks.forEach(function(link) {
        // Check if it's an external link (not same domain)
        if (link.hostname !== window.location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
