import React from "react";

function AccountDropMenu() {
  return (
    <React.Fragment>
      <div
        id="dropdown"
        style={{
          height: "fit-content",
          position: "absolute",
          left: "90.5%",
          top: "16.5%",
        }}
        class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default AccountDropMenu;
