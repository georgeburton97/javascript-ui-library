import Tooltip from './ui/tooltip'
import Dropdown from './ui/dropdown'
import Tabs from './ui/tabs'

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init()

// Create Dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// Create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();