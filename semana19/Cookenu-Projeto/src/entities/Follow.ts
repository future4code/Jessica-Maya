    export class Follow {
        constructor(
            private user_seguidor: string,
            private user_seguido: string
        ) {}
        public getUserSeguidor() {
            return this.user_seguidor
        }
        public getUserSeguido() {
            return this.user_seguido
        }
           
        static toFollowModel(data: any): Follow {
            return new Follow(data.user_seguidor, data.user_seguido)
        }
    }