// @flow
import { StyleSheet, Platform } from 'react-native';

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;
export const ARROW_SIZE: number = 10;
export const MARGIN_TOOLTIP = 5;
export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: ARROW_SIZE,
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 3,
    overflow: 'hidden',
    // width: 270,
    // left: 20
  },
  tooltipText: {
    color: '#464646',
    fontFamily: Platform.OS === 'ios' ? "OpenSans" : "OpenSans-Regular"
  },
  tooltipContainer: {
    flex: 1,
    marginTop: 5,
    // borderWidth: 1
  },
  stepNumberContainer: {
    position: 'absolute',
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: 'hidden',
    zIndex: ZINDEX + 1,
  },
  stepNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: '#FFFFFF',
    backgroundColor: '#27ae60',
  },
  stepNumberText: {
    fontSize: 12,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
  },
  button: {
    // padding: 10,
  },
  buttonText: {
    // color: '#0779ff',
    // fontWeight: 'bold',
    fontSize:10,
    fontFamily: Platform.OS === 'ios' ? "OpenSans" : "OpenSans-Regular",
  },
  bottomBar: {
    marginTop: 18,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  overlayRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
