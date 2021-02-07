import {mount} from '@vue/test-utils'
import PlayerSignUp from "@/components/PlayerSignUp/PlayerSignUp";

describe('PlayerSignUp.vue', () => {
  it('success when name is valid', async () => {
    const wrapper = mount(PlayerSignUp);

    await wrapper.find('input.name').setValue('Joker');
    const heroClassOptions = wrapper.find('select.hero-class').findAll('option');
    await heroClassOptions.at(0).setSelected();
    await wrapper.find('input[type=submit]').trigger('click');

    const checkedOptionElement: HTMLOptionElement = wrapper.find('option:checked').element as HTMLOptionElement;
    const nameInputElement: HTMLInputElement = wrapper.find('input.name').element as HTMLInputElement;
    expect(nameInputElement.value).toBe('Joker');
    expect(checkedOptionElement.value).toBe('Thief');
    expect(wrapper.find('.message').text()).toMatch('Your name is valid!')
  })

  it('unsuccessful when name is invalid', async () => {
    const wrapper = mount(PlayerSignUp);
    await wrapper.find('input.name').setValue('');
    const heroClassOptions = wrapper.find('select.hero-class').findAll('option');

    await heroClassOptions.at(0).setSelected();

    const checkedOptionElement: HTMLOptionElement = wrapper.find('option:checked').element as HTMLOptionElement;
    expect(checkedOptionElement.value).toBe('Thief');

    await wrapper.find('input[type=submit]').trigger('click');

    expect(wrapper.find('.message').text()).toMatch('Your name is invalid! :(')
  })
})
