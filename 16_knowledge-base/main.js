// Select

document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
      searchEnabled: false,
       itemSelectText: '',
      shouldSort: false,
      classNames: {
      containerOuter: 'choices main_choices',
       }
  });

});



//Form

let validation = new JustValidate('#form')

let selector = document.querySelector('#phone')

let im = new Inputmask('+7(999)999-99-99')
im.mask(selector)

validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимум 2 символа',
    },
])
.addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
    },
    {
        rule: 'email',
        errorMessage: 'Не верный формат e-mail',
    },
])

.addField('#phone', [
    {
       validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length > 0)
       },
       errorMessage: 'Вы не ввели телефон'
    },
    {
        validator: (value) => {
         const phone = selector.inputmask.unmaskedvalue()
         return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: 'Введите телефон полностью'
     },


])


//Tooltip

tippy('[data-tippy-content]');
