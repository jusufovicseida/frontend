var projectForm = document.getElementById('project');
var stageForm = document.getElementById('stage');
var projectBtn = document.querySelector('input[value=project]');
var stageBtn = document.querySelector('input[value=stage]');
var activePage = document.querySelector('nav ul li:nth-of-type(1) a');

activePage.classList.add('activePage');

projectForm.classList.add('hide');
stageForm.classList.add('hide');

projectBtn.addEventListener('click', function(){
    projectForm.classList.remove('hide');
    formStage.classList.add('hide');
});

stageBtn.addEventListener('click', function(){
    projectForm.classList.add('hide');
    stageForm.classList.remove('hide');
});

