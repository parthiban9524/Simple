import Config from "react-native-config";

const config = {
    api: {
        host: Config.BASE_URL,
        timeout: 20000,
    }
};

console.log("BAsa", config.api);

export const API_HOST = config.api.host + '/api';
export default config