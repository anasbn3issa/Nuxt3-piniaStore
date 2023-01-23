export const useAuth = defineStore(
    "user", {
        state: () => {
            return {
                user: '',
                token : '',
                isLoggedIn: false,
            }
        },
        getters: {
            getUser() {
                return this.user;
            },
            getToken() {
                return this.token;
            }
        },
        actions: {
            async login(body) { // asuming that body contains email and password 
                const response = await backend.post("/login", body); // backend is an axios instance and should return a user object with a token
                if(response.data) {
                    console.log("login success for ",body.email);
                    this.user = response.data;
                    this.token = response.data.token; 
                    this.isLoggedIn = true;
                } else {
                    console.log("failed login for ",body.email);
                    this.user = '';
                    this.token = '';
                    this.isLoggedIn = false;
                }
            },
        }
    }
);
