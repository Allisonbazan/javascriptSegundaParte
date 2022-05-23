const actionOne = () => 
    document.getElementById('divOne').style.background = '#870000';

const actionTwo = () => {
    document.getElementById('divTwo').style.width = '600px';
}


const actionThree = () => {
    let divSelect = document.getElementById('divThree');
    // divSelect.style.border = '10px dotted #870000'
    divSelect.style.border = '10px';
    divSelect.style.borderStyle = 'dotted';
    divSelect.style.borderColor = '#870000';
}
