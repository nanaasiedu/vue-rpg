class PlayerValidator {
    isPlayerValid(name: string, heroClass: string): boolean {
        return name === '';
    }
}

export default new PlayerValidator();
