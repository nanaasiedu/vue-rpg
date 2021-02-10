import {createLocalVue, mount} from '@vue/test-utils'
import PlayerSignUp from "@/components/PlayerSignUp/PlayerSignUp";
import playerValidator from "@/services/playerValidator";
import Vuetify from 'vuetify'
import Vue from 'vue';

Vue.use(Vuetify);

jest.mock('@/services/playerValidator', () => ({
  isPlayerValid: jest.fn((name: string, heroClass: string) => name === "")
}))

describe('PlayerSignUp.vue', () => {
  let localVue = createLocalVue();
  let vuetify: Vuetify;

  beforeEach(() => {
    localVue = createLocalVue()
    //vuetify = new Vuetify()
    localVue.use(Vuetify);
  })

  it('success when name is valid', async () => {
    const wrapper = mount(PlayerSignUp, {
      localVue,
      //vuetify,
    });

    await wrapper.find('.name input').setValue('Joker');
    const heroClassOptions = wrapper.find('select.hero-class').findAll('option');
    await heroClassOptions.at(0).setSelected();
    await wrapper.find('input[type=submit]').trigger('click');

    const checkedOptionElement: HTMLOptionElement = wrapper.find('option:checked').element as HTMLOptionElement;
    const nameInputElement: HTMLInputElement = wrapper.find('.name input').element as HTMLInputElement;
    expect(nameInputElement.value).toBe('Joker');
    expect(checkedOptionElement.value).toBe('Thief');
    expect(playerValidator.isPlayerValid).toHaveBeenCalled();
    expect(wrapper.find('.message').text()).toMatch('Your name is valid!')
  })

  it('unsuccessful when name is invalid', async () => {
    const wrapper = mount(PlayerSignUp, {
      localVue,
      //vuetify,
    });
    await wrapper.find('.name input').setValue('');
    const heroClassOptions = wrapper.find('select.hero-class').findAll('option');

    await heroClassOptions.at(0).setSelected();

    const checkedOptionElement: HTMLOptionElement = wrapper.find('option:checked').element as HTMLOptionElement;
    expect(checkedOptionElement.value).toBe('Thief');

    await wrapper.find('input[type=submit]').trigger('click');

    expect(wrapper.find('.message').text()).toMatch('Your name is invalid! :(')
  })
})
