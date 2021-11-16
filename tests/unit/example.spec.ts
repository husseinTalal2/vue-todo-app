import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import Task from "@/components/Task.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Header, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Task.vue", () => {
  it("renders props.task when passed", () => {
    const task = {task:"asx", finished:false};
    const wrapper = shallowMount(Task, {
      props: { task },
    });
    expect(wrapper.text()).toContain(task.task);
  });
});
