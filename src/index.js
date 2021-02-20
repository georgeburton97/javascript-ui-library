import Tooltip from './ui/tooltip'
import Dropdown from './ui/dropdown'
import Tabs from './ui/tabs'
import Snackbar from './ui/snackbar'

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

// Create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)')
})