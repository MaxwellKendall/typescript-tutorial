const input = document.getElementById('input') as HTMLInputElement;

input.autofocus = true;

input.addEventListener("input", (e) => {
    const i = e.currentTarget as HTMLInputElement;
    console.log('value', i.value);
})