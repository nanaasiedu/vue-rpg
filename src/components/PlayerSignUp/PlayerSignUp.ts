import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PlayerSignUp extends Vue {
    name: string = '';
    heroClass: string = '';
    message: string = 'Please choose a name';

    validatePlayer(event: Event) {
        event.preventDefault();
        this.message = this.name === '' ? 'Your name is invalid! :(' : 'Your name is valid!';
    }
}
