import { Dimensions, Platform, PixelRatio } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;


export const normalize = (size) => {
    const scale = screenWidth / 375;
    const newSize = size * scale;
    if (Platform.OS == 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

export const showToast = (errors, color, multiple) => {
    if (multiple !== true)
      multiple = false;
  
    if (color !== true)
      color = '#000';
  
    if (Array.isArray(errors))
      errors = errorMessage(errors, multiple);
  
    Toast.show(errors, {
      duration: 5000,
      backgroundColor: color,
      position: -30,
      animation: true,
      shadow: false,
      hideOnPress: true,
      opacity: 0.9
    })
  }