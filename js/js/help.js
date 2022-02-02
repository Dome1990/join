function showSection(i) {
    let section = document.getElementById('description' + i);
    let chevron = document.getElementById('chevron' + i);
    if (section.classList.contains('dNone')) {
        section.classList.toggle('dNone');
        section.style.height = '0';
        setTimeout(() => {
            section.style.height = '200px';
            chevron.style.transform = 'rotate(180deg)'
        }, 10);
    }
    else {
        section.style.height = '0';
        chevron.style.transform = 'unset'
        setTimeout(() => {
            section.classList.toggle('dNone');
        }, 255);
    }
}