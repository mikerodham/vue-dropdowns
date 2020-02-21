import { mount } from '@vue/test-utils';
import VueDropdown from '../../../Dropdown.vue';
import {options, selectedOption} from '../contants';

describe('Dropdown.vue render', () => {
  it('renders dropdown-toggle', () => {
    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
      },
    });
    const dropdownToggle = wrapper.find('.dropdown-toggle');
    expect(dropdownToggle.isVisible()).toBe(true);
  });

  it('renders dropdown-menu after click on dropdown-toggle', async () => {
    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
      },
    });
    const dropdownToggle = wrapper.find('.dropdown-toggle');
    dropdownToggle.trigger('click');

    await wrapper.vm.$nextTick();

    const dropdownMenu = wrapper.find('.dropdown-menu');
    expect(dropdownMenu.isVisible()).toBe(true);
  });

  it('renders option items after click on dropdown-toggle', async () => {
    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
      },
    });
    const dropdownToggle = wrapper.find('.dropdown-toggle');
    dropdownToggle.trigger('click');

    await wrapper.vm.$nextTick();

    const optionItems = wrapper.findAll('.dropdown-menu li');
    let allItemsRendered = optionItems.wrappers.every((item, index) => {
      return item.text() === options[index].name;
    });

    expect(allItemsRendered).toBe(true);
  });
});
