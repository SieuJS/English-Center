document.addEventListener('DOMContentLoaded', function() {
    const teacherButton = document.querySelector('.form-teacher');
    const studentButton = document.querySelector('.form-student');
    const accessCodeForm = document.getElementById('access-code-form');

    teacherButton.addEventListener('click', function() {
        teacherButton.classList.toggle('button-click');
        studentButton.classList.toggle('button-click');

        teacherButton.disabled = true;
        studentButton.disabled = false;

        accessCodeForm.style.display = 'block';
        accessCodeForm.style.textAlign = 'left';
    });

    studentButton.addEventListener('click', function() {
        studentButton.classList.toggle('button-click');
        teacherButton.classList.toggle('button-click');

        studentButton.disabled = true;
        teacherButton.disabled = false;

        accessCodeForm.style.display = 'none';
    });
});