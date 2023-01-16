# Simple Focus Trap

Traps focus within an HTML element.

## Usage

To trap focus within an element, call `trapFocus()` on the element. The returned function can be called to deactivate the trap.

Once the trap is activated, it will prevent users from focusing any element outside of the trapped element. On deactivation, normal focus behavior will be restored.

The trap is meant to be activated once and then deactivated. There is no support for nesting.

```javascript
import { trapFocus } from "simple-focus-trap";

// Obtain a reference to an element.
const element = document.querySelector("#dialog");

// Trap focus within the element.
const untrap = trapFocus(element);

// Deactivate the focus trap after one second.
setTimeout(untrap, 1000);
```
