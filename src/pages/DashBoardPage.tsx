import React from "react";

const DashBoardPage = ({ data }) => {
  const userData = data.data;
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="">
                User Id
              </th>
              <th scope="col" class="">
                FirtName
              </th>
              <th scope="col" class="">
                LastName
              </th>
              <th scope="col" class="">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Avatar
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {userData &&
        userData.map((user) => {
          return (
            <div key={user.id}>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td class="px-6 py-4">{user.id}</td>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.first_name}
                    </th>
                    <td class="px-6 py-4">{user.last_name}</td>
                    <td class="px-6 py-4">{user.email}</td>

                    <img
                      style={{
                        borderRadius: "50%",
                        margin: "15px",
                        width: "80px",
                        height: "80px",
                      }}
                      src={user.avatar}
                    />
                  </tr>
                </table>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DashBoardPage;
