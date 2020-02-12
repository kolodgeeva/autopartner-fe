import * as Colors from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import * as Spacing from 'material-ui/styles/spacing';

module.exports = {
  spacing: Spacing,
  fontFamily: 'Verdana, sans-serif',
  palette: {
    primary1Color: Colors.grey700,
    primary2Color: Colors.grey600,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey200,
    accent3Color: Colors.grey300,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey100,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    error1Color: Colors.red900,
    error2Color: Colors.red100,
    warn1Color: Colors.yellow900,
    warn2Color: Colors.yellow500,
    info1Color: Colors.blue600,
    info2Color: Colors.blue200
  }
};
