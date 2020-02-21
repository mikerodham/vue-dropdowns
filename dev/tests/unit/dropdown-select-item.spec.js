import { mount } from '@vue/test-utils';
import VueDropdown from '../../../Dropdown.vue';
import { options, selectedOption } from '../contants';

describe('Dropdown.vue select item', () => {
  it('fires updateOption event on click event item', async () => {
    const updateOptionHandler = jest.fn();

    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
      },
      listeners: {
        updateOption: updateOptionHandler,
      },
    });
    const dropdownToggle = wrapper.find('.dropdown-toggle');
    dropdownToggle.trigger('click');

    await wrapper.vm.$nextTick();

    const optionItems = wrapper.findAll('.dropdown-menu li a');
    const secondItem = optionItems.at(1);
    secondItem.trigger('click');

    expect(updateOptionHandler.mock.calls.length).toBe(1);
  });
});
