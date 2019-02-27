window.onload = function bubble() {
    var red = [0, 120, 63];
    var blue = [190, 77, 55];
    var white = [75, 100, 40];
    var orange = [40, 77, 45];
    var purple = [220, 50, 60];

    var myName = "Marcin";
    var letterColors = [blue, red, orange, white, purple];
    if ( 19 > 5 ) {
        bubbleShape = "circle";
    } else {
        bubbleShape = "square";
    }

    drawName(myName, letterColors);

    bounceBubbles();
};