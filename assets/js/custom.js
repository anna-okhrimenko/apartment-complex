const buildItem = document.querySelectorAll('.build-item');
const buildShow = document.querySelector('#build-show');
const floorShow = document.querySelector('#floors-show');
const flatsShow = document.querySelector('#flats-show');
const buildInfo = document.querySelector('.build-info');

buildItem.forEach(item => {
    const dataBuildNumber = item.getAttribute('data-build-number');
    const dataFloors = item.getAttribute('data-floors');
    const dataFlats = item.getAttribute('data-flats');

    if (!isNumber(dataFlats)) {
        item.classList.add('hidden-floors');
        item.closest('a').addEventListener('click', (e)=>{
            e.preventDefault();
        });
    }

    item.addEventListener('mouseover', ()=> {  
        buildShow.innerText = dataBuildNumber;
        floorShow.innerText = dataFloors;
        flatsShow.innerText = dataFlats;

        if (!isNumber(dataFlats)) {
            buildInfo.classList.add('hidden-floors-info');
        } else {
            buildInfo.classList.remove('hidden-floors-info');
        }

    })
});

const firstBuildItem = document.querySelectorAll('.first-build-item');
const firstFloorShow = document.querySelector('.first-floors-show');
const firstFlatsShow = document.querySelector('.first-flats-show');
const firstInfo = document.querySelector('.first-build-info');

firstBuildItem.forEach(item => {
    const dataFloors = item.getAttribute('data-build-floors');
    const dataFlats = item.getAttribute('data-build-flats');

    if (!isNumber(dataFlats)) {
        item.classList.add('hidden-floors');
        item.removeAttribute('data-bs-toggle');
    }

    item.addEventListener('mouseover', ()=> {
        firstFloorShow.innerText = dataFloors;
        firstFlatsShow.innerText = dataFlats;

        if (!isNumber(dataFlats)) {
            firstInfo.classList.add('hidden-floors-info');
        } else {
            firstInfo.classList.remove('hidden-floors-info');
        }
    })
});

function isNumber(value) {
    return (parseInt(value) >= 0 || parseInt(value) <= 0);
}

const flatsBlock = document.querySelector('.flats-block');
const btns = document.querySelector('.flats-block .btn-close');
btns.onclick = function() {
    flatsBlock.classList.remove('active');
}

const apartment = document.querySelectorAll('.flats-apartment');
    apartment.forEach(function (item) {
        item.onclick = function() {
            flatsBlock.classList.add('active');
        }
    })