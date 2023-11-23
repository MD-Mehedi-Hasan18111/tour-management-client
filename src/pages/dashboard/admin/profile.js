import EditProfile from "@/global/components/Modal-Body/EditProfile";
import DashboardLayout from "@/global/layouts/DashboardLayout";
import React, { useState } from "react";

const Profile = () => {
  // Log In Modal states
  const [isProfileEditModal, setIsProfileEditModal] = useState(false);
  const onCloseProfileModal = () => {
    setIsProfileEditModal(false);
  };

  return (
    <DashboardLayout>
      <div>
        <h2>My Profile</h2>
        <button onClick={() => setIsProfileEditModal(true)}>
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
    </DashboardLayout>
  );
};

export default Profile;
