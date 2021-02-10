import { Component, Prop, Vue } from 'vue-property-decorator';
import playerValidator from "@/services/playerValidator";

@Component
export default class PlayerSignUp extends Vue {
    name = '';
    heroClass = '';
    message = 'Please choose a name';

    validatePlayer(event: Event) {
        event.preventDefault();
        this.message = playerValidator.isPlayerValid(this.name, this.heroClass) ? 'Your name is invalid! :(' : 'Your name is valid!';
    }
}
