import Tooltip from './ui/tooltip'
import Dropdown from './ui/dropdown'

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init()

// Create Dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})