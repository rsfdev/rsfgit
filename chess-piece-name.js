let chessPiece = 'Bishop';
switch (chessPiece.toLowerCase()) {
    case ('king'):
    console.log('king -> move vertically one square');
    break;

    case ('queen'):
    console.log('queen -> move down one square');
    break;

    case ('rook'):
    console.log('rook -> move up three squares');
    break;

    case ('bishop'):
        console.log('bishop -> move diagonally one square');
    break;

    case ('knight'):
        console.log('knight -> move up two and over one square');
    break;

    case ('pawn'):
        console.log('pawn -> move forward two squares');
    break;

    default:
    console.log('Error: Please enter a valid chess piece');
    break;
};
\testing
