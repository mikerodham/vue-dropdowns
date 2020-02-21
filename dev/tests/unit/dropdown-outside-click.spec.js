import { mount } from '@vue/test-utils';
import VueDropdown from '../../../Dropdown.vue';
import {options, selectedOption} from '../contants';

describe('Dropdown.vue outside click', () => {
  it('closes dropdown-menu on outside click by default', async () => {
    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
      },
    });

    const dropdownToggle = wrapper.find('.dropdown-toggle');
    dropdownToggle.trigger('click');

    await wrapper.vm.$nextTick();

    let dropdownMenu = wrapper.find('.dropdown-menu');
    expect(dropdownMenu.isVisible()).toBe(true);

    document.dispatchEvent(new Event('click'));

    await wrapper.vm.$nextTick();

    dropdownMenu = wrapper.find('.dropdown-menu');

    expect(dropdownMenu.exists()).toBe(false);
  });

  it('closes dropdown-menu on outside click if closeOnOutsideClick is true', async () => {
    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
        closeOnOutsideClick: true,
      },
    });

    const dropdownToggle = wrapper.find('.dropdown-toggle');
    dropdownToggle.trigger('click');

    await wrapper.vm.$nextTick();

    let dropdownMenu = wrapper.find('.dropdown-menu');
    expect(dropdownMenu.isVisible()).toBe(true);

    document.dispatchEvent(new Event('click'));

    await wrapper.vm.$nextTick();

    dropdownMenu = wrapper.find('.dropdown-menu');

    expect(dropdownMenu.exists()).toBe(false);
  });

  it('does not close dropdown-menu on outside click if closeOnOutsideClick is false', async () => {
    const wrapper = mount(VueDropdown, {
      propsData: {
        options,
        selected: selectedOption,
        closeOnOutsideClick: false,
      },
    });

    const dropdownToggle = wrapper.find('.dropdown-toggle');
    dropdownToggle.trigger('click');

    await wrapper.vm.$nextTick();

    let dropdownMenu = wrapper.find('.dropdown-menu');
    expect(dropdownMenu.isVisible()).toBe(true);

    document.dispatchEvent(new Event('click'));

    await wrapper.vm.$nextTick();

    dropdownMenu = wrapper.find('.dropdown-menu');

    expect(dropdownMenu.exists()).toBe(true);
  });
});
