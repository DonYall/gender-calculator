const form = document.getElementById('gender-form');
const scoreSpan = document.getElementById('score');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get user input
    const MALE = parseFloat(document.getElementById("male").value) || 0;
    const FEMALE = parseFloat(document.getElementById("female").value) || 0;
    const AMBIGENDER = parseFloat(document.getElementById("ambigender").value) || 0;
    const ABINARY = parseFloat(document.getElementById("abinary").value) || 0;
    const ACEGENDER = parseFloat(document.getElementById("acegender").value) || 0;
    const AGENDER = parseFloat(document.getElementById("agender").value) || 0;
    const ANDROGYNE = parseFloat(document.getElementById("androgyne").value) || 0;
    const AZURGIRL = parseFloat(document.getElementById("azurgirl").value) || 0;
    const BIGENDER = parseFloat(document.getElementById("bigender").value) || 0;
    const DEMIBOY = parseFloat(document.getElementById("demiboy").value) || 0;
    const DEMIGIRL = parseFloat(document.getElementById("demigirl").value) || 0;
    const GENDERFAE = parseFloat(document.getElementById("genderfae").value) || 0;
    const GENDERFLUID = parseFloat(document.getElementById("genderfluid").value) || 0;
    const NEOBOY = parseFloat(document.getElementById("neoboy").value) || 0;
    const NEOGIRL = parseFloat(document.getElementById("neogirl").value) || 0;
    const NONBINARY = parseFloat(document.getElementById("nonbinary").value) || 0;
    const PANGENDER = parseFloat(document.getElementById("pangender").value) || 0;
    const POLYGENDER = parseFloat(document.getElementById("polygender").value) || 0;
    const QUADGENDER = parseFloat(document.getElementById("quadgender").value) || 0;
    const QUINTGENDER = parseFloat(document.getElementById("quintgender").value) || 0;
    const TRANSGENDER = parseFloat(document.getElementById("transgender").value) || 0;
    const TRIGENDER = parseFloat(document.getElementById("trigender").value) || 0;
    const TOMBOY = parseFloat(document.getElementById("tomboy").value) || 0;
    const TOMGIRL = parseFloat(document.getElementById("tomgirl").value) || 0;
    const XENOGENDER = parseFloat(document.getElementById("xenogender").value) || 0;

    const genderArr = [MALE * 100, FEMALE * 100, AMBIGENDER * 75, ABINARY * 20, ACEGENDER * 25, AGENDER, ANDROGYNE * 80,
    AZURGIRL * 50, BIGENDER * 55, DEMIBOY * 90, DEMIGIRL * 90, GENDERFAE * 19, GENDERFLUID * 23, NEOBOY * 70, NEOGIRL * 70,
    NONBINARY * 60, PANGENDER * 2, POLYGENDER * 22, QUADGENDER * 30, QUINTGENDER * 24, TRANSGENDER * 31, TRIGENDER * 38,
    TOMBOY * 62, TOMGIRL * 62, XENOGENDER * 85]

    // A function that outputs your gender score from 1-100
    let score = 0;
    let j = 0;
    for (let i = 0; i < genderArr.length; i++) {
        if (genderArr[i] > 0) {
            j++;
            score += genderArr[i];
        }
    }
    if (j == 0) {
        j = 1;
    }
    score /= (j*100);
    // Implement the vincent algorithm
    score = Math.sqrt(score) - 5;

    // Display gender score
    scoreSpan.textContent = score.toFixed(2);
});