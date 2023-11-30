import EditProfile from "@/global/components/Modal-Body/EditProfile";
import LeftProfile from "@/global/components/UI/Dashboard/Profile/LeftProfile";
import DashboardLayout from "@/global/layouts/DashboardLayout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaPenToSquare } from "react-icons/fa6";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  // Log In Modal states
  const [isProfileEditModal, setIsProfileEditModal] = useState(false);
  const onCloseProfileModal = () => {
    setIsProfileEditModal(false);
  };

  return (
    <DashboardLayout>
      <>
        <div className="flex flex-row items-center ">
          {/*===================================
                    Left Profile
           ================================*/}
          <div className="basis-1/2 text-center ">
            <LeftProfile />
          </div>
          {/*===================================
                    Right Profile
           ================================*/}
          <div className="basis-2/3 ps-10 my-8">
            <div className="flex items-center justify-between md:w-2/3 w-full">
              <h2 className=" text-4xl font-bold capitalize ">
                Account Information
              </h2>
              {/*  =============================
                     Update modal 
                =================================== */}
              <FaPenToSquare
                className="text-4xl"
                onClick={() => setIsProfileEditModal(true)}
              />
            </div>
            <div>
              <div className="text-xl">
                <div className="flex flex-row my-4">
                  <div className="basis-1/3 font-medium">Role :-</div>
                  <div className="basis-1/3 capitalize border-gray-200 ps-4">
                    {user?.role}
                  </div>
                </div>
                <div className="flex flex-row justify-start mx-auto my-4">
                  <div className="basis-1/3 font-medium">First Name :-</div>
                  <div className="basis-1/3 border-gray-200 ps-4">
                    {user?.firstName}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Last Name :-</div>
                  <div className="basis-1/3 border-gray-200 ps-4">
                    {user?.lastName}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Email :-</div>
                  <div className="basis-1/3 border-gray-200 ps-4">
                    {user?.email}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Gender :-</div>
                  <div className="basis-1/3 capitalize border-gray-200 ps-4">
                    {user?.gender}
                  </div>
                </div>
                <div className="flex flex-row mx-auto my-4">
                  <div className="basis-1/3 font-medium">Contact Number :-</div>
                  <div className="basis-1/3 border-gray-200 ps-4">
                    {user?.mobileCode}
                    {user?.phoneNumber}
                  </div>
                </div>
              </div>
            </div>

            {/*  =============================
                     Update modal dialogue
                =================================== */}
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
