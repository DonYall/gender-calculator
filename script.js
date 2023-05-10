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

    const genderArr = [MALE * 50, FEMALE * 49, AMBIGENDER * 25, ABINARY * -30, ACEGENDER * -25, AGENDER * -50, ANDROGYNE * 30,
    BIGENDER * 5, DEMIBOY * 40, DEMIGIRL * 39, GENDERFAE * -31, GENDERFLUID * -27, NEOBOY * 20, NEOGIRL * 19,
    NONBINARY * 10, PANGENDER * -48, POLYGENDER * -28, QUADGENDER * -20, QUINTGENDER * -26, TRANSGENDER * -29, TRIGENDER * -12,
    TOMBOY * 12, TOMGIRL * 11, XENOGENDER * 35]

    // A function that outputs a gender score from -5 to +5
    let score = 0;
    let j = 0;
    for (let i = 0; i < genderArr.length; i++) {
        if (genderArr[i] != 0) {
            j++;
            score += genderArr[i];
        }
    }
    if (j == 0) {
        j = 1;
    }
    score /= (j*10);
    // Implement the vincent algorithm
    //score = Math.sqrt(score) - 5;

    // Display gender score
    scoreSpan.textContent = score.toFixed(2) + " on the DonYall scale.";
});
