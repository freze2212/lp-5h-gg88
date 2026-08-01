/**
 * Main Interaction & Security Script for C168 Landing Page
 */

document.addEventListener("DOMContentLoaded", function () {

    // Populate current domain dynamically in subtitle
    var domainSpan = document.getElementById("dyn-domain");
    if (domainSpan) {
        domainSpan.textContent = window.location.hostname || "gg88xx.vip";
    }

    // Optional Anti-debugging & hotkey protection
    document.addEventListener("keydown", function (e) {
        // Prevent Ctrl+S / Cmd+S
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
            e.key === "F12" ||
            ((e.ctrlKey || e.metaKey) && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase()))
        ) {
            e.preventDefault();
            return false;
        }
    }, true);

    // Disable context menu and image drag (matching source site behavior)
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
    document.addEventListener("dragstart", function (e) {
        e.preventDefault();
    });
    document.addEventListener("selectstart", function (e) {
        e.preventDefault();
    });
});
