const tagsContainer = document.querySelector('.tag-box ul'),
selectElement = document.querySelector('.tag-box .options-container'),
optionElement = document.querySelector('.tag-box .options-container p');
const options = ['fffffffff', 'fddddddd', 'ggggggggg', 'uuuuuuuuuuu',];

let tags = [];
tagsContainer.addEventListener('click', (e) => {
    if (selectElement.classList.contains('hidden')) {
        selectElement.classList.remove('hidden');
    } else {
        selectElement.classList.add('hidden');
    }
});

// adding options
options.forEach((option) => {
    const optionElement = document.createElement('p');
    optionElement.onclick = (e) => {
        addTagElement(e);
    }
    optionElement.innerHTML = option;
    selectElement.appendChild(optionElement);
});


const addTagElement = (e)  => {
    const value = e.target.innerHTML;
    if (!tags.includes(value)) {
        tags.push(value);
        console.log(tags);
        const newTag = document.createElement('li');
        newTag.innerHTML = `<p>${value}</p> <i class="uil uil-multiply" onClick="remove(this, '${value}')"></i> `;
        tagsContainer.appendChild(newTag);
    }
}
const remove = (element, val) => {
    tags = tags.filter((tag) => {
        return tag !== val;

    });
    element.parentElement.remove();
    console.log(tags);

}
