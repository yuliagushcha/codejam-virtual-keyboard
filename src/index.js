var keyMatrixEng= [
	[
    { value: ['~', '`'], id: 192 },
    { value: ['1', '!'], id: 49 },
    { value: ['2', '@'], id: 50 },
    { value: ['3', '#'], id: 51 },
    { value: ['4', '$'], id: 52 },
    { value: ['5', '%'], id: 53 },
    { value: ['6', '^'], id: 54 },
    { value: ['7', '&'], id: 55 },
    { value: ['8', '*'], id: 56 },
    { value: ['9', '('], id: 57 },
    { value: ['0', ')'], id: 48 },
    { value: ['-', '_'], id: 189 },
    { value: ['=', '+'], id: 187 },
    { value: ['BKSP', 'BKSP'], id: 8 },
  ],
  [
    { value: ['TAB', 'TAB'], id: 9 },
    { value: ['q', 'Q'], id: 81 },
    { value: ['w', 'W'], id: 87 },
    { value: ['e', 'E'], id: 69 },
    { value: ['r', 'R'], id: 82 },
    { value: ['t', 'T'], id: 84 },
    { value: ['y', 'Y'], id: 89 },
    { value: ['u', 'U'], id: 85 },
    { value: ['i', 'I'], id: 73 },
    { value: ['o', 'O'], id: 79 },
    { value: ['p', 'P'], id: 80 },
    { value: ['[', '{'], id: 219 },
    { value: [']', '}'], id: 221 },
    { value: ["\\", '|'], id: 221 },
  ],
  [
    { value: ['CAPS', 'CAPS'], id: 20 },
    { value: ['a', 'A'], id: 65 },
    { value: ['s', 'S'], id: 83 },
    { value: ['d', 'D'], id: 68 },
    { value: ['f', 'F'], id: 70 },
    { value: ['g', 'G'], id: 71 },
    { value: ['h', 'H'], id: 72 },
    { value: ['j', 'J'], id: 74 },
    { value: ['k', 'K'], id: 75 },
    { value: ['l', 'L'], id: 76 },
    { value: [';', ':'], id: 186 },
    { value: ['\'', '"'], id: 222 },
    { value: ['ENTER', 'ENTER'], id: 13 },
  ],
  [
    { value: ['SHIFT', 'SHIFT'], id: 16 },
    { value: ['z', 'Z'], id: 90 },
    { value: ['x', 'X'], id: 88 },
    { value: ['c', 'C'], id: 67 },
    { value: ['v', 'V'], id: 86 },
    { value: ['b', 'B'], id: 66 },
    { value: ['n', 'N'], id: 78 },
    { value: ['m', 'M'], id: 77 },
    { value: [',', '<'], id: 188 },
    { value: ['.', '>'], id: 190 },
    { value: ['/', '?'], id: 191 },
    { value: ['&#8593;', '&#8593;'], id: 38 },
    { value: ['SHIFT', 'SHIFT'], id: 16 },
  ],
  [
    { value: ['CTRL', 'CTRL'], id: 17 },
    { value: ['WIN', 'WIN'], id: 91 },
    { value: ['ALT', 'ALT'], id: 18 },
    { value: ['SPACE', 'SPACE'], id: 32 },
    { value: ['ALT', 'ALT'], id: 18 },
    { value: ['&#8592;', '&#8592;'], id: 37 },
    { value: ['&#8595;', '&#8595;'], id: 40 },
    { value: ['&#8594;', '&#8594;'], id: 39 },
    { value: ['CTRL', 'CTRL'], id: 17 },
  ],
];

var button = ({id, value}) => {
	const btn = document.createElement('div');
	btn.classList.add('key');
	btn.id = id;
	btn.innerHTML = value[0];
	return btn;
};

var rows = function(keys) {
	var row = keys.map((el) => button(el));
	var rows = document.createElement('div');
	rows.classList.add('row');
	rows.append(...row);
	return rows;
};

const keyboard = () => {
	const keyboard = document.createElement('div');
	keyboard.classList.add('keyboard');
	keyMatrixEng.map((el) => keyboard.append(rows(el)));
	return keyboard;
};

const textarea = () => {
	const textarea = document.createElement('textarea');
	textarea.classList.add('textarea');
	textarea.setAttribute('cols', 150);
	textarea.setAttribute('rows', 20);
	return textarea;
};

const wrap = () => {
	const wrapper = document.createElement('div');
	wrapper.classList.add('wrapper');
	wrapper.prepend(textarea(), keyboard());
	return wrapper;
};

const app = () => {
	const page = document.querySelector('body');
	page.prepend(wrap());
};

window.addEventListener('load', app);