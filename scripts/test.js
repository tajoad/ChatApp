const d = document.querySelector('.getMe');

let width = 1;
const q = () => {
    d.innerHTML = `${width++}%`;
};

let interval = setInterval(q, 10);

if (width ==== 100) {
    clearInterval(interval);
}

