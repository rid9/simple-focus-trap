const focusableSelector = [
    "a[href]:not([disabled])",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([type]):not([disabled])",
    'input[type="text"]:not([disabled])',
    'input[type="radio"]:not([disabled])',
    'input[type="checkbox"]:not([disabled])',
    "select:not([disabled])",
].join(", ");

/**
 * @param {HTMLElement} element
 * @return {() => void}
 */
export function trapFocus(element) {
    const focusableElements = Array.prototype.slice.call(
        element.querySelectorAll(focusableSelector)
    );

    const trap = function(event) {
        if (event.key !== "Tab" && event.keyCode !== 9) {
            return;
        }

        if (focusableElements.length === 0) {
            return event.preventDefault();
        }

        if (focusableElements.indexOf(event.target) === -1) {
            event.preventDefault();
            focusableElements[0].focus();
        }
    };

    document.addEventListener("keydown", trap);

    return function() {
        document.removeEventListener("keydown", trap);
    };
};
