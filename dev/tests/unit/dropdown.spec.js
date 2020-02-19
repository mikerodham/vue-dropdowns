import { mount } from '@vue/test-utils';
import VueDropdown from '../../../Dropdown.vue';

const options = [
  {
    name: 'option 1',
  },
  {
    name: 'option 2',
  },
  {
    name: 'option 3',
  },
];

const [selectedOption] = options;

describe('Dropdown.vue', () => {
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
    let allItemsRendered = true;
    optionItems.wrappers.forEach((item, index) => {
      if(item.text() !== options[index].name) {
        allItemsRendered = false;
      }
    });

    expect(allItemsRendered).toBe(true);
  });
});
