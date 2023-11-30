import { setUser } from "@/global/redux/features/Profile/ProfileSlice";
import { PhotoUploadToImageBB, UpdateUser } from "@/global/services/Profile";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const LeftProfile = () => {
  const [imageLink, setImageLink] = useState("");
  const hiddenFileInput = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("image", file);
    const res = await PhotoUploadToImageBB(data);
    if (res?.status === 200) {
      setImageLink(res?.data?.data?.display_url);
      console.log(res);
    } else {
      toast.error("Something went wrong to upload image to imagebb");
    }
  };

  // ================================================
  //      imgbb image post and update profileImage
  //   =====================================================

  const handleUploadButtonClick = async () => {
    const userData = {
      profileImage: imageLink,
    };
    const res = await UpdateUser(userData);
    if (res?.status === 200) {
      dispatch(setUser(res?.data?.data));
    } else {
      toast.error(res?.response?.data?.message);
    }
  };

  useEffect(() => {}, [imageLink]);

  return (
    <div className="image-upload-container">
      <div className="box-decoration flex flex-col items-center">
        <div className="cursor-pointer">
          {imageLink ? (
            <img
              src={imageLink}
              alt="upload image"
              className="img-display-after w-[150px] h-[150px] rounded-full "
            />
          ) : user?.profileImage ? (
            <img
              src={user?.profileImage}
              alt="User"
              className="md:h-[120px] md:w-[120px] h-[30px] w-[30px] mx-auto rounded-full"
            />
          ) : (
            <div className="bg-[#0D1218] md:h-[120px] h-[30px] md:w-[120px] w-[30px] rounded-[50%] flex items-center justify-center Dm text-white font-[700] md:text-[18px] text-[14px]">
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </div>
          )}
          <label htmlFor="image-upload-input" className="image-upload-label ">
            {imageLink ? imageLink.name : "Choose an image"}
          </label>
          <input
            id="image-upload-input"
            className="h-1/6 w-1/6"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        <button
          className="my-10 lg:text-[16px] text-[14px] rounded-[10px] bg-blue-400 hover:bg-blue-300 text-white lg:w-[336px] w-[236px] lg:py-[16px] py-[12px] mx-auto font-[600]"
          onClick={handleUploadButtonClick}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default LeftProfile;
