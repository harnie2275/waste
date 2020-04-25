import constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class UserPermissions {
    getCameraPermission = async () => {
        if ( constants.platform.ios ) {
            const {status} = await Permissions.askAsync( Permissions.CAMERA_ROLL )

            if (status !="granted") {
                alert("We need permission to use your camera roll")
            }
        }
    }
}

export default new UserPermissions();