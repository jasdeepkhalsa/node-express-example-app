function onSubmit(event) {
  var name = document.querySelector('[name="name"]')

  if (name.value) {
    location.href = location.href + '?' + 'name=' + name.value
  }
}