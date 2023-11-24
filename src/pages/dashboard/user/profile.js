import EditProfile from "@/global/components/Modal-Body/EditProfile";
import LeftProfile from "@/global/components/UI/Dashboard/Profile/LeftProfile";
import DashboardLayout from "@/global/layouts/DashboardLayout";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // Log In Modal states
  const [isProfileEditModal, setIsProfileEditModal] = useState(false);
  const onCloseProfileModal = () => {
    setIsProfileEditModal(false);
  };

  return (
    <DashboardLayout>
      <>
        <h2 className="text-center text-2xl font-bold  uppercase mt-6">
          Account Information
        </h2>
        <div className="flex flex-row items-center my-4">
          {/*===================================
                    Left Profile
           ================================*/}
          <div className="basis-1/2 text-center ">
            <LeftProfile />
          </div>
          {/*===================================
                    Right Profile
           ================================*/}
          <div className="basis-2/3 ps-10 ">
            <div>
              <div className="text-xl">
                <div className="flex flex-row my-4">
                  <div className="basis-1/3 font-medium">Rule</div>
                  <div className="basis-1/3 border-b-2 uppercase border-gray-200 ps-4">
                    {user?.role}
                  </div>
                </div>
                <div className="flex flex-row justify-start mx-auto my-4">
                  <div className="basis-1/3 font-medium">User ID</div>
                  <div className="basis-1/3 border-b-2 border-gray-200 ps-4">
                    {user?._id}
                  </div>
                </div>
                <div className="flex flex-row justify-start mx-auto my-4">
                  <div className="basis-1/3 font-medium">First Name</div>
                  <div className="basis-1/3 border-b-2 border-gray-200 ps-4">
                    {user?.firstName}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Last Name</div>
                  <div className="basis-1/3 border-b-2 border-gray-200 ps-4">
                    {user?.lastName}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Email</div>
                  <div className="basis-1/3 border-b-2 border-gray-200 ps-4">
                    {user?.email}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Gender</div>
                  <div className="basis-1/3 border-b-2 uppercase border-gray-200 ps-4">
                    {user?.gender}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Contact Number</div>
                  <div className="basis-1/3 border-b-2 border-gray-200 ps-4">
                    {user?.mobileCode}
                    {user?.phoneNumber}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Created At</div>
                  <div className="basis-1/3 border-b-2 border-gray-200 ps-4">
                    {user?.createdAt}
                  </div>
                </div>
              </div>
            </div>

            {/* =======================
                 Update modal
          ======================== */}
            <button
              className="my-10 lg:text-[16px] text-[14px] rounded-[10px] bg-blue-400 hover:bg-blue-300 text-white lg:w-[336px] w-[236px] lg:py-[16px] py-[12px] mx-auto font-[600]"
              onClick={() => setIsProfileEditModal(true)}
            >
              Edit Profile
            </button>

            <dialog
              open={isProfileEditModal}
              onClose={onCloseProfileModal}
              className="modal"
            >
              <div className="modal-box lg:w-8/12 md:w-7/12 w-11/12 max-w-2xl">
                <EditProfile setIsProfileEditModal={setIsProfileEditModal} />
              </div>
              <form
                method="dialog"
                className="modal-backdrop"
                style={{ background: "rgba(0, 0, 0, 0.6)" }}
              >
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </>
    </DashboardLayout>
  );
};

export default Profile;
