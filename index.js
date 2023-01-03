const tagsContainer = document.querySelector('.tag-box ul'),
input = document.querySelector('.tag-box input')
let tags = [];
input.addEventListener('keyup', (e) => {
    const value = e.target.value;
    if (e.key == 'Enter') {
        console.log(value);
        if (value.length > 1 && !tags.includes(value)) {
            value.split(',').forEach((val) => {
                tags.push(val);
                const newTag = document.createElement('li');
                newTag.innerHTML = `<p>${val}</p> <i class="uil uil-multiply" onClick="remove(this, '${val}')"></i> `;
                tagsContainer.appendChild(newTag);
                console.log(tagsContainer);
                e.target.value = '';
            });
        }
    }
});
const remove = (element, val) => {
    tags = tags.filter((tag) => {
        return tag !== val;

    });
    element.parentElement.remove();
    console.log(tags);

}
