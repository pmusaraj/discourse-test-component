import { ajax } from "discourse/lib/ajax";

export default {
  name: "test-initializer-name",
  initialize(container) {
    ajax(`/proxy/recommendations/echo.json`, {
      type: "POST",
      data: { string: "Hello, World!" },
    })
      .then((result) => {
        console.log("result", result);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        console.log("finally callback hit");
      });
  },
};
