import { setUser } from "@/global/redux/features/Profile/ProfileSlice";
import { UpdatePropile, UpdateUser } from "@/global/services/Profile";
import Profile from "@/pages/dashboard/admin/profile";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CgScrollH } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const LeftProfile = () => {
  const [image, setImage] = useState("");
  const [imageLink, setImageLink] = useState("");
  const hiddenFileInput = useRef(null);
  const user = useSelector((state) => state.auth.user);
  // console.log("useSelector user=", user);
  const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(
          img,
          (maxSize - img.width) / 2,
          (maxSize - img.height) / 2
        );
        canvas.toBlob(
          (blob) => {
            const file = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now(),
            });

            // console.log(file);
            setImage(file);
            // handleUploadButtonClick(file);
          },
          "image/jpeg",
          0.8
        );
      };
    };
  };

  const handleUploadButtonClick = async () => {
    const data = new FormData();
    data.append("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=2e776485f3d339011e2d25b4f61ba6a1",
        data
      )
      .then((res) => {
        setImageLink(res.data.data.display_url);
      });

    const userData = {
      profileImage: imageLink,
    };
    const res = await UpdateUser(userData);
    if (res?.status === 200) {
      console.log(res);
      dispatch(setUser(res?.data?.data));
    } else {
      toast.error(res?.response?.data?.message);
    }
  };

  useEffect(() => {}, [imageLink]);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-upload-container">
      <div className="box-decoration">
        <label
          htmlFor="image-upload-input"
          className="image-upload-label relative"
        >
          {imageLink ? imageLink.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {imageLink ? (
            <img
              src={imageLink}
              // src=""
              alt="upload image"
              className="img-display-after w-[150px] h-[150px] rounded-full mx-auto relative"
            />
          ) : (
            <div className="bg-[#0D1218] md:h-[88px] h-[40px] md:w-[88px] w-[40px] mx-auto rounded-[50%] flex items-center justify-center Dm text-white font-[700] md:text-[18px] text-[14px]">
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </div>
          )}

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
