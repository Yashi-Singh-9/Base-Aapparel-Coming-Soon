# **Frontend Mentor - Base Apparel Coming Soon Page Solution**

This is a solution to the [Base Apparel Coming Soon Page Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## **Table of Contents**

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## **Overview**

### **The Challenge**

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty.
  - The email address is not formatted correctly.

### **Screenshot**

![Base Apparel Coming Soon](design/desktop-design.jpg)
![Base Apparel Coming Soon](design/mobile-design.jpg)

*(Add a screenshot of your project here)*

### **Links**

- Solution URL: [Add your solution URL here](https://your-solution-url.com)
- Live Site URL: [Add your live site URL here](https://your-live-site-url.com)

---

## **My Process**

### **Built With**

- **HTML5**: Semantic HTML structure for accessibility.
- **SCSS (Sass)**: For more organized and maintainable CSS. Includes variables, mixins, and nested rules.
- **JavaScript**: Handles form validation for email input and provides dynamic error/success messages.
- **Flexbox**: Used to create a flexible layout that adapts to various screen sizes.
- **Mobile-First Design**: The design starts for mobile screens and adapts to larger screens using media queries.
- **Google Fonts**: Used "Josefin Sans" for typography.

### **What I Learned**

- **SCSS Nesting**: I learned how to organize styles better by utilizing SCSS’s feature of nesting rules. This makes my CSS more readable and easier to maintain.
  
  Example of SCSS nesting:
  ```scss
  .image-container {
    width: 100%;
    height: auto;
    display: block;
  
    img {
      &.hero-desktop {
        display: none;
      }
  
      &.hero-mobile {
        display: block;
        width: 100%;
      }
    }
  }
  ```

- **Form Validation with JavaScript**: I worked with JavaScript to handle form submission, display error messages for invalid email addresses, and show success messages when the form is successfully submitted.

  Example of form validation:
  ```js
  const submitButton = document.getElementById('submit');
  const emailInput = document.getElementById('email');
  const errorMessage = document.querySelector('.text-error');

  submitButton.addEventListener('click', function () {
    if (!emailInput.value || !validateEmail(emailInput.value)) {
      errorMessage.textContent = "Please provide a valid email address.";
    } else {
      errorMessage.textContent = '';
      alert("Email submitted successfully!");
    }
  });

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  ```

### **Continued Development**

- **Refining Accessibility**: In future projects, I plan to make sure all interactive elements are fully accessible, including adding `aria` attributes where needed.
  
- **Enhanced Email Validation**: I would like to further enhance the email validation to check for edge cases and improve user experience with real-time validation.

### **Useful Resources**

- [SCSS Nesting Tutorial](https://www.smashingmagazine.com/2016/10/guide-to-nesting-with-sass/)
- [Form Validation in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Google Fonts - Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)

## **Author**

- Frontend Mentor - [@Yashi-Singh-9](https://www.frontendmentor.io/profile/Yashi-Singh-9)
- LinkedIn - [@Yashi Singh](https://www.linkedin.com/in/yashi-singh-b4143a246)

---

## **Acknowledgments**

I would like to acknowledge **Frontend Mentor** for providing such well-structured challenges. These challenges push me to learn new skills and improve existing ones. A special thanks to the community for their support and feedback throughout the process.

---

### Additional Notes

- Feel free to check out the solution in your browser and let me know if you have any feedback or suggestions! 😊
  
