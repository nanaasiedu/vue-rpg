import { Component, Vue } from 'vue-property-decorator';
import PlayerSignUp  from "@/components/PlayerSignUp/PlayerSignUp.vue";

@Component({
    components : {
        PlayerSignUp
    }
})
export default class StartView extends Vue {}
