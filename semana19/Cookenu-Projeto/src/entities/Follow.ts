 export enum FOLLOW_USER {
        SEGUIR = "SEGUINDO",
        DESSEGUIR = "NOT SEGUINDO"
    }
    
    export class Follow {
        constructor(
            private user_seguidor: string,
            private user_seguindo: string,
            private role: FOLLOW_USER
        ) {}
        public getUserSeguidor() {
            return this.user_seguidor
        }
        public getUserSeguindo() {
            return this.user_seguindo
        }
        public getRole() {
            return this.role
        }
           
        static toFollowModel(data: any): Follow {
            return new Follow(data.user_seguidor, data.user_seguindo, data.role)
        }
    }