const user = require('database/user.json');

aaa
class User {

    constructor(user){
        this.user = user

    }
    storeData = async (user_inf) => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(user_inf));
        } catch (error) {
         console.log(error);
        }
      };

      getMyValue = async () => {
        try {
          const value = await AsyncStorage.getItem('user')
        } catch(error) {
         console.log(error);
         
        }      
      }

      removeValue = async () => {
        try {
          await AsyncStorage.removeItem('user')
        } catch(e) {
            console.log(error)
        }
      
        
      }

      

}